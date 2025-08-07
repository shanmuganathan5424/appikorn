// components/ThemeToggle.tsx
"use client";
import { useState } from "react";

export default function ThemeToggle() {
  const [activeMode, setActiveMode] = useState("system");

  const getButtonClass = (mode: string) =>
    `flex-1 flex items-center justify-center p-2 rounded-md transition-colors ${
      activeMode === mode ? "bg-white text-black" : "text-gray-300"
    }`;

  return (
    <div className="flex border border-gray-400 rounded-xl overflow-hidden w-fit bg-black">
      <button onClick={() => setActiveMode("system")} className={getButtonClass("system")}>
        {/* Dummy monitor icon */}
        <div><img src="/mad-x/theme-icon/system.svg" alt="icon" /></div>
      </button>
      <button onClick={() => setActiveMode("light")} className={getButtonClass("light")}>
        {/* Dummy sun icon */}
        <div ><img src="/mad-x/theme-icon/sun.svg" alt="icon" /></div>
      </button>
      <button onClick={() => setActiveMode("dark")} className={getButtonClass("dark")}>
        {/* Dummy moon icon */}
        <div ><img src="/mad-x/theme-icon/moon.svg" alt="icon" /></div>
      </button>
    </div>
  );
}
