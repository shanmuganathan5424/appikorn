"use client";
import { useEffect } from "react";
import Lenis, { LenisOptions } from "@studio-freight/lenis";

export default function useLenisScroll() {
  useEffect(() => {
    const options: LenisOptions = {
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      orientation: "vertical",       // replaces "direction"
      gestureOrientation: "vertical", // replaces "gestureDirection"
      smoothWheel: true,
      touchMultiplier: 1.2,
    };

    const lenis = new Lenis(options);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
