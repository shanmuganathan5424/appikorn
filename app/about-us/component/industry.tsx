"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cards = [
  {
    title: "Health Sector",
    imageSrc: "/about/health_image.svg",
    description:
      "We help healthcare institutions enhance digital systems and streamline patient services.",
    bgColor: "#6887DC",
  },
  {
    title: "Insurance Sector",
    imageSrc: "/about/insurance_image.svg",
    description:
      "Supporting insurance firms in risk management and claims automation with innovative tech.",
    bgColor: "#A45EE5",
  },
  {
    title: "Banking Sector",
    imageSrc: "/about/banking_image.svg",
    description:
      "Empowering banks with digital transformation, secure transactions, and AI-driven insights.",
    bgColor: "#56C4C5",
  },
  {
    title: "Social Application Sector",
    imageSrc: "/about/social_app_image.svg",
    description:
      "We create scalable and engaging social platforms for communities, creators, and influencers.",
    bgColor: "#FF9066",
  },
  {
    title: "Web Development Sector",
    imageSrc: "/about/web_development_image.svg",
    description:
      "Crafting performant, responsive, and accessible web experiences tailored for all industries.",
    bgColor: "#6BDB8D",
  },
];

export default function AutoSlidingCard() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    }),
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-[450px] px-4">
      {/* Prev Button */}
      <button
        onClick={prevCard}
        className="absolute left-2 md:left-6 z-20 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
      >
        <FaChevronLeft className="text-xl text-black" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextCard}
        className="absolute right-2 md:right-6 z-20 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
      >
        <FaChevronRight className="text-xl text-black" />
      </button>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -100 || velocity.x < -500) {
              nextCard();
            } else if (offset.x > 100 || velocity.x > 500) {
              prevCard();
            }
          }}
          className="flex flex-col md:flex-row items-center w-full md:h-[320px] rounded-2xl shadow-xl overflow-visible cursor-grab active:cursor-grabbing"
          style={{ backgroundColor: cards[index].bgColor }}
        >
          {/* Left: Image */}
          <div className="w-full md:w-1/2 h-[220px] md:h-[500px] flex items-center justify-center relative p-4">
            <Image
              src={cards[index].imageSrc}
              alt={cards[index].title}
              width={400}
              height={400}
              className="object-contain max-h-full"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-6 md:px-10 py-6 md:py-0 text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {cards[index].title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              {cards[index].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators */}
      <div className="flex mt-6 space-x-3">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i
                ? "bg-black scale-125 shadow-md shadow-black/50"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
