"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredDemo, setIsHoveredDemo] = useState(false);

  return (
    <div className="relative flex flex-col items-center text-center text-white w-full  overflow-hidden pt-12">
           
        {/* Rocket Image */}
        <div className="absolute left-[25%] top-[40px] transform  ">
            <img
          src="/mad-x/rocket.png"
          alt="rocket"
          className="mx-auto w-[88px] h-[88px] mb-6"
        />
        </div>
        
<div className="flex flex-col items-center justify-center w-full max-w-[1200px] gap-8">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-[88px] md:text-7xl text-white font-bold leading-tight mb-4">
          Madx — Built to <br />
          <span className="text-white">Code Less. Ship More.</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-[18px] md:text-[22px] mb-6 ">
          We created Madx to automate 70% of app development.
          Design faster.<br className="hidden md:block" /> Code smarter. Deliver better.
        </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            
          <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-white px-6 py-2 font-medium flex flex-row items-center transition-all duration-300"
                style={{
                    borderRadius: "35px",
                    border: "2px solid #1FE58D",
                    background: "#17C964",
                    backdropFilter: "blur(14.75px)",
                    boxShadow: isHovered ? "0 0 15px 3px #17C964" : "none",
                }}
                >
                <div className="mr-2 text-[22px]">Get started</div>
                <img src="/mad-x/Line-arrow-m.svg" alt="arrow" className="w-5 h-5" />
            </button>

          <button
                onMouseEnter={() => setIsHoveredDemo(true)}
                onMouseLeave={() => setIsHoveredDemo(false)}
                className="text-[#132319] px-6 py-1 font-medium flex flex-row items-center transition-all"
                style={{
                    borderRadius: "35px",
                    border: "2px solid #1FE58D",
                    background: "#B3CCB3",
                    backdropFilter: "blur(14.75px)",
                    boxShadow: isHoveredDemo ? "0 0 15px 3px #17C964" : "none",
                }}
                >   
                <div className="mr-2 text-[22px]">Request a Demo</div>
                <img src="/mad-x/Line-arrow-green.svg" alt="arrow" />
            </button>

          
        </div>
</div>

        {/* root image */}

        <div className="relative w-full h-[800px] flex items-center justify-center overflow-visible">
  <div
    className="absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    style={{
      width: "776px",
      height: "776px",
      borderRadius: "388px",
      background: "radial-gradient(50% 50% at 50% 50%, #73FFA0 0%, #459960 100%)",
      filter: "blur(250px)",
    }}
  ></div>

  <img src="/mad-x/home-bg.svg" alt="root-image-bg" className="z-10" />
</div>
        

      
    </div>
  );
}
