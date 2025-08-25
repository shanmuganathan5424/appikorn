"use client";

import { useEffect, useState } from "react";
import PanelSlider from "./pannelslider";
import Panel from "./panel";

export default function ResponsivePanel() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Use matchMedia (better than window.innerWidth check)
    const mediaQuery = window.matchMedia("(max-width: 1024px)"); // matches Tailwind lg breakpoint
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile(); // check on mount
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  if (isMobile === null) {
    // Prevent hydration mismatch → render placeholder while checking screen size
    return (
      <section
        aria-label="Loading panels"
        className="w-full min-h-[600px] flex items-center justify-center"
      >
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  return (
    <section
      id="responsive-panel"
      aria-label="Interactive panel showcase"
      className="w-full"
    >
      {isMobile ? <PanelSlider /> : <Panel />}
    </section>
  );
}
