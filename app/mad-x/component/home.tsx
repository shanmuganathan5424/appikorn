"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredDemo, setIsHoveredDemo] = useState(false);

  return (
    <div className="relative flex flex-col items-center text-center text-white w-full overflow-hidden pt-8 sm:pt-12 ">
      
      {/* Rocket Image - Only show on >=1400px */}
      <div className="absolute hidden [@media(min-width:1400px)]:block left-[22%] top-[70px] transform z-20 rotate-45">
        <img
          src="/mad-x/rocket.gif"
          alt="rocket"
          className="w-[60px] sm:w-[70px] md:w-[88px] h-auto"
        />
      </div>

      {/* Main Container */}
      <div className="flex flex-col items-center justify-center w-full  gap-8 pt-16 ">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          <h1 className="font-bold leading-tight text-[24px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[88px]">
            Madx — Built to <br className="hidden sm:block"/>
            <span className="text-white">Code Less. Ship More.</span>
          </h1>

          <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed max-w-[600px] md:max-w-2xl">
            We created Madx to automate 70% of app development.
            <br className="hidden md:block" />
            Design faster. Code smarter. Deliver better.
          </p>
        </div>

   <div className="flex flex-row flex-wrap gap-3 justify-center mb-6 sm:mb-10 md:mb-14 xl:mb-16 px-4 sm:px-0">
  {/* Get Started */}
  <button
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-medium text-white text-sm sm:text-lg transition-all min-w-[120px] max-w-full flex-shrink"
    style={{
      borderRadius: "35px",
      border: "2px solid #1FE58D",
      background: "#17C964",
      backdropFilter: "blur(14.75px)",
      boxShadow: isHovered ? "0 0 15px 3px #17C964" : "none",
    }}
  >
    <span className="mr-2 text-sm sm:text-xl whitespace-nowrap">Get started</span>
    <img
      src="/mad-x/Line-arrow-m.svg"
      alt="arrow"
      className="w-3 sm:w-5 h-3 sm:h-5"
    />
  </button>

  {/* Request a Demo */}
  <button
    onMouseEnter={() => setIsHoveredDemo(true)}
    onMouseLeave={() => setIsHoveredDemo(false)}
    className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-medium text-[#132319] text-sm sm:text-lg transition-all min-w-[140px] max-w-full flex-shrink"
    style={{
      borderRadius: "35px",
      border: "2px solid #1FE58D",
      background: "#B3CCB3",
      backdropFilter: "blur(14.75px)",
      boxShadow: isHoveredDemo ? "0 0 15px 3px #17C964" : "none",
    }}
  >
    <span className="mr-2 text-sm sm:text-xl whitespace-nowrap">
      <span className="hidden sm:inline">Request a</span> Demo
    </span>
    <img
      src="/mad-x/Line-arrow-green.svg"
      alt="arrow"
      className="w-3 sm:w-5 h-3 sm:h-5"
    />
  </button>
</div>


      </div>
{/* Radial Background + Images */}
<div className="relative w-full flex items-center justify-center overflow-visible py-3 sm:py-8 md:py-16 lg:py-20 min-h-[300px] sm:min-h-[600px] md:min-h-[700px]">
  
  {/* Radial Gradient */}
  <div
    className="absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    style={{
      width: "100%",
      maxWidth: "776px",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      background:
        "radial-gradient(50% 50% at 50% 50%, #73FFA0 0%, #459960 100%)",
      filter: "blur(250px)",
    }}
  ></div>

  {/* Home Background */}
  <img
    src="/mad-x/home-image.svg"
    alt="home-background"
    className="absolute z-10 w-[90%] sm:w-[95%] max-w-[600px] sm:max-w-[800px] h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  />

  {/* Root Logo */}
  <img
    src="/mad-x/root-logo.svg"
    alt="root-logo"
    className="absolute z-0 w-[85%] sm:w-[95%] max-w-[1400px] sm:max-w-[1600px] h-auto hidden xl:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  />
</div>

    </div>
  );
}
