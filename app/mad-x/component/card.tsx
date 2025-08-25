"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function WhyChoose() {
  const cardData = [
    {
      title: "Smart Task Automation",
      icon: "/mad-x/card/setting.svg",
      description:
        "Automate repetitive tasks with intelligent workflows that save time, reduce errors, and increase productivity. Let your team focus on high-value work while the system handles routine operations seamlessly.",
    },
    {
      title: "AI-Based Suggestions",
      icon: "/mad-x/card/brain.svg",
      description:
        "Leverage AI to provide personalized recommendations, predictive insights, and smart guidance, helping you make faster and more informed decisions.",
    },
    {
      title: "Seamless Integrations",
      icon: "/mad-x/card/reload.svg",
      description:
        "Connect effortlessly with your existing tools and platforms. Our system ensures smooth data flow and interoperability, eliminating silos and streamlining operations.",
    },
    {
      title: "Insightful Dashboards",
      icon: "/mad-x/card/grid.svg",
      description:
        "Visualize key metrics and performance indicators in real time. Interactive dashboards transform complex data into actionable insights for smarter decision-making.",
    },
    {
      title: "Collaborative Workspace",
      icon: "/mad-x/card/message.svg",
      description:
        "Enhance team collaboration with shared spaces, real-time communication, and coordinated project management. Work together efficiently, whether in-office or remote.",
    },
    {
      title: "Secure & Scalable AI",
      icon: "/mad-x/card/lock.svg",
      description:
        "Our AI solutions are built with robust security and privacy standards, ensuring safe data handling. Scalable architecture allows your system to grow with your business needs.",
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
    { width: "900px", height: "900px", x: "-50%", y: "-30%" },
  ];

  return (
    <section
      className="bg-black text-white py-10 sm:py-20 px-4"
      aria-labelledby="why-choose-heading"
    >
      <h2
        id="why-choose-heading"
        className="text-[20px] sm:text-4xl font-bold text-center mb-12 sm:mb-16"
      >
        Why Choose Madix
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
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
    <article
      role="article"
      className="relative border border-black hover:border-[#7CF8A4] 
                 flex flex-col items-start gap-4 w-full max-w-[337.18px] h-auto 
                 sm:h-[389.05px] px-5 py-8 rounded-[30px] sm:rounded-[40px] 
                 overflow-hidden transition-all duration-300 mx-auto"
      style={{
        background: "linear-gradient(88deg, #17C964 0.11%, #7CF8A4 63.8%)",
        boxShadow: hovering
          ? "0 66px 122.25px rgba(124, 248, 164, 0.17), inset 0 -16.5px 36.9px #FFF"
          : "none",
      }}
      onMouseEnter={startAnimation}
    >
      {/* Animated Background */}
      <div
        aria-hidden="true"
        className="z-0 absolute top-0 left-1/2 rounded-full pointer-events-none will-change-transform"
        style={{
          width: style.width,
          height: style.height,
          transform: `translate(${style.x}, ${style.y})`,
          transition: "all 0.3s ease-in-out",
          background:
            "radial-gradient(50% 50% at 50% 50%, #000 0%, #000 55.82%, rgba(0, 0, 0, 0.30) 74%, rgba(0, 0, 0, 0.00) 100%)",
        }}
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="z-40 absolute inset-0 rounded-[30px] sm:rounded-[40px] pointer-events-none"
        style={{
          background:
            "linear-gradient(142deg, rgba(255,255,255,0.20) 2.65%, rgba(255,255,255,0.00) 44.8%)",
        }}
      />

      {/* Content */}
      <div className="z-20 flex flex-col items-start gap-4 px-2 py-2">
        <div
          className="w-14 h-14 sm:w-[71.33px] sm:h-[71.33px] rounded-full flex justify-center items-center transition-all duration-500"
          style={{
            background: hovering
              ? "linear-gradient(147deg, #1FE58D 10.91%, #17C964 97.16%)"
              : "linear-gradient(146deg, rgba(255, 255, 255, 0.20) 16.49%, rgba(255, 255, 255, 0.00) 90.13%)",
            boxShadow: "inset 0 1.5px 4.8px rgba(255, 255, 255, 0.25)",
          }}
        >
          <Image
            src={data.icon}
            alt={`${data.title} Icon`}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
          />
        </div>

        <h3 className="text-white font-bold text-lg sm:text-[26px] leading-tight">
          {data.title}
        </h3>

        <p className="font-sans text-sm sm:text-[14px] font-normal leading-relaxed text-[#E6E6E7]">
          {data.description}
        </p>
      </div>
    </article>
  );
}