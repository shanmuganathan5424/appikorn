"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Services data
const services = [
  {
    icon: "/service-icon/cloud.svg",
    title: "Cloud Services",
    description: "Delivering secure and scalable cloud solutions.",
  },
  {
    icon: "/service-icon/design.svg",
    title: "UI/UX Designer",
    description: "Crafting intuitive and engaging user experiences.",
  },
  {
    icon: "/service-icon/product.svg",
    title: "Product Design",
    description: "Designing products users love.",
  },
  {
    icon: "/service-icon/qa.svg",
    title: "QA & Testing",
    description: "Ensuring quality, reliability, and performance.",
  },
  {
    icon: "/service-icon/dev.svg",
    title: "Web Development",
    description: "Building fast, scalable platforms.",
  },
  {
    icon: "/service-icon/vr.svg",
    title: "VR/AR Technology",
    description: "Creating immersive digital worlds.",
  },
];

export default function Card() {
  return (
    <section className=" py-10 sm:py-16 md:py-20">
      <div className="w-full   mx-auto">
        <div className="pb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-purple1 text-left font-bold leading-tight tracking-tight text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px]"
          >
            Services
          </motion.h1>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-3
            gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20
          "
        >
          {services.map((service, index) => (
            <FadeInCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}


function FadeInCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ scale: 1.03 }}
      className="
        group
        relative
        flex flex-col
        items-center
        justify-between
        bg-gray-100
        rounded-2xl
        shadow-md
        p-8
        w-full
        h-full
        max-w-sm
        mx-auto
        border border-gray-200
        transition-all duration-500
        hover:shadow-xl
      "
    >
      {/* Subtle gradient hover overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center text-center flex-1">
        <div
          className="
            w-16 h-16 md:w-20 md:h-20
            flex items-center justify-center
            rounded-full bg-gradient-to-tr from-purple-100 via-pink-100 to-indigo-100
            shadow-inner
            mb-6
            group-hover:scale-110
            transition-transform duration-500
          "
        >
          <img
            src={icon}
            alt={`${title} Icon`}
            className="w-9 h-9 md:w-10 md:h-10"
          />
        </div>

        <motion.h3
          className="
            text-[22px] md:text-[24px]
            font-bold
            text-gray-900
            transition-colors duration-300
            group-hover:text-purple-600
          "
        >
          {title}
        </motion.h3>

        <motion.p
          className="
            text-gray-600
            mt-3
            text-[16px] leading-relaxed
            transition-colors duration-300
            group-hover:text-gray-800
          "
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}






