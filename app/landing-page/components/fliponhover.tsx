"use client";
import { useEffect, useState } from "react";

export default function FlipOnHover() {
  const [triggerFlip, setTriggerFlip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggerFlip(true);
    }, 1000); // Delay before dissolve

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute -top-16 left-0 flex w-full h-[600px] sm:md:h-full overflow-hidden pointer-events-none gap-3">
      {/* Left Panel Layer 1 - Initial */}
      <div
        className={`w-1/2  h-full absolute top-0 left-0 transition-opacity duration-700 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]
          ${triggerFlip ? "opacity-0" : "opacity-100"}
        `}
      ></div>

      {/* Left Panel Layer 2 - Final */}
      <div
        className={`w-1/2  h-full absolute top-0 left-0 transition-opacity duration-700 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_white_0deg,_#CCC_15deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]
          ${triggerFlip ? "opacity-100" : "opacity-0"}
        `}
      ></div>

      {/* Right Panel Layer 1 - Initial */}
      <div
        className={`w-1/2 h-full absolute top-0 right-0 scale-x-[-1] transition-opacity duration-700 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]
          ${triggerFlip ? "opacity-0" : "opacity-100"}
        `}
      ></div>

      {/* Right Panel Layer 2 - Final */}
      <div
        className={`w-1/2 h-full absolute top-0 right-0 scale-x-[-1] transition-opacity duration-700 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_white_0deg,_#CCC_15deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]
          ${triggerFlip ? "opacity-100" : "opacity-0"}
        `}
      ></div>
    </div>
  );
}
