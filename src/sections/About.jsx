import React from "react";
import Cards from "./components/Cards";
import { Globe } from "./components/globe";
import CopyEmailButton from "./components/CopyEmailButton";

const About = () => {
  const grid2Container = React.useRef(null);
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Sathira Nimhana</p>
            <p className="subtext">
              Gameplay Programmer with 3+ years of hands-on experience in Unreal
              Engine (Blueprint & C++), specializing in first-person mechanics,
              system debugging, and immersive gameplay systems. Passionate about
              building high-quality, player-centric features in fast-paced dev
              environments. Proven ability to collaborate cross-functionally,
              optimize performance, and ship polished features across PC and VR
              platforms
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo " />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500"> Games ARE Fun</p>
                <Cards style={{rotate: "75deg", top: "60%", left: "45%"}} text="GRASP" containerRef={grid2Container}/>
                <Cards style={{rotate: "-30deg", top: "30%", left: "20%"}} text="SOLID" containerRef={grid2Container}/>
                <Cards style={{rotate: "90deg", bottom: "30%", left: "70%"}} text="Design" containerRef={grid2Container}/>
                <Cards style={{rotate: "-45deg", top: "55%", left: "0%"}} text="Prototype" containerRef={grid2Container}/>
                <Cards style={{rotate: "20deg", top: "10%", left: "38%"}} text="SRP" containerRef={grid2Container}/>
                <Cards style={{rotate: "30deg", top: "70%", left: "70%"}} image="/assets/logos/cplusplus.svg" containerRef={grid2Container}/>
                <Cards style={{rotate: "-45deg", top: "70%", left: "25%"}} image="/assets/logos/icons8-unreal-engine-64.png" containerRef={grid2Container}/>
                <Cards style={{rotate: "-40deg", top: "5%", left: "10%"}} image="/assets/logos/react.svg" containerRef={grid2Container}/>
            </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext"> Time Zone</p>
            <p className="subtext">I'm based in Sri Lanka, and open to remote work world wide</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]"><Globe /></figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Do you want start a project together ?</p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
