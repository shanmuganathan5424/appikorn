"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedWidgets from "./widget-component";

export default function Widgets() {
  const frameRef = useRef(null);
  const isInView = useInView(frameRef, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="text-center max-w-4xl mx-auto pt-16 px-4"
        aria-labelledby="widgets-title"
      >
        <h1 id="widgets-title" className="sr-only">
          Build Applications with Appikorn Widgets
        </h1>
        <div
          ref={frameRef}
          className="relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.h2
            initial={{ y: -104, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-[24px] sm:text-4xl md:text-6xl font-bold leading-tight text-black"
          >
            Build Your Application Using <br /> Appikorn Widgets
          </motion.h2>

          <motion.p
            initial={{ y: -80, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-4 text-gray-600 text-[14px] sm:text-sm"
          >
            At Appikorn, we create powerful widgets that simplify development,
            save time, and help you build smarter applications.
          </motion.p>

          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-6 flex justify-center gap-4 relative z-10"
          >
            <a
  href="https://appikorn-widgets.web.app/docs/widgets"
  className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 text-gray-700"
>
  Learn More About Widgets
</a>

          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="mt-16 px-4" aria-labelledby="showcase-title">
        <h2 id="showcase-title" className="sr-only">
          Widget Showcase
        </h2>
        <div
          ref={frameRef}
          className="relative bg-gray-100 flex flex-col md:flex-row rounded-3xl overflow-hidden p-4 sm:p-10 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="max-w-xl z-10 relative md:mr-8">
            <motion.h3
              initial={{ y: -80, opacity: 0 }}
              animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black"
            >
              Dream like Unikorn
            </motion.h3>
            <motion.h3
              initial={{ y: -80, opacity: 0 }}
              animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-2 text-base md:text-3xl lg:text-4xl font-semibold text-black"
            >
              Empower your workflow with smarter code
            </motion.h3>
            <motion.p
              initial={{ y: -60, opacity: 0 }}
              animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="mt-4 text-gray-600 text-[14px] sm:text-base"
            >
              Appikorn Widgets gives you access to essential tools and resources
              — helping you save time and tackle difficult tasks.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={isInView || hovered ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-6 md:mt-0 flex-1 flex justify-center items-center sm:[50%] md:w-[60%]"
          >
            <AnimatedWidgets />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
