"use client";

import { useEffect, useState, useRef } from "react";

export default function NewCard() {
  const cardData = [
    {
      icon: "/service-icon/cloud.svg",
      title: "Cloud Services",
      description: "Delivering secure and scalable cloud solutions.",
    },
    {
      icon: "/service-icon/cloud.svg",
      title: "UI/UX Designer",
      description: "Crafting intuitive and engaging user experiences.",
    },
    {
      icon: "/service-icon/product.svg",
      title: "Product Design",
      description: "Designing products users love.",
    },
    {
      icon: "/service-icon/qa.svg",
      title: "QA & Testing",
      description: "Ensuring quality, reliability, and performance.",
    },
    {
      icon: "/service-icon/dev.svg",
      title: "Web Development",
      description: "Building fast, scalable platforms.",
    },
    {
      icon: "/service-icon/vr.svg",
      title: "VR/AR Technology",
      description: "Creating immersive digital worlds.",
    },
  ];

  const translateMap = [
    { width: "900px", height: "900px", x: "-50%", y: "-30%" },
    { width: "880px", height: "900px", x: "-53%", y: "-46%" },
    { width: "860px", height: "900px", x: "-52%", y: "-44%" },
    { width: "850px", height: "900px", x: "-54%", y: "-43%" },
    { width: "830px", height: "900px", x: "-48%", y: "-43%" },
    { width: "800px", height: "900px", x: "-47%", y: "-44%" },
  ];

  return (
    <section className="bg-transparent text-center py-10 sm:py-20 px-4">
      <h2 className="text-[20px] sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-black">
        Why Choose Madix
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto place-items-center">
        {cardData.map((card, idx) => (
          <AnimatedCard key={idx} data={card} translateMap={translateMap} />
        ))}
      </div>
    </section>
  );
}

function AnimatedCard({
  data,
  translateMap,
}: {
  data: { title: string; icon: string; description: string };
  translateMap: { width: string; height: string; x: string; y: string }[];
}) {
  const [style, setStyle] = useState(translateMap[0]);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);
  const defaultBackground = translateMap[0];

  const startAnimation = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setHovering(true);
    let step = 0;
    intervalRef.current = setInterval(() => {
      setStyle(translateMap[step]);
      step += 1;
      if (step >= translateMap.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        timeoutRef.current = setTimeout(() => {
          setStyle(defaultBackground);
          setHovering(false);
          isAnimatingRef.current = false;
        }, 300);
      }
    }, 80);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(timeoutRef.current!);
    };
  }, []);

  return (
    <div
      className="relative border border-transparent hover:white flex flex-col items-center text-center gap-4 w-full max-w-[340px] h-auto sm:h-[389px] px-5 py-8 rounded-[30px] sm:rounded-[40px] overflow-hidden transition-all duration-300 mx-auto"
      style={{
        background: "linear-gradient(135deg, #c084fc 0%, #1e3a8a 100%)", // light purple → dark blue
        boxShadow: hovering
          ? "0 20px 60px rgba(192, 132, 252, 0.4), inset 0 -16.5px 36.9px #FFF"
          : "none",
      }}
      onMouseEnter={startAnimation}
    >
      {/* Animated Background (white gradient) */}
      <div
        className="z-0 absolute top-0 left-1/2 rounded-full pointer-events-none"
        style={{
          width: style.width,
          height: style.height,
          transform: `translate(${style.x}, ${style.y})`,
          transition: "all 0.3s ease-in-out",
          background:
            "radial-gradient(50% 50% at 50% 50%, #fff 0%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0.3) 74%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Overlay */}
      <div
        className="z-40 absolute inset-0 rounded-[30px] sm:rounded-[40px] pointer-events-none"
        style={{
          background:
            "linear-gradient(142deg, rgba(255,255,255,0.15) 2.65%, rgba(255,255,255,0.00) 44.8%)",
        }}
      />

      {/* Content */}
      <div className="z-20 flex flex-col items-center text-center gap-4 px-2 py-2">
        <div
          className="w-14 h-14 sm:w-[71px] sm:h-[71px] rounded-full flex justify-center items-center transition-all duration-500 bg-white"
          style={{
            boxShadow: "inset 0 1.5px 4.8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            src={data.icon}
            alt={data.title}
            className="w-8 h-8 sm:w-[32px] sm:h-[32px]"
          />
        </div>

        <div className="font-bold text-lg sm:text-[26px] leading-tight text-black">
          {data.title}
        </div>

        <div className="font-sans text-sm sm:text-[14px] font-normal leading-relaxed text-gray-800">
          {data.description}
        </div>
      </div>
    </div>
  );
}
