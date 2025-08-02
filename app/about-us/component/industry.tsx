"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sectors = [
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

export default function IndustryPage() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const cardControlsRef = useRef(sectors.map(() => useAnimation()));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateSize = () => setScreenWidth(window.innerWidth);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (screenWidth === 0) return;

    const autoScroll = () => {
      const next = (currentIndex + 1) % sectors.length;
      scrollToIndex(next);
    };

    intervalRef.current = setInterval(autoScroll, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, screenWidth]);

  const scrollToIndex = async (nextIndex: number) => {
    setCurrentIndex(nextIndex);

    await controls.start({
      x: -nextIndex * screenWidth,
      transition: { duration: 1, ease: "easeInOut" },
    });

    const isForward =
      nextIndex > currentIndex ||
      (currentIndex === sectors.length - 1 && nextIndex === 0);
    const nudgeValue = isForward ? 4 : -4;

    await cardControlsRef.current[nextIndex].start({
      x: nudgeValue,
      transition: { duration: 0.2, ease: "easeOut" },
    });

    await cardControlsRef.current[nextIndex].start({
      x: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    });

    cardControlsRef.current.forEach((ctrl, i) => {
      if (i !== nextIndex) ctrl.set({ x: 0 });
    });
  };

  const handleArrowClick = (direction: "left" | "right") => {
    const nextIndex =
      direction === "right"
        ? (currentIndex + 1) % sectors.length
        : (currentIndex - 1 + sectors.length) % sectors.length;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        const next = (nextIndex + 1) % sectors.length;
        scrollToIndex(next);
      }, 3000);
    }

    scrollToIndex(nextIndex);
  };

  return (
    <div className="w-screen overflow-hidden pt-20 pb-40 mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-purple1 text-[58px] font-extrabold leading-[71.22px] tracking-[-0.49px] pb-20 pl-15"
      >
        Industries We Work For
      </motion.h1>

      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={() => handleArrowClick("left")}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-100"
        >
          {/* Left Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => handleArrowClick("right")}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-100"
        >
          {/* Right Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Sliding Cards */}
        <motion.div
          animate={controls}
          className="flex"
          style={{ width: `${sectors.length * screenWidth}px` }}
        >
          {sectors.map((sector, index) => (
            <SectorCard
              key={index}
              title={sector.title}
              imageSrc={sector.imageSrc}
              description={sector.description}
              bgColor={sector.bgColor}
              width={screenWidth}
              animateControl={cardControlsRef.current[index]}
            />
          ))}
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {sectors.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-black scale-125 shadow-md shadow-black/50"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type SectorCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  width: number;
  animateControl: ReturnType<typeof useAnimation>;
};

const SectorCard = ({
  title,
  description,
  imageSrc,
  bgColor,
  width,
  animateControl,
}: SectorCardProps) => {
  return (
    <motion.div
      animate={animateControl}
      className="grid grid-cols-2 px-[100px] pt-[150px] pb-[30px] rounded-3xl flex-shrink-0"
      style={{ width: `${width}px` }}
    >
      {/* Left: Image */}
      <div
        className="h-[350px] rounded-l-3xl relative overflow-visible"
        style={{ backgroundColor: bgColor }}
      >
        <Image
          src={imageSrc}
          alt={title}
          className="absolute -top-[160px] -left-[72px]"
          width={600}
          height={600}
        />
      </div>

      {/* Right: Text */}
      <div
        className="h-[350px] rounded-r-3xl text-white flex flex-col justify-center space-y-5"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-[50px] leading-[56.51px] font-semibold">{title}</h1>
        <p className="text-[20px] leading-[37px] font-normal pr-20">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
