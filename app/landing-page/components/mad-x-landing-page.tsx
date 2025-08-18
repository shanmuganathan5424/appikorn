// app/page.jsx (Next.js 13+ App Router)
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import StarBackground from "./star";
import WaveTop from "./wavetop";
import PurpleStar from "./big-star";
import { AppRoutes } from "@/router";

export default function MadX() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-b from-[#0B021F] to-[#150433] text-white flex flex-col items-center justify-center pt-32 overflow-hidden">
      
      {/* Headline + Content Animation */}
<div className="z-40 flex flex-col items-center justify-start absolute top-40">

  {/* Headline */}
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
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
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    className="overflow-hidden"
  >
    <p className="mt-6 max-w-2xl text-center text-gray-300">
      From automation to collaboration, our solution empowers your team to work
      smarter, not harder. Discover the endless possibilities waiting for you.
    </p>
  </motion.div>

  {/* CTA Buttons */}
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
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


      {/* Wave Bottom Animation */}
      <motion.div
        initial={{ y: 350 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="absolute -bottom-20 w-full z-30"
      >
        <WaveTop />
      </motion.div>

      {/* Stars Background */}
      <div className="z-0">
        <StarBackground />
      </div>

      {/* Purple Stars */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-40 top-20 w-32 h-32 z-20"
      >
        <PurpleStar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute right-32 bottom-20 w-28 h-28 z-20"
      >
        <PurpleStar />
      </motion.div>
    </main>
  );
}
