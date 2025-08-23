"use client";

import { motion } from "framer-motion";

export default function CircularText() {
  const handleClick = () => {
    const bottomSection = document.getElementById("madx-section");
    if (bottomSection) {
      bottomSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick} // <-- scroll on click
      className="relative flex items-center justify-center w-40 h-40 rounded-full cursor-pointer"
    >
      {/* Circular Text */}
      <svg
        viewBox="0 0 300 300"
        className="absolute w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
          />
        </defs>
        <text
          fill="white"
          fontSize="14"
          fontWeight="bold"
          letterSpacing="6"
          textAnchor="middle"
        >
          <textPath xlinkHref="#circlePath" startOffset="0%">
            Learn more• Learn more• Learn more• Learn more• Learn more• Learn more• Learn more• Learn more•
          </textPath>
        </text>
      </svg>

      {/* Down Arrow in Center */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m0 0l-6-6m6 6l6-6"
          />
        </svg>
      </motion.div>
    </div>
  );
}
