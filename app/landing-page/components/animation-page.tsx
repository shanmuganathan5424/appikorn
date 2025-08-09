"use client";
import { useState, useEffect } from "react";
import TopNavBar from "@/global-component/navigation";
import WaveTop from "../components/wavetop";
import FlipOnHover from "./fliponhover";
import PanelSlider from "./pannelslider";

export default function Animate() {
  const [mounted, setMounted] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [imageShrunk, setImageShrunk] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [showFlip, setShowFlip] = useState(false);
  const [showWave, setShowWave] = useState(false);

  // Ensure client-only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-start animation after 1 second on mount
  useEffect(() => {
    const initTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    return () => clearTimeout(initTimer);
  }, []);

  // Animation sequence after start
  useEffect(() => {
    if (startAnimation) {
      const shrinkTimer = setTimeout(() => setImageShrunk(true), 1000);
      const flipTimer = setTimeout(() => setShowFlip(true), 1700);
      const textTimer = setTimeout(() => setTextVisible(true), 2600);
      const waveTimer = setTimeout(() => setShowWave(true), 1500);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(flipTimer);
        clearTimeout(textTimer);
        clearTimeout(waveTimer);
      };
    }
  }, [startAnimation]);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <div
      className="relative w-full h-[1024px] overflow-hidden flex-col items-center justify-center
      bg-gradient-to-b from-[#08081F] via-transparent to-[#08081F]"
    >
      {/* Background image (fades out instead of disappearing) */}
      <img
        src="/Rectangle-svg.svg"
        alt="Intro Background"
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          startAnimation ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Navigation on top */}
      

      <div className="relative w-full h-full flex flex-col items-center bg-darkblue z-10 pt-8">
        {/* Logo Text */}
        <div
          className={`z-10 text-center font-anton font-light 
          bg-gradient-to-b from-[#6A0DAD] via-[#6A0DAD] to-white
          bg-clip-text text-transparent tracking-[7px]
          transition-all duration-1000 ease-in-out
          ${textVisible ? "text-[280px] opacity-100 -translate-y-6" : "text-[230px] opacity-0 translate-y-28"}`}
        >
          APPIKORN
        </div>

        {/* Landing Image */}
        <div
          className={`z-10 absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out
          ${startAnimation ? (imageShrunk ? "w-[1350px] translate-y-16" : "w-[1900px] translate-y-36") : "w-[1900px] translate-y-36"}`}
        >
          <img
            src="/landing/landing_image.png"
            alt="landing"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Flip animation component */}
        {showFlip && <FlipOnHover />}

        {/* Wavetop fade in from bottom */}
        <div
          className={`absolute left-0 w-full z-0 transition-all duration-1000 ease-in-out 
          ${showWave ? "-bottom-1 opacity-100" : "-bottom-[100%] opacity-50"}`}
        >
          <WaveTop />
        </div>
      </div>
    </div>
  );
}
