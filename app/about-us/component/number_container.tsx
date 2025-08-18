"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type AnimatedNumberProps = {
  min: number;
  max: number;
};

const AnimatedNumber = ({ min, max }: AnimatedNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const randomTarget = Math.floor(Math.random() * (max - min + 1)) + min;
      const duration = 2000;
      const frameRate = 30;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let currentFrame = 0;

      const interval = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const value = Math.floor(progress * randomTarget);
        setDisplayNumber(value);

        if (currentFrame >= totalFrames) {
          clearInterval(interval);
          setDisplayNumber(randomTarget);
        }
      }, 1000 / frameRate);
    }
  }, [inView, min, max]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold flex justify-center items-center"
    >
      {displayNumber} +
    </motion.p>
  );
};

export default function NumberContainer() {
  const stats = [
    { min: 10, max: 100, label: "PROJECT DELIVERED" },
    { min: 15, max: 30, label: "YEARS OF EXPERIENCE" },
    { min: 20, max: 200, label: "SATISFIED CLIENTS IN 10 COUNTRIES" },
    { min: 10, max: 30, label: "TECH EXPERTS" },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 md:py-20">
      <div className="grid grid-cols-2 gap-8 sm:gap-10 md:flex md:justify-around md:items-center md:gap-0 text-black">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center max-w-[220px] w-full relative"
          >
            <AnimatedNumber min={stat.min} max={stat.max} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs sm:text-sm md:text-base xl:text-lg font-semibold"
            >
              {stat.label}
            </motion.p>
            {index < stats.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="hidden md:block bg-black/50 w-px h-full absolute right-0 translate-x-1/2 "
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
