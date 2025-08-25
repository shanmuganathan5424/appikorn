"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Cloud Services",
    heading: "Uncovering insights that",
    subHeading: "Delivering secure and scalable cloud solutions.",
    dark: true,
    image: "/card-image-new/white-cloud.svg",
  },
  {
    title: "UI/UX Designer",
    heading: "Design with purpose",
    subHeading: "Crafting intuitive and engaging user experiences.",
    dark: false,
    image: "/card-image-new/uiux.svg",
  },
  {
    title: "Product Design",
    heading: "Innovation that inspires",
    subHeading: "Designing products users love.",
    dark: true,
    image: "/card-image-new/product-design.svg",
  },
  {
    title: "QA & Testing",
    heading: "Precision at every step",
    subHeading: "Ensuring quality, reliability, and performance.",
    dark: false,
    image: "/card-image-new/testing.svg",
  },
  {
    title: "Web Development",
    heading: "Engineering the future",
    subHeading: "Building fast, scalable platforms.",
    dark: true,
    image: "/card-image-new/web-dev.svg",
  },
  {
    title: "VR/AR Technology",
    heading: "Beyond imagination",
    subHeading: "Creating immersive digital worlds.",
    dark: false,
    image: "/card-image-new/vr-ar.svg",
  },
  {
    title: "iOS Application",
    heading: "Seamless Apple experience",
    subHeading: "Building high-performance apps for iPhone & iPad.",
    dark: true,
    image: "/card-image-new/ios-application.svg",
  },
  {
    title: "Android Application",
    heading: "Power in every device",
    subHeading: "Developing scalable apps for Android ecosystems.",
    dark: false,
    image: "/card-image-new/Mobile wireframe-.svg",
  },
  {
    title: "Automation",
    heading: "Smarter, faster workflows",
    subHeading: "Streamlining processes with intelligent automation.",
    dark: true,
    image: "/card-image-new/robo.svg",
  },
];


export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className=" text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pb-12 text-center text-black font-bold leading-tight tracking-tight text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px]"
          >
            Services
          </motion.h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-3xl p-8 sm:p-10 flex flex-col  ${
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
              <span className={step.dark ? "text-gray-300" : "text-gray-500"}>
                {step.subHeading}
              </span>
            </h3>

            {/* Illustration (fixed height for alignment) */}
            <div className="mt-auto flex justify-center items-center h-[300px] py-6">
              <img
                src={step.image}
                alt={step.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
