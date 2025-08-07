"use client";

import { useEffect, useState, useRef } from "react";

export default function WhyChoose() {
  const cardData = [
    {
      title: "Smart Task Automation",
      icon: "/mad-x/card/setting.svg",
      description:
        "We provide innovative solutions that meet our clients' goals. Our team of experts is dedicated to your success. We provide a complete approach to each project, utilising our knowledge to ensure the best possible outcome.",
    },
    {
      title: "AI-Based Suggestions",
      icon: "/mad-x/card/brain.svg",
      description:
        "We provide innovative solutions that meet our clients' goals. Our team of experts is dedicated to your success. We provide a complete approach to each project, utilising our knowledge to ensure the best possible outcome.",
    },
    {
      title: "Seamless Integrations",
      icon: "/mad-x/card/reload.svg",
      description:
        "We provide innovative solutions that meet our clients' goals. Our team of experts is dedicated to your success. We provide a complete approach to each project, utilising our knowledge to ensure the best possible outcome.",
    },
    {
      title: "Insightful Dashboards",
      icon: "/mad-x/card/grid.svg",
      description:
        "We provide innovative solutions that meet our clients' goals. Our team of experts is dedicated to your success. We provide a complete approach to each project, utilising our knowledge to ensure the best possible outcome.",
    },
    {
      title: "Collaborative Workspace",
      icon: "/mad-x/card/message.svg",
      description:
        "Stay in the loop with clear and consistent communication throughout the process.We provide innovative solutions that meet our clients' goals. Our team of experts is dedicated to your success. We provide a complete approach to each project, utilising our knowledge to ensure the best possible outcome.",
    },
    {
      title: "Secure & Scalable AI",
      icon: "/mad-x/card/lock.svg",
      description:
        "We provide innovative solutions that meet our clients' goals. Our team of experts is dedicated to your success. We provide a complete approach to each project, utilising our knowledge to ensure the best possible outcome.",
    },
  ];

  const translateMap = [
  { width: "900px", height: "900px", x: "-50%", y: "-30%" },
  { width: "880px", height: "900px", x: "-53%", y: "-46%" },
  { width: "860px", height: "900px", x: "-52%", y: "-44%" },
  { width: "850px", height: "900px", x: "-54%", y: "-43%" },
  { width: "840px", height: "900px", x: "-50%", y: "-42%" },
  { width: "830px", height: "900px", x: "-48%", y: "-43%" },
  { width: "800px", height: "900px", x: "-47%", y: "-44%" },
  { width: "780px", height: "900px", x: "-48%", y: "-45%" },
  { width: "760px", height: "900px", x: "-50%", y: "-46%" },
  { width: "750px", height: "900px", x: "-51%", y: "-47%" },
  { width: "740px", height: "900px", x: "-53%", y: "-46%" },
  { width: "760px", height: "900px", x: "-52%", y: "-45%" },
  { width: "780px", height: "900px", x: "-51%", y: "-44%" },
  { width: "800px", height: "900px", x: "-50%", y: "-43%" },
  { width: "820px", height: "900px", x: "-49%", y: "-42%" },
  { width: "850px", height: "900px", x: "-50%", y: "-43%" },
  { width: "880px", height: "900px", x: "-52%", y: "-44%" },
  { width: "900px", height: "900px", x: "-55%", y: "-45%" },
  { width: "920px", height: "900px", x: "-54%", y: "-44%" },
  { width: "940px", height: "900px", x: "-53%", y: "-43%" },
  { width: "960px", height: "900px", x: "-52%", y: "-42%" },
  { width: "980px", height: "900px", x: "-51%", y: "-41%" },
  { width: "1000px", height: "900px", x: "-50%", y: "-40%" },
  { width: "980px", height: "900px", x: "-52%", y: "-41%" },
  { width: "960px", height: "900px", x: "-54%", y: "-42%" },
  { width: "940px", height: "900px", x: "-56%", y: "-43%" },
  { width: "920px", height: "900px", x: "-58%", y: "-44%" },
  { width: "900px", height: "900px", x: "-60%", y: "-45%" },
  // 
  { width: "920px", height: "900px", x: "-58%", y: "-44%" },
  { width: "940px", height: "900px", x: "-56%", y: "-43%" },
   { width: "960px", height: "900px", x: "-54%", y: "-42%" },
  { width: "980px", height: "900px", x: "-52%", y: "-41%" },
  { width: "1000px", height: "900px", x: "-50%", y: "-40%" },
  { width: "980px", height: "900px", x: "-51%", y: "-41%" },
  { width: "960px", height: "900px", x: "-52%", y: "-42%" },
  { width: "940px", height: "900px", x: "-53%", y: "-43%" },
  { width: "920px", height: "900px", x: "-54%", y: "-44%" },
  { width: "900px", height: "900px", x: "-55%", y: "-45%" },
  { width: "880px", height: "900px", x: "-52%", y: "-44%" },
  { width: "850px", height: "900px", x: "-50%", y: "-43%" },
  { width: "820px", height: "900px", x: "-49%", y: "-42%" },
  { width: "800px", height: "900px", x: "-50%", y: "-43%" },
  { width: "780px", height: "900px", x: "-51%", y: "-44%" },
  { width: "760px", height: "900px", x: "-52%", y: "-45%" },
  { width: "740px", height: "900px", x: "-53%", y: "-46%" },
  { width: "750px", height: "900px", x: "-51%", y: "-47%" },
  { width: "760px", height: "900px", x: "-50%", y: "-46%" },
  { width: "780px", height: "900px", x: "-48%", y: "-45%" },
  { width: "800px", height: "900px", x: "-47%", y: "-44%" },
  { width: "830px", height: "900px", x: "-48%", y: "-43%" },
  { width: "840px", height: "900px", x: "-50%", y: "-42%" },
  { width: "850px", height: "900px", x: "-54%", y: "-43%" },
  { width: "860px", height: "900px", x: "-52%", y: "-44%" },
  { width: "880px", height: "900px", x: "-53%", y: "-46%" },
  { width: "900px", height: "900px", x: "-50%", y: "-30%" }
];


  return (
    <section className="bg-black text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Why Choose Madix</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
  data: {
    title: string;
    icon: string;
    description: string;
  };
  translateMap: { width: string; height: string; x: string; y: string }[];
}) {
  const [style, setStyle] = useState(translateMap[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  const defaultBackground = {
    width: "900px",
    height: "900px",
    x: "-50%",
    y: "-30%",
  };

  const startAnimation = () => {
    if (isAnimatingRef.current) return; // prevent multiple starts
    isAnimatingRef.current = true;
    let step = 0;

    intervalRef.current = setInterval(() => {
      setStyle(translateMap[step]);
      step += 1;

      if (step >= translateMap.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;

        // Delay before resetting to default for smoother dissolve
        timeoutRef.current = setTimeout(() => {
          setStyle(defaultBackground);
          isAnimatingRef.current = false;
        }, 300); // optional dissolve delay
      }
    }, 80); // fast + smooth animation
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(timeoutRef.current!);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-start gap-[15px] w-[337.18px] h-[389.05px] px-[19.45px] py-[32px] rounded-[40px] border overflow-hidden transition-all duration-300"
      style={{
        background: "linear-gradient(88deg, #17C964 0.11%, #7CF8A4 63.8%)",
        boxShadow: isAnimatingRef.current
          ? "0 66px 122.25px rgba(124, 248, 164, 0.17), inset 0 -16.5px 36.9px #FFF"
          : "none",
      }}
      onMouseEnter={startAnimation}
    >
      {/* Animated Background */}
      <div
        className="z-0 absolute top-0 left-1/2 rounded-full pointer-events-none"
        style={{
          width: style.width,
          height: style.height,
          transform: `translate(${style.x}, ${style.y})`,
          transition: "all 0.3s ease-in-out",
          background:
            "radial-gradient(50% 50% at 50% 50%, #000 0%, #000 55.82%, rgba(0, 0, 0, 0.30) 74%, rgba(0, 0, 0, 0.00) 100%)",
        }}
      />

      {/* Static Overlay */}
      <div
        className="z-40 absolute inset-0 rounded-[40px] pointer-events-none"
        style={{
          background:
            "linear-gradient(142deg, rgba(255,255,255,0.20) 2.65%, rgba(255,255,255,0.00) 44.8%)",
        }}
      />

      {/* Content */}
      <div className="z-20 flex flex-col items-start gap-[16.27px] px-[10px] py-[10px]">
        <div
          className="w-[71.33px] h-[71.33px] rounded-full flex justify-center items-center transition-all duration-500"
          style={{
            background:
              "linear-gradient(146deg, rgba(255, 255, 255, 0.20) 16.49%, rgba(255, 255, 255, 0.00) 90.13%), linear-gradient(147deg, #1FE58D 10.91%, #17C964 97.16%)",
            boxShadow: "inset 0 1.5px 4.8px rgba(255, 255, 255, 0.25)",
          }}
        >
          <img
            src={data.icon}
            alt={data.title}
            className="w-[32.42px] h-[32.42px]"
          />
        </div>

        <div className="text-white font-bold text-[26px] leading-[30px]">
          {data.title}
        </div>

        <div className="font-sans text-[14px] font-normal leading-[17px] text-[#E6E6E7]">
          {data.description}
        </div>
      </div>
    </div>
  );
}
