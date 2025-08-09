"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [activeMode, setActiveMode] = useState("system");

  // On mount, check localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setActiveMode(savedMode);
      applyTheme(savedMode);
    } else {
      applyTheme("system");
    }
  }, []);

  // Apply the theme by toggling 'dark' class on <html>
  function applyTheme(mode: string) {
    const root = window.document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
    } else if (mode === "light") {
      root.classList.remove("dark");
    } else {
      // system
      root.classList.remove("dark");
      // Automatically toggle dark if system prefers dark
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      }
    }
  }

  function onClick(mode: string) {
    setActiveMode(mode);
    localStorage.setItem("themeMode", mode);
    applyTheme(mode);
  }

  const getButtonClass = (mode: string) =>
    `flex-1 flex items-center justify-center p-2 rounded-md transition-colors cursor-pointer ${
      activeMode === mode ? "bg-white text-black" : "text-gray-300"
    }`;

  return (
    <div className="flex border border-gray-400 rounded-xl overflow-hidden w-fit bg-black">
      
      <button onClick={() => onClick("light")} className={getButtonClass("light")}>
        <img src="/mad-x/theme-icon/sun.svg" alt="light icon" />
      </button>
      <button onClick={() => onClick("dark")} className={getButtonClass("dark")}>
        <img src="/mad-x/theme-icon/moon.svg" alt="dark icon" />
      </button>
    </div>
  );
}
