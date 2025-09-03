"use client";

import Image from "next/image";
import useLenisScroll from "@/hooks/useLenisScroll";
import { motion } from "framer-motion";

export default function RoleSection() {


  const float = {
    y: [0, -10, 0, 10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section
      className="relative w-full h-auto md:min-h-screen py-16 md:py-0 
      flex items-center justify-center bg-black px-6 md:px-20 overflow-hidden"
      aria-label="Core roles that power our work"
    >
      {/* Text content */}
      <div className="w-full md:max-w-[50%] text-center z-10">
        {/* Heading */}
        <motion.h2
          className="text-[24px] md:text-[30px] font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Core Roles That Power Our Work
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[14px] md:text-[18px] text-white leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          We believe in the power of creativity to transform ideas into impactful
          digital experiences. Founded with a passion for innovation, we are a
          team of visionary creators, strategic thinkers, and tech-savvy
          professionals dedicated to bringing your brand&apos;s story to life in
          the digital realm.
        </motion.p>
      </div>

      {/* Floating images (hidden on sm screens) */}
      <motion.div
        className="hidden md:block absolute top-10 left-10 w-[20%] aspect-square rounded-2xl"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <motion.div animate={float} className="w-full h-full">
          <Image
            src="/dummy-image/dummy-2.webp"
            alt="Creative process illustration"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-full"
            priority={false}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-10 right-25 w-[15%] aspect-square rounded-2xl"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <motion.div animate={float} className="w-full h-full">
          <Image
            src="/dummy-image/dummy-7.webp"
            alt="Teamwork visualization"
            width={350}
            height={350}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-20 left-20 w-[15%] aspect-square rounded-2xl"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <motion.div animate={float} className="w-full h-full">
          <Image
            src="/dummy-image/dummy-5.webp"
            alt="Innovation concept visual"
            width={350}
            height={350}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-10 right-25 w-[18%] aspect-square rounded-2xl"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <motion.div animate={float} className="w-full h-full">
          <Image
            src="/dummy-image/dummy-4.webp"
            alt="Digital creativity showcase"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
