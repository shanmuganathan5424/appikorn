"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredDemo, setIsHoveredDemo] = useState(false);

  return (
    <div className="relative flex flex-col items-center text-center text-white w-full overflow-hidden pt-12 px-4">
      
      {/* Rocket Image - Desktop only */}
      <div className="absolute left-[22%] top-[70px] transform z-20 rotate-45 hide-below-1400">
  <img
    src="/mad-x/rocket.gif"
    alt="rocket"
    className="w-[88px] h-[88px]"
  />
</div>



      {/* Main Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] gap-8">

        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-[40px] sm:text-[64px] md:text-[72px] lg:text-[88px] font-bold leading-tight">
            Madx — Built to <br />
            <span className="text-white">Code Less. Ship More.</span>
          </h1>

          <p className="text-gray-300 text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed max-w-2xl">
            We created Madx to automate 70% of app development.
            <br className="hidden md:block" />
            Design faster. Code smarter. Deliver better.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {/* Get Started */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center justify-center px-6 py-2 font-medium text-white text-[18px] transition-all"
            style={{
              borderRadius: "35px",
              border: "2px solid #1FE58D",
              background: "#17C964",
              backdropFilter: "blur(14.75px)",
              boxShadow: isHovered ? "0 0 15px 3px #17C964" : "none",
            }}
          >
            <span className="mr-2 text-[20px]">Get started</span>
            <img src="/mad-x/Line-arrow-m.svg" alt="arrow" className="w-5 h-5" />
          </button>

          {/* Request a Demo */}
          <button
            onMouseEnter={() => setIsHoveredDemo(true)}
            onMouseLeave={() => setIsHoveredDemo(false)}
            className="flex items-center justify-center px-6 py-2 font-medium text-[#132319] text-[18px] transition-all"
            style={{
              borderRadius: "35px",
              border: "2px solid #1FE58D",
              background: "#B3CCB3",
              backdropFilter: "blur(14.75px)",
              boxShadow: isHoveredDemo ? "0 0 15px 3px #17C964" : "none",
            }}
          >
            <span className="mr-2 text-[20px]">Request a Demo</span>
            <img src="/mad-x/Line-arrow-green.svg" alt="arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Radial Background + Main Image */}
      <div className="relative w-full h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-visible">
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

        <img
          src="/mad-x/home-bg.svg"
          alt="root-image-bg"
          className="z-10 max-w-full h-auto"
        />
      </div>
    </div>
  );
}
