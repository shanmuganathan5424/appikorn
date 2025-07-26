import SmartCard from "./smart-card";

export default function DropDown() {
  const cardData = [
    {
      title: "Fast Working Process",
      img: "/dropdown-image/01.png",
      bg: "bg-pinkcustom",
      lines: [
        "Streamlined processes for rapid results. Efficiency that accelerates your success.",
        "Streamlined processes for rapid results. Efficiency that accelerates your success.",
        "Streamlined processes for rapid results. Efficiency that accelerates your success.",
        "Streamlined processes for rapid results. Efficiency that accelerates your success."
      ]
    },
    {
      title: "Dedicated Team",
      img: "/dropdown-image/02.png",
      bg: "bg-vilotcustom",
      lines: [
        "Your dedicated team of experts, committed to realizing your vision.",
        "Together, we'll achieve your goals with precision and care.",
        "Your dedicated team of experts, committed to realizing your vision.",
        "Together, we'll achieve your goals with precision and care."
      ]
    },
    {
      title: "24 / 7 Support",
      img: "/dropdown-image/03.png",
      bg: "bg-greencustom",
      lines: [
        "Round-the-clock support for your peace of mind. We're here whenever you need us, day or night.",
        "Round-the-clock support for your peace of mind. We're here whenever you need us, day or night.",
        "Round-the-clock support for your peace of mind. We're here whenever you need us, day or night.",
        "Round-the-clock support for your peace of mind. We're here whenever you need us, day or night."
      ]
    },
    {
      title: "Fast Working Process",
      img: "/dropdown-image/04.png",
      bg: "bg-dartvilot",
      lines: [
  "Your dedicated team of experts, committed to realizing your vision. Together, we'll achieve your goals with precision and care.",
  "Your dedicated team of experts, committed to realizing your vision. Together, we'll achieve your goals with precision and care.",
  "Your dedicated team of experts, committed to realizing your vision. Together, we'll achieve your goals with precision and care.",
  
]

    }
  ];
return (
  <div className="
  w-full 
  min-h-[850px] md:min-h-[900px] lg:min-h-[950px] xl:min-h-[1000px] 2xl:min-h-[1100px]
  flex flex-row 
  items-center 
  justify-center 
  gap-4 md:gap-6 lg:gap-10 xl:gap-14 2xl:gap-20
  px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32
  py-6
  transition-all duration-500
">

    {/* First Column */}
    <div className="
      w-[420px] h-[800px] 
      md:w-[460px] md:h-[850px] 
      lg:w-[500px] lg:h-[900px] 
      xl:w-[540px] xl:h-[950px]
      2xl:w-[580px] 2xl:h-[1000px]
      flex flex-col gap-4 overflow-hidden transition-all duration-500
    ">
      <SmartCard {...cardData[0]} />
      <SmartCard {...cardData[1]} />
    </div>

    {/* Second Column */}
    <div className="
      w-[420px] h-[800px] 
      md:w-[460px] md:h-[850px] 
      lg:w-[500px] lg:h-[900px] 
      xl:w-[540px] xl:h-[950px]
      2xl:w-[580px] 2xl:h-[1000px]
      flex flex-col gap-4 overflow-hidden transition-all duration-500
    ">
      <SmartCard {...cardData[2]} />
      <SmartCard {...cardData[3]} />
    </div>
  </div>
);

}
