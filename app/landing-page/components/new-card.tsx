"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Cloud Services",
    heading: "Uncovering insights that",
    subHeading: "Delivering secure and scalable cloud solutions.",
    dark: true,
    image: "/images/discovery.svg",
  },
  {
    title: "UI/UX Designer",
    heading: "Design with purpose",
    subHeading: "Crafting intuitive and engaging user experiences.",
    dark: false,
    image: "/images/production.svg",
  },
  {
    title: "Product Design",
    heading: "Innovation that inspires",
    subHeading: "Designing products users love.",
    dark: true,
    image: "/images/production.svg",
  },
  {
    title: "QA & Testing",
    heading: "Precision at every step",
    subHeading: "Ensuring quality, reliability, and performance.",
    dark: false,
    image: "/images/production.svg",
  },
  {
    title: "Web Development",
    heading: "Engineering the future",
    subHeading: "Building fast, scalable platforms.",
    dark: true,
    image: "/images/production.svg",
  },
  {
    title: "VR/AR Technology",
    heading: "Beyond imagination",
    subHeading: "Creating immersive digital worlds.",
    dark: false,
    image: "/images/production.svg",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between ${
              step.dark ? "bg-black text-white" : "bg-white text-black"
            } shadow-md`}
          >
            {/* Title */}
            <p
              className={`uppercase text-sm font-semibold tracking-wide mb-4 ${
                step.dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {step.title}
            </p>

            {/* Headings */}
            <h3
              className={`text-2xl sm:text-3xl font-semibold leading-snug ${
                step.dark ? "text-white" : "text-black"
              }`}
            >
              {step.heading}{" "}
              <span
                className={step.dark ? "text-gray-300" : "text-gray-500"}
              >
                {step.subHeading}
              </span>
            </h3>

            {/* Illustration */}
            <div className="mt-8 flex justify-center items-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-full max-w-xs md:max-w-sm object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
