
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function AboutUs() {

  // Variants
  const revealVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about-us"
      className="relative w-full min-h-screen bg-black rounded-3xl flex flex-col items-center justify-start px-6 py-16 text-white"
    >
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[50%] h-[50%] bg-purple-950/70 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] mx-auto space-y-6">
        <motion.p
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400/70 to-purple-600/70 uppercase tracking-wide text-2xl md:text-4xl font-bold"
        >
          Who We Are
        </motion.p>

        <motion.h1
          id="about-us-title"
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block text-4xl md:text-6xl font-bold leading-tight"
        >
          Appikorn Software Consultancy
        </motion.h1>

        <motion.p
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block mt-4 text-gray-300 text-lg leading-relaxed"
        >
          Founded in <strong>2018</strong>, Appikorn Software Consultancy
          Services is based in <strong>Pondicherry, India</strong>. We
          specialize in end-to-end software solutions — from{" "}
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

{/* card section */}
<div className="relative z-10 mt-16 flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto">
  {[
    {
      title: "Our Vision",
      text: "From design to development, our team covers UI/UX, mobile, web, cloud, and immersive technologies like VR/AR.",
    },
    {
      title: "Our Mission",
      text: "We are committed to delivering innovation-driven solutions that help businesses scale and bring bold ideas to life.",
    },
  ].map((card, index) => (
    <motion.article
      key={index}
      className="flex-1 min-w-0 flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm opacity-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
    >
      <h3 className="text-lg font-semibold text-gray-200 mb-3">{card.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
    </motion.article>
  ))}
</div>



    </section>
  );
}
