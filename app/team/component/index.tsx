"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function HeroSection() {
  // Pre-split text
  const intro = useMemo(() => "Trusted Kits".split(" "), []);
  const heading = useMemo(() => "Real Results".split(" "), []);
  const description = useMemo(
    () =>
      `Accelerate your team’s growth with the right tools. Empower employees to 
       perform at their best, improve collaboration, and achieve measurable results together — faster, smarter, and hassle-free.`
        .split(" "),
    []
  );

  // Variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="min-h-screen w-full bg-black text-white py-20 px-4 md:px-12 lg:px-20 flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">
          <h1
            id="hero-heading"
            className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight"
          >
            {/* Trusted Kits */}
            <motion.span
              className="block text-gray-300 font-bold"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {intro.map((word, index) => (
                <motion.span
                  key={`intro-${index}`}
                  variants={wordVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>

            {/* Real Results */}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 font-bold"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {heading.map((word, index) => (
                <motion.span
                  key={`heading-${index}`}
                  variants={wordVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {description.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="#features"
              className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              aria-label="See how Trusted Kits works"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-3 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
              },
            }}
          >
            {/* Card 1 */}
            <motion.div
              variants={wordVariants}
              className="col-span-1 row-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/dummy-image/dummy-3.webp"
                alt="Team working on innovative solutions"
                width={600}
                height={400}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={wordVariants}
              className="bg-white/5 border col-span-1 sm:col-span-2 row-span-2 border-white/10 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/dummy-image/dummy-2.webp"
                alt="Collaboration and teamwork in action"
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={wordVariants}
              className="bg-white/5 col-span-2 h-full border border-white/10 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-4 sm:p-6"
            >
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200">
                  Fast & Reliable Work
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2 leading-relaxed">
                  Empowering employees to perform at their best, improve
                  collaboration, and achieve measurable results.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={wordVariants}
              className="bg-white/5 border col-span-2 sm:col-span-1 h-full border-white/10 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/dummy-image/dummy-2.webp"
                alt="Tools that accelerate performance"
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
