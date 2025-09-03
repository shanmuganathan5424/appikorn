"use client";

import { motion } from "framer-motion";

export default function Section() {
  const text = "Product Designer & Creative Strategist".split(" ");

  return (
    <section className="relative w-full h-[400px] sm:min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-around overflow-hidden bg-black px-6 py-12 sm:py-16">
      {/* Background slide animation (desktop only) */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-[55%] h-[55%] z-0 bg-white rounded-r-full"
      />

      {/* Left Text (centered on mobile) */}
      <div className="relative z-10 max-w-lg text-center md:text-left md:mr-10 lg:mr-16 flex flex-col items-center md:items-start justify-center">
        <h1 className="text-[24px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-tight">
          {text.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
              className="inline-block mr-2 text-white md:text-black"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: text.length * 0.2 + 1.2, duration: 0.8 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-400 md:text-gray-600"
        >
          Crafting user experiences, branding, and digital products that blend
          aesthetics with functionality.
        </motion.p>
      </div>

      {/* Right Image with floating stickers (desktop only) */}
      <div className="hidden md:flex relative items-center justify-center z-0 w-auto">
        {/* Main Image Container */}
        <div className="relative w-[22rem] h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden shadow-xl bg-gradient-to-r from-purple-400 to-purple-600 blur-3xl opacity-20"></div>

        {/* Floating skill labels */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-6 left-0 bg-white border shadow-md rounded-full px-4 py-2 text-sm lg:text-base font-medium"
        >
          UX Design
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute -top-10 right-0 bg-white border shadow-md rounded-full px-4 py-2 text-sm lg:text-base font-medium"
        >
          Motion
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 right-0 bg-white border shadow-md rounded-full px-4 py-2 text-sm lg:text-base font-medium"
        >
          Branding
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-2 left-2 bg-white border shadow-md rounded-full px-4 py-2 text-sm lg:text-base font-medium"
        >
          Design Strategy
        </motion.div>
      </div>
    </section>
  );
}
