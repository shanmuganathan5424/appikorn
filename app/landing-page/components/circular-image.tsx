"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const icons = [
  "/circular-image/tailwind.svg",
  "/circular-image/css3-original.svg",
  "/circular-image/flutter.svg",
  "/circular-image/github-original.svg",
  "/circular-image/github-original.svg",
  "/circular-image/html5-original.svg",
  "/circular-image/js.svg",
  "/circular-image/nextjs-original.svg",
  "/circular-image/nodejs-original.svg",
  "/circular-image/react-original.svg",
];

export default function CircleLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const size = containerRef.current.offsetWidth;
        setRadius(size / 2 - 50); // padding from edges
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Background Circle */}
      <div
        className="absolute inset-0 w-full aspect-square rounded-full 
        bg-gradient-to-b from-[#080121] to-[#000000] 
        shadow-[0_-40px_80px_rgba(0,0,0,0.8)]"
      />

      {/* Rotating Icons */}
      <div ref={containerRef} className="relative hidden md:block aspect-square w-full mx-auto">
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {icons.map((src, i) => {
            const angle = (i / icons.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src={src}
                  alt={`icon-${i}`}
                  width={70}
                  height={70}
                  className="rounded-full  p-3 shadow-md"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
