"use client";
import { useState, useEffect } from "react";
import PanelSlider from "./pannelslider";
import Panel from "./panel";


export default function ResponsivePanel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 800); // Tailwind's "lg" breakpoint is 1024px
    };

    checkScreenSize(); // Check initially

    window.addEventListener("resize", checkScreenSize); // Listen on resize
    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  return (
    <div className="w-full">
      {isMobile ? <PanelSlider /> : <Panel />}
    </div>
  );
}
