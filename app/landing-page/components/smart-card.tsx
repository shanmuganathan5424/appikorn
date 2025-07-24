"use client";
import { useEffect, useRef, useState } from "react";

// Props
type SmartCardProps = {
  img: string;
  title: string;
  lines: string[];
  bg: string; // e.g., "bg-[#239E05]"
};

export default function SmartCard({ img, title, lines, bg }: SmartCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Resize observer to detect shrink
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      setIsShrunk(height < 250);
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShouldBounce(true);
    setTimeout(() => setShouldBounce(false), 400); // Match animation duration
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textLines = isHovered ? lines : [lines[0]];

  const imageSizeClass = isHovered
    ? "w-[450px] h-[450px] opacity-100 translate-y-0"
    : isShrunk
    ? "w-[50px] h-[50px] opacity-0 translate-y-6"
    : "w-[347px] h-[347px] opacity-100 translate-y-0";

  return (
    <div
  ref={cardRef}
  className={`relative transition-all duration-500 ${bg} rounded-[20px] overflow-hidden flex flex-col justify-between ${
    isHovered ? "flex-[4]" : "flex-1"
  } ${shouldBounce ? "animate-bounce-once" : ""}`}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  {/* Text Section */}
  <div className="p-6 text-white z-10">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {textLines.map((line, idx) => (
      <p key={idx}>{line}</p>
    ))}
  </div>

  {/* Image Section */}
  <div
    className={`relative transition-transform duration-500 transform mx-auto mt-auto ${
      isHovered
        ? "scale-110 w-[450px] h-[450px]"
        : isShrunk
        ? "scale-0 opacity-0 w-[50px] h-[50px]"
        : "scale-100 w-[347px] h-[347px]"
    }`}
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
