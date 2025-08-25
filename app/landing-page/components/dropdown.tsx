"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    title: "Fast Working Process",
    heading: "Efficiency at speed",
    subHeading:
      "Streamlined processes that accelerate your success with optimized workflows.",
    dark: true,
    image: "/fast.png",
    alt: "Fast workflow illustration",
  },
  {
    title: "Dedicated Team",
    heading: "People who care",
    subHeading:
      "Your dedicated team of experts, committed to realizing your vision.",
    dark: false,
    image: "/people.png",
    alt: "Team collaboration illustration",
  },
  {
    title: "24 / 7 Support",
    heading: "Always available",
    subHeading:
      "Round-the-clock support for your peace of mind, day or night.",
    dark: false,
    image: "/24-hours.png",
    alt: "24/7 support icon",
  },
  {
    title: "Tailored Strategies",
    heading: "Custom-fit solutions",
    subHeading:
      "Innovative strategies tailored to your specific needs and goals.",
    dark: true,
    image: "/idea.png",
    alt: "Lightbulb idea icon",
  },
];

export default function DropDown() {
  return (
    <section
      id="why-choose-us"
      className="w-full px-4 sm:px-6 lg:px-12 py-16"
      aria-labelledby="why-choose-heading"
    >
      {/* Section Heading */}
      <motion.h2
        id="why-choose-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pb-12 text-black text-center font-bold leading-tight tracking-tight text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]"
      >
        Why Choose Us
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {cardData.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`w-full rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center shadow-lg transform transition duration-300 hover:scale-105 ${
              card.dark
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-200"
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 md:pr-8">
              <p
                className={`uppercase text-sm font-semibold tracking-wide mb-3 ${
                  card.dark ? "text-purple-400" : "text-purple-600"
                }`}
              >
                {card.title}
              </p>

              <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                {card.heading}
              </h3>

              <p
                className={`text-base leading-relaxed ${
                  card.dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {card.subHeading}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
              <Image
                src={card.image}
                alt={card.alt}
                width={220}
                height={220}
                className="object-contain"
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
