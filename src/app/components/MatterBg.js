"use client";
import { useEffect, useRef } from "react";
import Matter from "matter-js";
import $ from "jquery";

export default function MatterBg() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.id = "wrapper-canvas";
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = 0;
    wrapperRef.current.appendChild(canvas);

    // Set up dimensions
    let dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Matter.js plugins
    if (Matter.use) {
      try {
        Matter.use("matter-attractors");
        Matter.use("matter-wrap");
      } catch (e) {}
    }

    // Aliases
    var Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Common = Matter.Common,
      Bodies = Matter.Bodies;

    // Create engine
    var engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // Create renderer
    var render = Render.create({
      element: wrapperRef.current,
      canvas: canvas,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    // Create runner
    var runner = Runner.create();

    // Create demo scene
    var world = engine.world;
    world.gravity.scale = 0;

    // Attractor body
    var attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        render: {
          fillStyle: `#000`,
          strokeStyle: `#000`,
          lineWidth: 0,
        },
        isStatic: false,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );
    World.add(world, attractiveBody);

    // Add sand/particles and keep references
    const particles = [];
    for (var i = 0; i < 60; i += 1) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let poligonNumber = Common.random(3, 6);

      var body = Bodies.polygon(x, y, poligonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#222222",
          strokeStyle: `#000000`,
          lineWidth: 2,
        },
      });
      World.add(world, body);
      particles.push(body);

      let r = Common.random(0, 1);
      var circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3 ? `#27292d` : `#444444`,
          strokeStyle: `#000000`,
          lineWidth: 2,
        },
      });
      World.add(world, circle1);
      particles.push(circle1);

      var circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? `#334443` : `#222222`,
          strokeStyle: `#111111`,
          lineWidth: 4,
        },
      });
      World.add(world, circle2);
      particles.push(circle2);

      var circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: `#191919`,
          strokeStyle: `#111111`,
          lineWidth: 3,
        },
      });
      World.add(world, circle3);
      particles.push(circle3);
    }

    // Track mouse globally
    let mousePos = {
      x: render.options.width / 2,
      y: render.options.height / 2,
    };

    function handleMouseMove(e) {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    }
    window.addEventListener("mousemove", handleMouseMove);

    Events.on(engine, "afterUpdate", function () {
      // Move the attractor body toward the mouse
      Body.translate(attractiveBody, {
        x: (mousePos.x - attractiveBody.position.x) * 0.12, // <--- 0.12 is the speed factor
        y: (mousePos.y - attractiveBody.position.y) * 0.12,
      });

      // Apply a force to each particle toward the mouse
      for (let p of particles) {
        // Calculate direction vector
        const dx = mousePos.x - p.position.x;
        const dy = mousePos.y - p.position.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        // The closer the particle, the less force
        const forceMagnitude = 0.000002 * Math.min(dist, 300); // <--- 0.00002 is the force factor
        const fx = (dx / dist) * forceMagnitude;
        const fy = (dy / dist) * forceMagnitude;
        Matter.Body.applyForce(p, p.position, { x: fx, y: fy });
      }
    });

    // Run engine and renderer
    Runner.run(runner, engine);
    Render.run(render);

    // Responsive resize
    function setWindowSize() {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    }
    const debouncedResize = debounce(setWindowSize, 250);
    window.addEventListener("resize", debouncedResize);

    // Cleanup
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Debounce helper
  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}