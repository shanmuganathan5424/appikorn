"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logoImages = [
  "/portfolio/logos/Anoud.svg",
  "/portfolio/logos/Beema.svg",
  "/portfolio/logos/FSH.svg",
  "/portfolio/logos/insurance.svg",
  "/portfolio/logos/Lavazza.svg",
  "/portfolio/logos/OQIC.svg",
  "/portfolio/logos/QIC.svg",
  "/portfolio/logos/Wild-bean.svg",
];

const desktopImages = [
  "/portfolio/sliding-image/beema.webp",
  "/portfolio/sliding-image/beema2.webp",
  "/portfolio/sliding-image/beema3.webp",
  "/portfolio/sliding-image/besttea.webp",
  "/portfolio/sliding-image/doc.webp",
  "/portfolio/sliding-image/fresh-honest.webp",
  "/portfolio/sliding-image/fresh-honest2.webp",
  "/portfolio/sliding-image/fresh-honest3.webp",
];

// ✅ Hook for responsive breakpoint
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function InfiniteSlider({
  images,
  direction = "left",
  speed,
  imageHeight,
}: {
  images: string[];
  direction?: "left" | "right";
  speed: number;
  imageHeight: number;
}) {
  return (
    <div className="relative overflow-hidden w-full">
<motion.div
  className="flex gap-3 sm:gap-6 px-2 sm:px-4 w-[200%]"  // ⬅️ force width larger than parent
  animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
  transition={{
    repeat: Infinity,
    duration: speed,
    ease: "linear",
  }}
>
  {[...images, ...images].map((img, idx) => (
    <div
      key={idx}
      className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg flex-shrink-0 bg-white p-1 sm:p-2"
      style={{ height: imageHeight }}
    >
      <Image
        src={img}
        alt={`slide-${idx}`}
        width={400}
        height={300}
        className="object-contain h-full w-auto"
      />
    </div>
  ))}
</motion.div>

    </div>
  );
}

export default function MultiLayerSlider() {
  const isMobile = useIsMobile();

  // ✅ If mobile, merge row 2 + row 3
  const mobileDesktopImages = isMobile
    ? [...desktopImages.slice(0, 4), ...desktopImages.slice(4)]
    : desktopImages;

  return (
<div className="w-full  py-10 sm:py-16 lg:py-20 bg-black overflow-hidden flex flex-col items-center justify-center">
  <div className="w-[120%] flex flex-col items-center justify-center gap-6 sm:gap-10 md:gap-12 -rotate-[2deg] md:-rotate-[3deg]">

        {/* 🔹 Top Logos Row */}
        <InfiniteSlider
          images={logoImages}
          direction="left"
          speed={isMobile ? 15 : 25}
          imageHeight={isMobile ? 80 : 160}
        />

        {/* 🔹 Center Rows (mobile: merged into one row) */}
        <InfiniteSlider
          images={isMobile ? mobileDesktopImages : desktopImages.slice(0, 4)}
          direction="right"
          speed={isMobile ? 20 : 35}
          imageHeight={isMobile ? 180 : 350}
        />

        {/* Only render 3rd row on desktop */}
        {!isMobile && (
          <InfiniteSlider
            images={desktopImages.slice(4)}
            direction="left"
            speed={35}
            imageHeight={350}
          />
        )}
      </div>
    </div>
  );
}
