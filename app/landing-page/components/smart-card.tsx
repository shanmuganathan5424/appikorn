"use client";
import { useEffect, useRef, useState } from "react";

// Props
type SmartCardProps = {
   title: string;
  img: string;
  bg: string;
  lines: string[];
  className?: string;// e.g., "bg-[#239E05]"
};

export default function SmartCard({ img, title, lines, bg }: SmartCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      setIsShrunk(height < 250);
    });

    observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShouldBounce(true);
    setTimeout(() => setShouldBounce(false), 400);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textLines = isHovered ? lines : [lines[0]];

  return (
    <div
  ref={cardRef}
  className={`
    w-full
    relative transition-all duration-500 ${bg} rounded-[20px] overflow-hidden 
    flex flex-col justify-between
    min-h-[250px] sm:min-h-[300px] md:min-h-[350px]
    ${isHovered ? "flex-grow-0" : "flex-grow-0"} /* prevent flex-grow if it causes size mismatch */
    ${shouldBounce ? "animate-bounce-once" : ""}
  `}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
      {/* Text Section */}
      <div className="p-6 text-white z-10 flex flex-col flex-grow">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
        <div className="flex-grow">
          {textLines.map((line, idx) => (
            <p key={idx} className="text-sm sm:text-base leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`
          relative mx-auto mt-auto transition-transform duration-500 transform
          ${isHovered ? "scale-110 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]" : ""}
          ${isShrunk ? "scale-0 opacity-0 w-[50px] h-[50px]" : !isHovered ? "w-[250px] h-[250px] sm:w-[347px] sm:h-[347px]" : ""}
        `}
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
