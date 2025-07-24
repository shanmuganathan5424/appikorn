"use client";
import { useState, useEffect } from "react";
import TopNavBar from "@/global-component/navigation";
import WaveTop from "../components/wavetop";
import FlipOnHover from "./fliponhover";

export default function Animate() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [imageShrunk, setImageShrunk] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [showFlip, setShowFlip] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Mount checker
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Animation sequence
  useEffect(() => {
    if (hasMounted && startAnimation) {
      const shrinkTimer = setTimeout(() => {
        setImageShrunk(true);
      }, 1000);

      const flipTimer = setTimeout(() => {
        setShowFlip(true);
      }, 1700);

      const textTimer = setTimeout(() => {
        setTextVisible(true);
      }, 2600);

      const waveTimer = setTimeout(() => {
        setShowWave(true);
      }, 1500);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(flipTimer);
        clearTimeout(textTimer);
        clearTimeout(waveTimer);
      };
    }
  }, [hasMounted, startAnimation]);

  return (
    <div
      className="relative w-full h-[1024px] overflow-hidden
      [background:linear-gradient(180deg,_#08081F_-0.4%,_rgba(8,8,31,0)_39.6%,_#08081F_79.6%)]"
      onMouseEnter={() => !startAnimation && setStartAnimation(true)}
    >
      {/* Background image before animation starts */}
      {!startAnimation && (
        <img
          src="/Rectangle-svg.svg"
          alt="Intro Background"
          className="absolute inset-0 w-full h-full object-cover z-30"
        />
      )}

      <div className="relative bg-darkblue w-full h-full flex flex-col items-center z-10">
        {/* Navigation bar */}
        <div
          className={`transition-all duration-1000 ease-in-out 
          ${textVisible ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <TopNavBar />
        </div>

        {/* Logo text animation (bottom to top) */}
        <div
          className={`z-10 text-center font-anton font-light 
          bg-[linear-gradient(to_top,_#FFFFFF,_#6A0DAD)] bg-clip-text text-transparent tracking-[7px]
          transition-all duration-1000 ease-in-out
          ${textVisible 
            ? "text-[280px] opacity-100 -translate-y-6" 
            : "text-[230px] opacity-0 translate-y-28"}`}
        >
          APPIKORN
        </div>

        {/* Landing image animation (bottom to top) */}
        {startAnimation && (
          <div
            className={`z-10 absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out
              ${imageShrunk ? "w-[1350px] translate-y-16" : "w-[1900px] translate-y-36"}`}
          >
            <img
              src="/landing/landing_image.png"
              alt="landing"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Flip animation component */}
        {showFlip && <FlipOnHover />}

        {/* WaveTop (bottom to top fade in) */}
        <div
  className={`absolute left-0 w-full z-0 transition-all duration-1000 ease-in-out 
    ${showWave ? "bottom-0 opacity-100" : "-bottom-[100%] opacity-50"}`}
>

          <WaveTop />
        </div>
      </div>
    </div>
  );
}
