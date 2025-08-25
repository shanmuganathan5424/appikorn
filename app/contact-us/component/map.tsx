"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function MapFrame() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 items-center p-4 sm:p-6 md:p-10"
      aria-labelledby="location-heading"
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
          aria-label="View our location on Google Maps"
        >
          <Image
            src="/contact/map.svg"
            alt="Company location map in Puducherry, India"
            width={600}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            priority={false}
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
        <h2
          id="location-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Our <br /> Location
        </h2>
        <address className="not-italic mt-3 sm:mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
          Puducherry – 605009, India
        </address>
        <Link
          href="https://www.appikorn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 sm:mt-4 inline-block text-blue-600 underline text-sm sm:text-base md:text-lg font-medium"
        >
          www.appikorn.com
        </Link>
      </motion.div>
    </section>
  );
}
