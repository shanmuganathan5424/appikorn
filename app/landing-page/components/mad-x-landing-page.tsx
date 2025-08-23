"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import StarBackground from "./star";
import WaveTop from "./wavetop";
import PurpleStar from "./big-star";
import { AppRoutes } from "@/router";

export default function MadX() {
  const [hovered, setHovered] = useState(false);
  const animateProps = { y: 0, opacity: 1 };

  return (
    <main
      id="madx-section"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center pt-32 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
    >
      {/* Wave Bottom Animation - comes first */}
      <motion.div
        initial={{ y: 350, opacity: 0 }}
        whileInView={animateProps}
        animate={hovered ? animateProps : {}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="absolute bottom-0 w-full z-30"
      >
        <WaveTop />
      </motion.div>

      {/* Headline + Content Animation */}
      <div className="z-40 flex flex-col items-center justify-start absolute top-28">
        {/* Headline */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={animateProps}
          animate={hovered ? animateProps : {}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="overflow-hidden"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
            APPIKORN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              MADX
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={animateProps}
          animate={hovered ? animateProps : {}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="overflow-hidden"
        >
          <p className="mt-6 max-w-2xl text-center text-gray-300">
            From automation to collaboration, our solution empowers your team to
            work smarter, not harder. Discover the endless possibilities waiting
            for you.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={animateProps}
          animate={hovered ? animateProps : {}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="overflow-hidden"
        >
          <div className="mt-8 flex gap-4">
            <Link
              href={AppRoutes.PORTFOLIO}
              className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
            >
              Get Started Now
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stars Background */}
      <div className="z-0">
        <StarBackground />
      </div>

      {/* Purple Stars */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={animateProps}
        animate={hovered ? animateProps : {}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute left-40 top-20 w-32 h-32 z-20"
      >
        <PurpleStar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={animateProps}
        animate={hovered ? animateProps : {}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute right-32 bottom-20 w-28 h-28 z-20"
      >
        <PurpleStar />
      </motion.div>
    </main>
  );
}
