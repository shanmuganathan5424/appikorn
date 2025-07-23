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

  useEffect(() => {
    if (startAnimation) {
      const shrinkTimer = setTimeout(() => setImageShrunk(true), 1000);
      const flipTimer = setTimeout(() => setShowFlip(true), 1800);
      const textTimer = setTimeout(() => setTextVisible(true), 2700);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(flipTimer);
        clearTimeout(textTimer);
      };
    }
  }, [startAnimation]);

  return (
    <div
      className="relative w-full h-[1024px] overflow-hidden 
        [background:linear-gradient(180deg,_#08081F_-0.4%,_rgba(8,8,31,0)_39.6%,_#08081F_79.6%)]"
      onMouseEnter={() => !startAnimation && setStartAnimation(true)}
    >
      {/* Initial Background */}
      {!startAnimation && (
        <img
          src="/Rectangle-svg.svg"
          alt="Intro Background"
          className="absolute inset-0 w-full h-full object-cover z-30 transition-opacity duration-1000"
        />
      )}

      <div className="relative w-full h-full flex flex-col items-center justify-start z-10 bg-transparent">
        {/* Top Navbar */}
        <div
          className={`transition-all duration-1000 ease-in-out delay-500 
            ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
        >
          <TopNavBar />
        </div>

        {/* Animated Logo */}
        <h1
          className={`z-10 text-center font-anton bg-clip-text text-transparent 
            bg-gradient-to-t from-[#FFF5F5] to-[#6A0DAD] tracking-[7px]
            transition-all duration-1000 ease-in-out
            ${textVisible 
              ? "text-[280px] opacity-100 translate-y-[-20px]" 
              : "text-[230px] opacity-0 translate-y-[200px]"}`}
        >
          APPIKORN
        </h1>

        {/* Landing Image */}
        {startAnimation && (
          <div
            className={`z-10 absolute bottom-6 left-1/2 transform -translate-x-1/2 
              transition-all duration-1000 ease-in-out
              ${imageShrunk ? "w-[1200px] translate-y-12" : "w-[1900px] translate-y-64"}`}
          >
            <img
              src="/landing/landing_image.png"
              alt="Landing"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Flip Animation */}
        {showFlip && <FlipOnHover />}

        {/* Bottom Wave */}
        {textVisible && (
          <div className="absolute bottom-0 left-0 w-full z-0">
            <WaveTop />
          </div>
        )}
      </div>
    </div>
  );
}
