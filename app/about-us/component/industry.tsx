"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const sectors = [
  {
    title: "Health Sector",
    imageSrc: "/about/health_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio...",
  },
  {
    title: "Insurance Sector",
    imageSrc: "/about/insurance_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio...",
  },
  {
    title: "Banking Sector",
    imageSrc: "/about/banking_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio...",
  },
  {
    title: "Social Application Sector",
    imageSrc: "/about/social_app_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio...",
  },
  {
    title: "Web Development Sector",
    imageSrc: "/about/web_development_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio...",
  },
];

export default function IndustryPage() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set screen width on mount
    const updateSize = () => setScreenWidth(window.innerWidth);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (screenWidth === 0) return;

    let isMounted = true;

    const animate = async () => {
      while (isMounted) {
        await controls.start({
          x: -currentIndex * screenWidth,
          transition: { duration: 1.5, ease: "easeInOut" },
        });

        await new Promise((resolve) => setTimeout(resolve, 3000)); // 2s pause
        setCurrentIndex((prev) => (prev + 1) % sectors.length);
      }
    };

    animate();

    return () => {
      isMounted = false;
    };
  }, [currentIndex, controls, screenWidth]);

  return (
    <div className="w-screen overflow-hidden bg-white py-[160px] mx-auto">
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
            width={screenWidth}
          />
        ))}
      </motion.div>
    </div>
  );
}

type SectorCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  width: number;
};

const SectorCard = ({
  title,
  description,
  imageSrc,
  width,
}: SectorCardProps) => {
  return (
    <div
      className="grid grid-cols-2 px-[100px] pt-[70px] pb-[30px] rounded-3xl flex-shrink-0"
      style={{ width: `${width}px` }}
    >
      {/* Left: Image */}
      <div className="bg-[#6887DC] h-[350px] rounded-l-3xl relative overflow-visible">
        <Image
          src={imageSrc}
          alt={title}
          className="absolute -top-[160px] -left-[72px]"
          width={600}
          height={600}
        />
      </div>

      {/* Right: Text */}
      <div className="bg-[#6887DC] h-[350px] rounded-r-3xl text-white flex flex-col justify-center space-y-5">
        <h1 className="text-[50px] leading-[56.51px] font-semibold">{title}</h1>
        <p className="text-[20px] leading-[37px] font-normal pr-20">
          {description}
        </p>
      </div>
    </div>
  );
};
