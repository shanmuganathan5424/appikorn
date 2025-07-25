"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function MapFrame() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return(
    <div
      ref={ref}
      className="flex flex-col md:flex-row gap-20 items-center p-10"
    >
      {/* Map Image - Animate from Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/YifcRTGADSmQjLmQ7"
        >
          <img
            src="/contact/map.svg"
            alt="Map"
            className="w-full max-w-md"
          />
        </Link>
      </motion.div>

      {/* Text Content - Animate from Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Our<br />Location
        </h1>
        <p className="mt-4 text-xl leading-relaxed">
          Puducherry-605009, India
        </p>
        <Link
          href="https://www.appikorn.com"
          target="_blank"
          className="mt-4 inline-block text-blue-600 underline text-lg font-medium"
        >
          https://www.appikorn.com
        </Link>
      </motion.div>
    </div>
  );
}
