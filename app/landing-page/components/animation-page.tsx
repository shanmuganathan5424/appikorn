"use client";
import { useState, useEffect } from "react";
import TopNavBar from "@/global-component/navigation";

// Flip background component
function FlipOnHover() {
  return (
    <div className="group absolute top-0 left-0 flex w-full h-full overflow-hidden pointer-events-none">
      {/* Left panel */}
      <div
        className={`w-1/2 h-full transition-all duration-100 ease-in-out ml-0.5
          [background:conic-gradient(from_90deg_at_50%_50%,_white_0deg,_#CCC_30deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]`}
      ></div>

      {/* Right panel mirrored */}
      <div
        className={`w-1/2 h-full scale-x-[-1] transition-all duration-100 ease-in-out mr-0.5
          [background:conic-gradient(from_90deg_at_50%_50%,_white_0deg,_#CCC_30deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]`}
      ></div>
    </div>
  );
}

// Wave bottom design
function WaveTop() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 540" fill="none">
      <path d="M0 0C0 0 416.464 174.721 717.997 175.076C1019.53 175.43 1440 0 1440 0V540H0V0Z" fill="#F8F8FF"/>
    </svg>
  );
}

// Main Animation Component
export default function Animate() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [imageShrunk, setImageShrunk] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [showFlip, setShowFlip] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const shrinkTimer = setTimeout(() => {
        setImageShrunk(true);
      }, 1000);

      const textTimer = setTimeout(() => {
        setTextVisible(true);
      }, 2000);

      const flipTimer = setTimeout(() => {
        setShowFlip(true);
      }, 2500);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(textTimer);
        clearTimeout(flipTimer);
      };
    }
  }, [startAnimation]);

  return (
    <div
      className="relative w-full h-[1024px] overflow-hidden
      [background:linear-gradient(180deg,_#08081F_-0.4%,_rgba(8,8,31,0)_39.6%,_#08081F_79.6%)]"
      onMouseEnter={() => !startAnimation && setStartAnimation(true)}
    >
      {/* Static background before animation starts */}
      {!startAnimation && (
        <img
          src="/Rectangle-svg.svg"
          alt="Intro Background"
          className="absolute inset-0 w-full h-full object-cover z-30"
        />
      )}

      <div className="relative bg-darkblue w-full h-full flex flex-col items-center z-10">

        {/* Navigation bar */}
        <div className={`transition-all duration-1000 ease-in-out 
          ${textVisible ? "opacity-100 translate-y-4" : "opacity-0 -translate-y-7"}`}>
          <TopNavBar />
        </div>

        {/* Animated center logo text */}
        <div
          className={`z-10 text-center font-anton font-light 
            bg-[linear-gradient(to_top,_#FFF5F5,_#6A0DAD)] bg-clip-text text-transparent tracking-[7px]
            transition-all duration-1000 ease-in-out
            ${textVisible 
              ? "text-[280px] opacity-100 translate-y-[-20px]" 
              : "text-[230px] opacity-0 translate-y-[200px]"}`}
        >
          APPIKORN
        </div>

        {/* Landing image animation */}
        {startAnimation && (
          <div
            className={`z-10 absolute bottom-0 transition-all duration-1000 ease-in-out
              ${imageShrunk ? "w-[1200px] translate-y-12" : "w-[1600px] translate-y-96"}`}
          >
            <img
              src="/landing/landing_image.png"
              alt="landing"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Flip animation AFTER image appears */}
        {showFlip && <FlipOnHover />}

        {/* Wave at the bottom */}
        {textVisible && (
          <div className="z-0 w-full absolute -bottom-1 left-0">
            <WaveTop />
          </div>
        )}
      </div>
    </div>
  );
}
