"use client";
import { useEffect, useState } from "react";

export default function FlipOnHover() {
  const [triggerFlip, setTriggerFlip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggerFlip(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute -top-16 left-0 flex w-full h-full overflow-hidden pointer-events-none`}>
      {/* Left Panel */}
      <div
        className={`w-1/2 h-full transition-all duration-100 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)]
          mix-blend-color-dodge -scale-y-[-1]
          ${triggerFlip ? ' [background:conic-gradient(from_90deg_at_50%_50%,_white_0deg,_#CCC_15deg,_#000_356.4deg)] scale-y-[-1]' : ''}
        `}
      ></div>

      {/* Right Panel Mirrored */}
      <div
        className={`w-1/2 h-full scale-x-[-1] transition-all duration-100 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)]
          
          mix-blend-color-dodge -scale-y-[-1]
          ${triggerFlip ? '[background:conic-gradient(from_90deg_at_50%_50%,_white_0deg,_#CCC_15deg,_#000_356.4deg)] -scale-y-[1]' : ''}
        `}
      ></div>
    </div>
  );
}
