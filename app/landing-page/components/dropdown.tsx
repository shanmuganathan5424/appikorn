"use client";

import { motion } from "framer-motion";

const cardData = [
  {
    title: "Fast Working Process",
    heading: "Efficiency at speed",
    subHeading:
      "Streamlined processes that accelerate your success with optimized workflows.",
    dark: true,
    image: "/fast.png",
  },
  {
    title: "Dedicated Team",
    heading: "People who care",
    subHeading:
      "Your dedicated team of experts, committed to realizing your vision.",
    dark: false,
    image: "/people.png",
  },
  {
    title: "24 / 7 Support",
    heading: "Always available",
    subHeading:
      "Round-the-clock support for your peace of mind, day or night.",
    dark: false,
    image: "/24-hours.png",
  },
  {
    title: "Tailored Strategies",
    heading: "Custom-fit solutions",
    subHeading:
      "Innovative strategies tailored to your specific needs and goals.",
    dark: true,
    image: "/idea.png",
  },
];

export default function DropDown() {
  return (
    <section className="w-full  px-4 sm:px-6 lg:px-12 ">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pb-12 text-black text-center font-bold leading-tight tracking-tight text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px]"
      >
        Why Choose Us
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`w-full rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row md:flex-row items-center shadow-lg transform transition duration-300 hover:scale-105 ${
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
              <img
                src={card.image}
                alt={card.title}
                className="max-h-[200px] object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
