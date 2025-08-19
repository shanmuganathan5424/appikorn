"use client";

import { motion } from "framer-motion";

const cardData = [
  {
    title: "Fast Working Process",
    img: "/fast.png",
    desc: [
      "Streamlined processes for rapid results. Efficiency that accelerates your success.",
      "Optimized workflows to save you time and resources.",
      "Constant improvements for seamless operations.",
      "Innovative strategies tailored to your needs.",
    ],
  },
  {
    title: "Dedicated Team",
    img: "/group.png",
    desc: [
      "Your dedicated team of experts, committed to realizing your vision.",
      "Together, we'll achieve your goals with precision and care.",
      "Collaborative and transparent communication.",
      "Expertise across all necessary domains.",
    ],
  },
  {
    title: "24 / 7 Support",
    img: "/24-hours.png",
    desc: [
      "Round-the-clock support for your peace of mind.",
      "We're here whenever you need us, day or night.",
      "Rapid response times and helpful assistance.",
      "Reliable solutions that keep you moving forward.",
    ],
  },
  {
    title: "Tailored Strategies",
    img: "/idea.png",
    desc: [
      "Your dedicated team of experts, committed to realizing your vision.",
      "Together, we'll achieve your goals with precision and care.",
      "Tailored strategies to meet your specific needs.",
    ],
  },
];

export default function DropDown() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="
              relative rounded-2xl bg-white shadow-lg 
              hover:shadow-2xl p-8 flex flex-col
              items-start text-gray-800 transition
              h-full min-h-[350px] 
            "
          >
            {/* Icon */}
            <div className="mb-6 w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center shadow-md">
              <img src={card.img} alt={card.title} className="w-8 h-8" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside space-y-2">
              {card.desc.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
