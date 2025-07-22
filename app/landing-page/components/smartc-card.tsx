"use client";
import { useEffect, useRef, useState } from "react";

type SmartCardProps = {
  img: string;
  title: string;
  lines: string[];
  bg: string; // Accepts bg color class like "bg-[#239E05]"
};

export default function SmartCard({ img, title, lines, bg }: SmartCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect card height to decide if shrunk
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      setIsShrunk(height < 250); // adjust as needed
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const textLines = isHovered ? lines : [lines[0]];

  // Image style based on hover and shrink
  const imageSizeClass = isHovered
    ? "w-[450px] h-[450px] opacity-100 translate-y-0"
    : isShrunk
    ? "w-[50px] h-[50px] opacity-0 translate-y-6"
    : "w-[347px] h-[347px] opacity-100 translate-y-0";

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-500 ${bg} rounded-xl overflow-hidden flex flex-col justify-between ${
        isHovered ? "flex-[4]" : "flex-1"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Section */}
      <div className="p-6 text-white z-10">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {textLines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {/* Image Section pinned to bottom */}
      <div
        className={`relative transition-all duration-500 transform mx-auto mt-auto ${imageSizeClass}`}
      >
        <img
          src={img}
          alt={title}
          className="absolute bottom-1 w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
