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
  const [hasMounted, setHasMounted] = useState(false);

  // Fix 1: Set hasMounted on component mount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Fix 2: Animation sequence trigger
  useEffect(() => {
    if (hasMounted && startAnimation) {
      const shrinkTimer = setTimeout(() => {
        setImageShrunk(true);
      }, 1000);

      const flipTimer = setTimeout(() => {
        setShowFlip(true);
      }, 1500);

      const textTimer = setTimeout(() => {
        setTextVisible(true);
      }, 2500);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(flipTimer);
        clearTimeout(textTimer);
      };
    }
  }, [hasMounted, startAnimation]);

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
        <div
          className={`transition-all duration-1000 ease-in-out 
          ${textVisible ? "opacity-100 translate-y-4" : "opacity-0 -translate-y-7"}`}
        >
          <TopNavBar />
        </div>

        {/* Animated center logo text */}
        <div
          className={`z-10 text-center font-anton font-light 
          bg-[linear-gradient(to_top,_#FFFFFF,_#6A0DAD)] bg-clip-text text-transparent tracking-[7px]
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
            className={`z-10 absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out
              ${imageShrunk ? "w-[1350px] translate-y-12" : "w-[1900px] translate-y-64"}`}
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
