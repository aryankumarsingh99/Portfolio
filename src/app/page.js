import MatterBg from "./components/MatterBg";
import Header from "./components/Header";
import Section from "./components/section";

export default function Home() {
  return (
    <>
      <div className=" ">
        <MatterBg/>
        <Header  />
        <div className="relative z-10 bg-white">
          <Section />
        </div>
        
      </div>
    </>
  );
}
