"use client";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { useEffect } from "react";
 import { FaArrowDownLong } from "react-icons/fa6";
import Button from "./button";

export default function Home() {
     
  return (
    <>  
      
      <section className="flex flex-col justify-between h-screen bg-[#111] text-white font-[Nunito]">
      {/* <section  className="flex flex-col justify-between h-screen text-white font-[Nunito] bg-gradient-to-br from-[#111] via-[#1d314b] to-[#020405]"> */}
 
      <header className="z-10 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto">
        <svg width="70" height="70" viewBox="0 0 406 368" xmlns="http://www.w3.org/2000/svg" >
          <path
            d="M314.516 203.174L314.516 349.104L162.117 208.727M314.516 203.174L282.653 203.26M314.516 203.174L337.498 203.26L380.617 170.782L314.516 170.782M162.117 208.727L117.661 170.634L157.117 170.782M162.117 208.727L65.1165 301.139L20.176 301.139L137.099 188.83M200.117 170.782L282.653 96.1739L282.653 170.782M200.117 170.782L282.653 170.782M200.117 170.782L157.117 170.782M282.653 203.26L210.462 202.796L282.653 270.76L282.653 203.26ZM282.653 170.782L314.516 170.782M157.117 170.782L315.751 20.1061L314.516 170.782"
            stroke="currentColor"
            strokeWidth="10"
          />
        </svg>
        <div className="flex text-3xl hover:scale-150  gap-4 pointer-events-auto">
          <PiTelegramLogoDuotone />
        </div>
      </header>
 
     <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10  ">
        <img  
          src="/name-logo.svg"
          alt="Logo"
          className="w-190 h-160 object-contain pb-8 pl-20 sm:pl-32  "
          draggable={false}
        />
      </div>

      <div className="absolute inset-0 hidden md:block" id="wrapper-canvas"></div>
      <div className="flex -mt-10 relative w-full px-4 max-w-screen-xl mx-auto">
        <div className="relative ml-4 md:ml-12 w-full">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="pointer-events-none text-4xl md:text-[64px] font-[Spartan] font-extrabold mr-12">
                Aryan Kumar Singh
              </h1>
              <p className="pointer-events-none font-[Merriweather] italic mt-1 mb-2 text-lg md:text-2xl">
                MERN Stack Developer
              </p>
              <p className="pointer-events-none font-[Merriweather] italic mb-2">
                <span>Graphics Designer</span>
                <br />
                <span>UI/UX Designer</span>
              </p>
              <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
                About Me
              </button>
            </div>
            <Button className="hidden md:block" />
          </div>
        </div>
      </div>
 
      <div className="relative pb-7 self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
        <button onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })} className="bg-[#4595eb] py-2 px-5 text-2xl rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-6">
          Latest Works
        </button>
        {/* Arrow icon below the button */}

        <div className="flex justify-center h-8 items-center">
          <FaArrowDownLong className="h-40" />
        </div>
      </div>
    </section>  
    </>
  );
}

