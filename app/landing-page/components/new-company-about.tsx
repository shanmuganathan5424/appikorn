"use client";

import { motion } from "framer-motion";
import CircleLogos from "./circular-image";
import { useState, useEffect } from "react";
import CircularText from "./learn-more";
import Image from "next/image";

const bgCircleVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const circularImageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
      className="w-full relative min-h-screen bg-gradient-to-br from-[#0a0f1c] to-[#101828] flex items-center justify-center text-white overflow-hidden"
      aria-label="Hero section with branding"
    >
      {/* Background overlay */}
      <div
        className="z-10 absolute -bottom-44 left-1/2 -translate-x-1/2 
        w-[40%] aspect-square rounded-full bg-blue-600 blur-[150px] opacity-50"
      />

      {/* Circular logos */}
      <div className="md:flex absolute left-1/2 -translate-x-1/2 bottom-0 sm:translate-y-[100%] md:translate-y-[55%] md:w-[1440px] lg:w-full xl:w-full items-center justify-center">
        <motion.div
          variants={circularImageVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex items-center justify-center z-30"
        >
          <CircleLogos />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="z-40 relative top-0 flex-col items-center justify-start w-full h-full text-center px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-3"
        >
          Unlimited Campaigns, Maximum Results
        </motion.h3>

        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {text.split("").map((char, i) => (
            <motion.span key={i} variants={letter} className="inline-block">
              {char}
            </motion.span>
          ))}
          <br />
          <motion.span
            variants={letterContainer}
            initial="hidden"
            animate="visible"
            className="text-blue-400"
          >
            {subText.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <label htmlFor="website-input" className="sr-only">
            Enter your website URL
          </label>
          <input
            id="website-input"
            type="text"
            defaultValue="https://mywebsite.com"
            className="px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-[#1a2234] text-gray-200 w-full sm:w-64 md:w-80 border border-gray-700 focus:outline-none text-sm sm:text-base"
          />
          <button
            aria-label="Get started with Appikorn"
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition font-semibold text-sm sm:text-base"
          >
            Get Started →
          </button>
        </motion.div>
      </div>

      {/* Bottom Labels */}
      <Wrapper
        {...(!isMobile && {
          variants: buttonVariants,
          initial: "hidden",
          animate: "visible",
        })}
        className="z-30 w-[70%] sm:w-[80%] md:w-[80%] mx-auto absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-12 md:bottom-14"
      >
        <Image
          src="/buttom-lables/lables.svg"
          alt="Brand partner logos desktop"
          className="hidden lg:block w-full h-auto"
          width={800}
          height={200}
          priority
        />
        <Image
          src="/buttom-lables/lable-sm.svg"
          alt="Brand partner logos tablet"
          className="hidden md:block lg:hidden w-full h-auto"
          width={800}
          height={200}
          loading="lazy"
        />
      </Wrapper>

      {/* Mobile background */}
      <div
        className="block sm:hidden absolute left-1/2 -translate-x-1/2 -bottom-44  w-full aspect-square rounded-full 
        bg-gradient-to-br from-[#0a0f1c] to-[#101828] 
        shadow-[0_-40px_80px_rgba(0,0,0,0.8)]"
      />
      <div className="block sm:hidden absolute left-1/2 -translate-x-1/2 bottom-0">
        <CircularText />
      </div>
    </section>
  );
}
