"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CircularText from "./learn-more";

export default function HeroSection() {
  const [animateCurves, setAnimateCurves] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [animateCircle, setAnimateCircle] = useState(false);
  const [curveOffset, setCurveOffset] = useState({ top: -150, bottom: 150 });

  useEffect(() => {
    // Responsive curve offsets
    const updateOffsets = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setCurveOffset({ top: 0, bottom: 0 });
      } else if (width < 1024) {
        // tablet
        setCurveOffset({ top: -40, bottom: 40 });
      } else if (width < 1440) {
        // small desktop
        setCurveOffset({ top: -130, bottom:   130 });
      } else if (width < 1920) {
        // desktop
        setCurveOffset({ top: -130, bottom: 130 });
      } else {
        // large screen
        setCurveOffset({ top: -180, bottom: 180 });
      }
    };

    updateOffsets(); // init
    window.addEventListener("resize", updateOffsets);

    // Animate sequence
    setAnimateCurves(true);
    const textTimer = setTimeout(() => setAnimateText(true), 1500);
    const circleTimer = setTimeout(() => setAnimateCircle(true), 2500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(circleTimer);
      window.removeEventListener("resize", updateOffsets);
    };
  }, []);

  const textLines = ["Appikorn"];

  return (
    <section className="relative bg-black md:bg-white text-white md:text-black min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Top Curve */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 597"
        width="100%"
        height="auto"
        initial={{ y: 0 }}
        animate={{ y: animateCurves ? curveOffset.top : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 xl:-top-36 left-0 w-full h-auto z-20"
      >
        <path
          d="M1440 348.47C896.42 523.325 245.586 437.758 0 348.47V0H1440V348.47Z"
          fill="black"
        />
      </motion.svg>

      {/* Bottom Curve */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 597"
        width="100%"
        height="auto"
        initial={{ y: 0 }}
        animate={{ y: animateCurves ? curveOffset.bottom : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-0 xl:-bottom-36 left-0 w-full h-auto z-20"
      >
        <g transform="scale(1,-1) translate(0,-597)">
          <path
            d="M1440 348.47C896.42 523.325 245.586 437.758 0 348.47V0H1440V348.47Z"
            fill="black"
          />
        </g>
      </motion.svg>

      {/* Hero Content */}
      <div className="relative z-0 flex flex-col items-center justify-center text-center min-h-screen px-6">
        {textLines.map((line, index) => (
          <motion.h1
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={animateText ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 
                       text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
          >
            {line}
          </motion.h1>
        ))}

        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={animateText ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-white md:text-black"
        >
          Empowering businesses through innovative software solutions. Let's
          transform your ideas into reality.
        </motion.p>
      </div>

      {/* Circular Text Button */}
      <motion.div
        className="
          absolute 
          bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16
          w-full
          flex items-center justify-center
          z-40
        "
        initial={{ opacity: 0 }}
        animate={animateCircle ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
  <CircularText />
</div>

      </motion.div>
    </section>
  );
}
