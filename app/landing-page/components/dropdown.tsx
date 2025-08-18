"use client";

import SmartCard from "./smart-card";

export default function DropDown() {
  const cardData = [
    {
      title: "Fast Working Process",
      img: "/dropdown-image/01.png",
      bg: "bg-pinkcustom",
      lines: [
        "Streamlined processes for rapid results. Efficiency that accelerates your success.",
        "Optimized workflows to save you time and resources.",
        "Constant improvements for seamless operations.",
        "Innovative strategies tailored to your needs."
      ],
    },
    {
      title: "Dedicated Team",
      img: "/dropdown-image/02.png",
      bg: "bg-vilotcustom",
      lines: [
        "Your dedicated team of experts, committed to realizing your vision.",
        "Together, we'll achieve your goals with precision and care.",
        "Collaborative and transparent communication.",
        "Expertise across all necessary domains.",
      ],
    },
    {
      title: "24 / 7 Support",
      img: "/dropdown-image/03.png",
      bg: "bg-greencustom",
      lines: [
        "Round-the-clock support for your peace of mind.",
        "We're here whenever you need us, day or night.",
        "Rapid response times and helpful assistance.",
        "Reliable solutions that keep you moving forward.",
      ],
    },
    {
      title: "Fast Working Process",
      img: "/dropdown-image/04.png",
      bg: "bg-dartvilot",
      lines: [
        "Your dedicated team of experts, committed to realizing your vision.",
        "Together, we'll achieve your goals with precision and care.",
        "Tailored strategies to meet your specific needs.",
      ],
    },
  ];

  return (
    <div
      className="
        flex flex-col md:flex-row
        items-stretch
        justify-center
        gap-6 md:gap-8 lg:gap-10
        px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32
        py-6
        max-w-[1300px]
        mx-auto
      "
    >
      {/* Left Column */}
      <div className="flex flex-col gap-6 flex-1 max-w-[600px]">
        <SmartCard {...cardData[0]} />
        <SmartCard {...cardData[1]} />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 flex-1 max-w-[600px]">
        <SmartCard {...cardData[2]} />
        <SmartCard {...cardData[3]} />
      </div>
    </div>
  );
}
