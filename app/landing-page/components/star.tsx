"use client";
import { useEffect, useState } from "react";
import PurpleStar from "./big-star";

// Star SVG Component
function StarIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 15 16"
      fill="none"
      className="animate-pulse"
    >
      <g filter="url(#whiteShadow)">
        <path
          d="M6.38311 1.47842C6.41167 1.3732 6.58833 1.3732 6.61689 1.47842C6.8044 2.16926 7.22181 3.43593 7.90007 4.09993C8.57464 4.76032 9.88655 5.19593 10.5671 5.38782C10.6699 5.41681 10.6699 5.58319 10.5671 5.61218C9.88655 5.80407 8.57464 6.23968 7.90007 6.90007C7.22181 7.56407 6.8044 8.83074 6.61689 9.52158C6.58833 9.6268 6.41167 9.6268 6.38311 9.52158C6.1956 8.83074 5.77819 7.56407 5.09993 6.90007C4.42536 6.23968 3.11345 5.80407 2.4329 5.61218C2.33009 5.58319 2.33009 5.41681 2.4329 5.38782C3.11345 5.19593 4.42536 4.76032 5.09993 4.09993C5.77819 3.43593 6.1956 2.16926 6.38311 1.47842Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="whiteShadow"
          x="0.35"
          y="0.39"
          width="11.3"
          height="10.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0"
          />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend in2="effect2_dropShadow" result="effect3_dropShadow" />
          <feOffset dx="-1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0"
          />
          <feBlend in2="effect3_dropShadow" result="effect4_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect4_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

// Page with Random Stars
export default function StarBackground() {
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number }[]
  >([]);

  useEffect(() => {
    const newStars = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.floor(Math.random() * 10) + 8, // size between 8–18
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute left-0 top-0 z-0  w-full h-screen bg-transparent overflow-hidden">
        
        

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
          }}
        >
          <StarIcon size={star.size} />
        </div>
      ))}
      {/* Content in front of stars */}

    </div>
  );
}
