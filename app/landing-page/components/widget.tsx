"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedWidgets from "./widget-component";

export default function Widgets() {
  const frameRef = useRef(null);
  const isInView = useInView(frameRef, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <main className="bg-white min-h-screen">

      {/* Top Section */}
      <section className="text-center max-w-4xl mx-auto pt-16 px-4">
        <div
          ref={frameRef}
          className="relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Headline */}
          <motion.h1
            initial={{ y: -104, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold leading-tight text-black"
          >
            Build Your Application Using <br /> Appikorn Widgets.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: -80, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-4 text-gray-500"
          >
            At Appikorn, we create powerful widgets that simplify development, save time, and help you build smarter applications with ease.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-6 flex justify-center gap-4 relative z-10"
          >
            <a
              href="https://appikorn-widgets.web.app/"
              className="px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-900"
            >
              Get Started
            </a>
            <a
              href="https://appikorn-widgets.web.app/docs/widgets"
              className="px-6 py-3 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-100 text-gray-500"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero Card Section */}
      <section className="mt-16 px-4">
        <div
          ref={frameRef}
          className="relative bg-gray-100 flex flex-col md:flex-row rounded-3xl overflow-hidden p-10 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >

          {/* Left text content */}
          <div className="max-w-md z-10 relative md:mr-8">
            <motion.h2
              initial={{ y: -80, opacity: 0 }}
              animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-2 text-black text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug"
            >
              Dream like unikorn
            </motion.h2>

            <motion.h2
              initial={{ y: -80, opacity: 0 }}
              animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-2 text-black text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug"
            >
              Empower your workflow with smarter code.
            </motion.h2>

            <motion.p
              initial={{ y: -60, opacity: 0 }}
              animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="mt-4 text-gray-500 text-sm md:text-base lg:text-lg"
            >
              Appikorn Widgets gives you access to essential tools and resources — helping you save time and tackle difficult tasks.
            </motion.p>
          </div>

          {/* Right content */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-6 md:mt-0 flex-1 flex justify-center items-center"
          >
            <AnimatedWidgets />
          </motion.div>

        </div>
      </section>

    </main>
  );
}
