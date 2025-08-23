"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const img1 = [
    "/about-us/about-us-image.jpg",
    "/about-us/close-up-photovoltaics-factory-specialist-conducting-experiments-notebook.jpg",
    "/about-us/saas-concept-collage.jpg",
  ];

  const img2 = [
    "/about-us/person-working-relation-innovation.jpg",
    "/about-us/collage-customer-experience-concept.jpg",
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setIndex1((prev) => (prev + 1) % img1.length);
    }, 4000);
    const interval2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % img2.length);
    }, 5000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  // Variants for reveal text with opacity
  const revealVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Variants for cards
  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start px-6 py-16 text-white overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[450px] h-[450px] bg-purple-950/70 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] mx-auto space-y-6">
        {/* Subtitle */}
        <div className="overflow-hidden">
          <motion.p
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400/70 to-purple-600/70 uppercase tracking-wide text-2xl md:text-4xl font-bold"
          >
            Who We Are
          </motion.p>
        </div>

        {/* Title */}
        <div className="overflow-hidden">
          <motion.h1
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-4xl md:text-6xl font-bold leading-tight"
          >
            Appikorn Software Consultancy
          </motion.h1>
        </div>

        {/* Description */}
        <div className="overflow-hidden">
          <motion.p
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block mt-4 text-gray-300 text-lg leading-relaxed"
          >
            Founded in <span className="text-white font-semibold">2018</span>,
            Appikorn Software Consultancy Services is based in{" "}
            <span className="text-white font-semibold">Pondicherry, India</span>.
            We specialize in end-to-end software solutions — from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              UI/UX design
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              web and mobile development
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              VR/AR experiences
            </span>
            , cloud services, and more.
          </motion.p>
        </div>
      </div>

      {/* Info Cards */}
      <motion.div
        className="relative z-10 mt-16 flex flex-col md:flex-row gap-8 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariant}
          className="flex-1 flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
        >
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <img
              src={img1[index1]}
              alt="Our Vision"
              className="object-cover w-full h-48 rounded-xl"
            />
            <div className="absolute inset-0 w-full h-full bg-purple-900/40 rounded-xl"></div>
          </div>

          <div className="overflow-hidden">
            <motion.h3
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-lg font-semibold text-gray-200 mb-3"
            >
              Our Vision
            </motion.h3>
          </div>

          <div className="overflow-hidden">
            <motion.p
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-gray-300 text-sm leading-relaxed"
            >
              From design to development, our team covers UI/UX, mobile, web,
              cloud, and immersive technologies like VR/AR.
            </motion.p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariant}
          className="flex-1 flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
        >
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <img
              src={img2[index2]}
              alt="Our Mission"
              className="object-cover w-full h-48 rounded-xl"
            />
            <div className="absolute inset-0 w-full h-full bg-purple-900/40 rounded-xl"></div>
          </div>

          <div className="overflow-hidden">
            <motion.h3
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-lg font-semibold text-gray-200 mb-3"
            >
              Our Mission
            </motion.h3>
          </div>

          <div className="overflow-hidden">
            <motion.p
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-gray-300 text-sm leading-relaxed"
            >
              We are committed to delivering innovation-driven solutions that
              help businesses scale and bring bold ideas to life.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
