"use client";
import { useEffect, useState, memo } from "react";

// Optimized Star SVG
const StarIcon = memo(({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 15 16"
    aria-hidden="true"
    className="animate-pulse"
  >
    <path
      d="M6.38 1.47c.03-.11.21-.11.24 0 .19.69.6 1.96 1.28 2.62.67.66 1.98 1.1 2.68 1.3.1.03.1.19 0 .22-.7.2-2.01.64-2.68 1.3-.68.66-1.09 1.93-1.28 2.62-.03.11-.21.11-.24 0-.18-.69-.6-1.96-1.28-2.62-.67-.66-1.98-1.1-2.68-1.3-.1-.03-.1-.19 0-.22.7-.2 2.01-.64 2.68-1.3.68-.66 1.1-1.93 1.28-2.62z"
      fill="white"
    />
  </svg>
));
StarIcon.displayName = "StarIcon";

export default function StarBackground() {
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number }[]
  >([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.floor(Math.random() * 10) + 8,
      }))
    );
  }, []);

  return (
    <div
      className="absolute left-0 top-0 w-full h-screen bg-transparent overflow-hidden"
      role="presentation"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{ top: star.top, left: star.left }}
        >
          <StarIcon size={star.size} />
        </div>
      ))}
    </div>
  );
}
