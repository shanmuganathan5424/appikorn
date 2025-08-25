"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type AnimatedNumberProps = {
  min: number;
  max: number;
};

const AnimatedNumber = ({ min, max }: AnimatedNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(min);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const target = max; // ✅ fixed number for SEO consistency
    const duration = 2000; // ms
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * (target - min) + min);
      setDisplayNumber(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, min, max]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold"
    >
      <span aria-label={`${displayNumber} plus`}>
        {displayNumber}
        <span aria-hidden="true">+</span>
      </span>
    </motion.p>
  );
};

export default function NumberContainer() {
  const stats = [
    { min: 0, max: 42, label: "Projects Delivered" },
    { min: 0, max: 30, label: "Years of Experience" },
    { min: 0, max: 71, label: "Satisfied Clients" },
    { min: 0, max: 27, label: "Tech Experts" },
  ];

  return (
    <section
      aria-labelledby="company-stats"
      className="w-full max-w-screen-xl mx-auto px-4 py-10 md:py-16"
    >
      <h2 id="company-stats" className="sr-only">
        Company Statistics
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 text-black items-stretch">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center relative px-4"
          >
            <AnimatedNumber min={stat.min} max={stat.max} />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs sm:text-sm md:text-base xl:text-lg font-semibold mt-2"
            >
              {stat.label}
            </motion.h3>

            {/* Divider line */}
            {index < stats.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="hidden sm:block bg-black/20 w-px h-full absolute right-0 top-1/2 -translate-y-1/2"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
