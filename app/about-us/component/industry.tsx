"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cards = [
  {
    title: "Health Sector",
    imageSrc: "/about/health_image.svg",
    description:
      "We help healthcare institutions enhance digital systems and streamline patient services.",
    bgColor: "#000000",
  },
  {
    title: "Insurance Sector",
    imageSrc: "/about/insurance_image.svg",
    description:
      "Supporting insurance firms in risk management and claims automation with innovative tech.",
    bgColor: "#000000",
  },
  {
    title: "Banking Sector",
    imageSrc: "/about/banking_image.svg",
    description:
      "Empowering banks with digital transformation, secure transactions, and AI-driven insights.",
    bgColor: "#000000",
  },
  {
    title: "Social Application Sector",
    imageSrc: "/about/social_app_image.svg",
    description:
      "We create scalable and engaging social platforms for communities, creators, and influencers.",
    bgColor: "#000000",
  },
  {
    title: "Web Development Sector",
    imageSrc: "/about/web_development_image.svg",
    description:
      "Crafting performant, responsive, and accessible web experiences tailored for all industries.",
    bgColor: "#000000",
  },
];

export default function AutoSlidingCard() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextCard = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Auto slide only when visible
  useEffect(() => {
    const startAutoSlide = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          nextCard();
        }, 5000);
      }
    };

    const stopAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAutoSlide();
          } else {
            stopAutoSlide();
          }
        });
      },
      { threshold: 0.3 }
    );

    const container = document.getElementById("auto-sliding-card");
    if (container) observer.observe(container);

    return () => {
      stopAutoSlide();
      if (container) observer.unobserve(container);
    };
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
    <section
      id="auto-sliding-card"
      aria-labelledby="sectors-heading"
      className="relative flex flex-col justify-center items-center w-full min-h-[450px] px-4"
    >
      <h2 id="sectors-heading" className="sr-only">
        Industry Sectors We Serve
      </h2>

      {/* Prev Button */}
      <button
        aria-label="Previous sector"
        onClick={prevCard}
        className="absolute left-2 md:left-6 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <FaChevronLeft className="text-xl text-black" />
      </button>

      {/* Next Button */}
      <button
        aria-label="Next sector"
        onClick={nextCard}
        className="absolute right-2 md:right-6 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              loading="lazy"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-6 md:px-10 py-6 md:py-0 text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {cards[index].title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              {cards[index].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators */}
      <div className="flex mt-6 space-x-3" role="tablist" aria-label="Sector navigation">
        {cards.map((card, i) => (
          <button
            key={i}
            aria-label={`Go to ${card.title}`}
            aria-current={index === i ? "true" : "false"}
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
    </section>
  );
}
