"use client";
import { useState, useEffect } from "react";
import TopNavBar from "@/global-component/navigation";

export default function Animate() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [imageShrunk, setImageShrunk] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [flipTriggered, setFlipTriggered] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      // Start image shrink after a short delay (image appears large first)
      const shrinkTimer = setTimeout(() => {
        setImageShrunk(true); // image becomes default size
      }, 100); // image appears big immediately

      // After image shrinks (1s), show text + navbar
      const showTextTimer = setTimeout(() => {
        setTextVisible(true);
      }, 1100);

      // After text appears, trigger Flip hover automatically
      const flipTimer = setTimeout(() => {
        setFlipTriggered(true);
      }, 1600);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(showTextTimer);
        clearTimeout(flipTimer);
      };
    }
  }, [startAnimation]);

  return (
    <div
      className="relative w-full h-[1024px] [background:linear-gradient(180deg,_#08081F_-0.4%,_rgba(8,8,31,0)_39.6%,_#08081F_79.6%)]"
      onMouseEnter={() => !startAnimation && setStartAnimation(true)}
    >
      <div className="relative bg-darkblue w-full h-[1024px] flex flex-col items-center">
        
        {/* TopNavBar shows with appikorn text */}
        <div
          className={`transition-all duration-1000 ease-in-out ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-7"
          }`}
        >
          <TopNavBar />
        </div>

        {/* APPIKORN Text */}
        <div
          className={`text-center font-anton font-light bg-[linear-gradient(to_top,_#FFF5F5,_#2A2AFF)] bg-clip-text text-transparent tracking-[7px] transition-all duration-1000 ease-in-out
          ${textVisible ? "text-[280px] opacity-100 mt-0" : "text-[18px] opacity-0 mt-10"}`}
        >
          APPIKORN
        </div>

        {/* Flip effect automatically triggers without hover */}
        {flipTriggered && <FlipOnHover autoTrigger={true} />}

        {/* Landing Image Animation */}
        <div
          className={`z-10 absolute bottom-0 transition-all duration-1000 ease-in-out ${
            startAnimation && !imageShrunk
              ? "w-[1440px] h-[950px] translate-y-9"
              : "w-[1200px] h-[750px] translate-y-0"
          }`}
        >
          {startAnimation && (
            <img
              src="/landing/landing_image.png"
              alt="landing"
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Wave shown with text */}
        {textVisible && (
          <div className="z-0 w-full absolute -bottom-1 left-0">
            <WaveTop />
          </div>
        )}
      </div>
    </div>
  );
}

export function FlipOnHover({ autoTrigger = false }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (autoTrigger) {
      setFlipped(true);
    }
  }, [autoTrigger]);

  return (
    <div className="absolute top-0 left-0 flex flex-row w-full h-[1024px] justify-start items-start">
      <div
        className={`w-1/2 h-[1024px] [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)] mix-blend-color-dodge transition-transform duration-500 ${
          flipped ? "-scale-y-100" : ""
        }`}
      ></div>
      <div
        className={`w-1/2 h-[1024px] [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)] mix-blend-color-dodge -scale-x-100 transition-transform duration-500 ${
          flipped ? "-scale-y-100" : ""
        }`}
      ></div>
    </div>
  );
}

export function WaveTop() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 430" fill="none" className="w-full h-auto">
      <path d="M0 0C0 0 416.464 174.721 717.997 175.076C1019.53 175.43 1440 0 1440 0V430H0V0Z" fill="#F9F9FF" />
    </svg>
  );
}
