import SmartCard from "./smartc-card";

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
        "Your dedicated team of experts, committed to realizing your vision.",
        "Together, we'll achieve your goals with precision and care.",
        "Your dedicated team of experts, committed to realizing your vision.",
        "Together, we'll achieve your goals with precision and care."
      ]
    }
  ];

  return (
    <div className="w-full min-h-[850px] flex flex-row items-center justify-center gap-8 px-4 flex-wrap">
      <div className="w-[450px] h-[850px] flex flex-col gap-4 overflow-hidden transition-all duration-500">
        <SmartCard {...cardData[0]} />
        <SmartCard {...cardData[1]} />
      </div>
      <div className="w-[450px] h-[850px] flex flex-col gap-4 overflow-hidden transition-all duration-500">
        <SmartCard {...cardData[2]} />
        <SmartCard {...cardData[3]} />
      </div>
    </div>
  );
}
