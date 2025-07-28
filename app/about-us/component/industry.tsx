"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sectors = [
  {
    title: "Health Sector",
    imageSrc: "/about/health_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio. Egestas consequat felis hac auctor nisl at. Mi consectetur hendrerit vitae sagittis vitae sed nunc nec. Eget dolor congue massa cras tellus odio. Ac fusce id augue adipiscing ullamcorper enim ut dictum. Maecenas nunc consequat diam nulla. ",
  },
  {
    title: "Insurance Sector",
    imageSrc: "/about/insurance_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio. Egestas consequat felis hac auctor nisl at. Mi consectetur hendrerit vitae sagittis vitae sed nunc nec. Eget dolor congue massa cras tellus odio. Ac fusce id augue adipiscing ullamcorper enim ut dictum. Maecenas nunc consequat diam nulla. ",
  },
  {
    title: "Banking Sector",
    imageSrc: "/about/banking_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio. Egestas consequat felis hac auctor nisl at. Mi consectetur hendrerit vitae sagittis vitae sed nunc nec. Eget dolor congue massa cras tellus odio. Ac fusce id augue adipiscing ullamcorper enim ut dictum. Maecenas nunc consequat diam nulla. ",
  },
  {
    title: "Social Application Sector",
    imageSrc: "/about/social_app_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio. Egestas consequat felis hac auctor nisl at. Mi consectetur hendrerit vitae sagittis vitae sed nunc nec. Eget dolor congue massa cras tellus odio. Ac fusce id augue adipiscing ullamcorper enim ut dictum. Maecenas nunc consequat diam nulla. ",
  },
  {
    title: "Web Development Sector",
    imageSrc: "/about/web_development_image.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida commodo auctor auctor odio. Egestas consequat felis hac auctor nisl at. Mi consectetur hendrerit vitae sagittis vitae sed nunc nec. Eget dolor congue massa cras tellus odio. Ac fusce id augue adipiscing ullamcorper enim ut dictum. Maecenas nunc consequat diam nulla. ",
  },
];

export default function IndustryPage() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  // Create animation controls for each card
  const cardControlsRef = useRef(sectors.map(() => useAnimation()));

  useEffect(() => {
    // Set screen width on mount and update on resize
    const updateSize = () => setScreenWidth(window.innerWidth);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (screenWidth === 0) return;

    let current = 0;
    let isMounted = true;

    const loop = async () => {
      while (isMounted) {
        const next = (current + 1) % sectors.length;

        // Slide to next card
        await controls.start({
          x: -next * screenWidth,
          transition: { duration: 1, ease: "easeInOut" },
        });

        // Direction: forward or wraparound (right) vs backward (left)
        const isForward =
          next > current || (current === sectors.length - 1 && next === 0);
        const nudgeValue = isForward ? 4 : -4;

        // Quick nudge
        await cardControlsRef.current[next].start({
          x: nudgeValue,
          transition: { duration: 0.2, ease: "easeOut" },
        });

        // Quick return
        await cardControlsRef.current[next].start({
          x: 0,
          transition: { duration: 0.2, ease: "easeIn" },
        });

        // Wait remaining time (3s total)
        await new Promise((resolve) => setTimeout(resolve, 2600));

        // Reset others
        cardControlsRef.current.forEach((ctrl, i) => {
          if (i !== next) ctrl.set({ x: 0 });
        });

        current = next;
      }
    };

    loop();

    return () => {
      isMounted = false;
    };
  }, [controls, screenWidth]);

  return (
    <div className="w-screen overflow-hidden pt-20 pb-40 mx-auto">
      <h1 className="text-purple1 text-[58px] font-extrabold leading-[71.22px] tracking-[-0.49px] pb-50 pl-15">
        Industries We Work For
      </h1>
      <motion.div
        animate={controls}
        className="flex"
        style={{ width: `${sectors.length * screenWidth}px` }}
      >
        {sectors.map((sector, index) => (
          <SectorCard
            key={index}
            title={sector.title}
            imageSrc={sector.imageSrc}
            description={sector.description}
            width={screenWidth}
            animateControl={cardControlsRef.current[index]}
          />
        ))}
      </motion.div>
    </div>
  );
}

type SectorCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  width: number;
  animateControl: ReturnType<typeof useAnimation>;
};

const SectorCard = ({
  title,
  description,
  imageSrc,
  width,
  animateControl,
}: SectorCardProps) => {
  return (
    <motion.div
      animate={animateControl}
      className="grid grid-cols-2 px-[100px] pt-[70px] pb-[30px] rounded-3xl flex-shrink-0"
      style={{ width: `${width}px` }}
    >
      {/* Left: Image */}
      <div className="bg-[#6887DC] h-[350px] rounded-l-3xl relative overflow-visible">
        <Image
          src={imageSrc}
          alt={title}
          className="absolute -top-[160px] -left-[72px]"
          width={600}
          height={600}
        />
      </div>

      {/* Right: Text */}
      <div className="bg-[#6887DC] h-[350px] rounded-r-3xl text-white flex flex-col justify-center space-y-5">
        <h1 className="text-[50px] leading-[56.51px] font-semibold">{title}</h1>
        <p className="text-[20px] leading-[37px] font-normal pr-20">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
