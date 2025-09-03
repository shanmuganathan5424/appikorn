"use client";
import React from "react";
import { motion } from "framer-motion";

// Variants reused for smooth animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ManagerComponent() {
  return (
    <section
      className="bg-gray-50 py-12 px-6 min-h-screen"
      aria-labelledby="manager-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* -------- Row 2 (Core Manager) -------- */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 items-center order-1 lg:order-2">
          {/* Image left (hidden on mobile) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:block order-1"
          >
            <img
              src="/dummy-image/dummy-2.webp"
              alt="Team collaborating on management strategies"
              loading="lazy"
              width={400}
              height={256}
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          {/* Center Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 flex items-center justify-center text-center"
          >
            <h2
              id="manager-heading"
              className="text-2xl font-bold italic text-black"
            >
              Guided by Our Core Manager&apos;s
            </h2>
          </motion.div>

          {/* Image right (hidden on mobile) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:block order-3"
          >
            <img
              src="/dummy-image/dummy-3.webp"
              alt="Workplace culture and leadership support"
              loading="lazy"
              width={400}
              height={256}
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>
        </div>

        {/* -------- Row 1 (Software) -------- */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 items-center order-2 lg:order-1">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/dummy-image/dummy-2.webp"
              alt="Developers working on software innovation"
              loading="lazy"
              width={400}
              height={256}
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          {/* Text left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1 text-left sm:text-center"
          >
            <h3 className="text-xl font-semibold">Innovation in Software</h3>
            <p className="text-gray-600 text-sm mt-2">
              We design and build cutting-edge software solutions, helping
              businesses scale with modern technologies and intelligent systems.
            </p>
          </motion.div>

          {/* Text right */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-3 text-left sm:text-center"
          >
            <h3 className="text-xl font-semibold">Collaboration</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our software team works closely with clients, ensuring transparent
              communication and agile project delivery.
            </p>
          </motion.div>
        </div>

        {/* -------- Row 3 (Manufacturing) -------- */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 items-center order-3">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/dummy-image/dummy-2.webp"
              alt="Sustainable manufacturing facility"
              loading="lazy"
              width={400}
              height={256}
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          {/* Text left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1 text-left sm:text-center"
          >
            <h3 className="text-xl font-semibold">
              Sustainability in Manufacturing
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Our manufacturing processes focus on eco-friendly methods,
              sustainable sourcing, and efficient energy usage.
            </p>
          </motion.div>

          {/* Text right */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-3 text-left sm:text-center"
          >
            <h3 className="text-xl font-semibold">Community Impact</h3>
            <p className="text-gray-600 text-sm mt-2">
              We empower local communities through ethical practices, safe
              workplaces, and continuous skill development in manufacturing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
