"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function MapFrame() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 items-center p-4 sm:p-6 md:p-10"
    >
      {/* Map Image - Animate from Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="flex-1 flex justify-center"
      >
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/YifcRTGADSmQjLmQ7"
        >
          <img
            src="/contact/map.svg"
            alt="Map"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </Link>
      </motion.div>

      {/* Text Content - Animate from Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex-1 text-center md:text-left text-black"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Our<br />Location
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
          Puducherry-605009, India
        </p>
        <Link
          href="https://www.appikorn.com"
          target="_blank"
          className="mt-3 sm:mt-4 inline-block text-blue-600 underline text-sm sm:text-base md:text-lg font-medium"
        >
          https://www.appikorn.com
        </Link>
      </motion.div>
    </div>
  );
}
