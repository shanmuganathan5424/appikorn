"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";

// Lazy load heavy components (not needed for LCP)
const CircleLogos = dynamic(() => import("./circular-image"), { ssr: false });
const CircularText = dynamic(() => import("./learn-more"), { ssr: false });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NewHero() {
  const text = "Appikorn";
  const subText = "All In One Solution";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 400);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Wrapper: any = isMobile ? "div" : motion.div;

  return (
    <section
      className="w-full relative min-h-screen bg-gradient-to-b from-[#080121] to-[#000000] flex items-center justify-center text-white overflow-hidden"
      aria-label="Hero section with branding"
    >

{/* Bottom blur */}
      <div
        className="z-30 absolute bottom-0 left-1/2 -translate-x-1/2 
        w-full h-[10%] aspect-square rounded-full bg-black blur-[150px] opacity-100"
      />


      {/* Background overlay */}
      {/* <div
        className="z-10 absolute -bottom-44 left-1/2 -translate-x-1/2 
        w-[40%] aspect-square rounded-full bg-purple-950 blur-[150px] opacity-50"
      /> */}

      {/* Circle logos (lazy-loaded, no LCP impact) */}
<div className=" min-h-screen hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 sm:-bottom-12 sm:translate-y-[100%] md:translate-y-[55%] md:w-[1440] w-full justify-center"> <CircleLogos /> </div>


      {/* Hero Content */}
      <div className="z-40 relative text-center px-4 sm:px-6 lg:px-8">
        {/* Static h2 */}
        <h2 className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-3">
          Unlimited Campaigns, Maximum Results
        </h2>

        {/* Instantly rendered LCP element (no motion) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {text}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{subText}</span>
        </h1>

      </div>

      {/* Bottom Labels */}
<Wrapper
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  className="z-30 w-[80%] mx-auto absolute left-1/2 -translate-x-1/2 bottom-8 hide-on-small-height sm:block md:hidden lg:block"
>
  <Image
    src="/buttom-lables/lable-md.svg"
    alt="Brand partner logos for desktop"
    className="hidden lg:block w-full h-auto"
    width={800}
    height={200}
  />
  <Image
    src="/buttom-lables/lable-sm.svg"
    alt="Brand partner logos for tablet"
    className="hidden md:block lg:hidden w-full h-auto"
    width={800}
    height={200}
  />
</Wrapper>



      {/* Mobile circular text (lazy) */}
      <div className="block sm:hidden absolute left-1/2 -translate-x-1/2 bottom-0">
        <CircularText />
      </div>
    </section>
  );
}
