"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Your services data
const services = [
  {
    icon: "/service-icon/cloud.svg",
    title: "Cloud Services",
    description: "Delivering secure and scalable cloud solutions.",
  },
  {
    icon: "/service-icon/cloud.svg",
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
    <section className="bg-gray-50 py-10 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-40 max-w-[1720px] mx-auto">
        <div className="pb-10 text-center">
          <h1 className="text-purple1 font-bold leading-tight tracking-tight text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px]">
            Services
          </h1>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            sm:gap-8
            md:gap-10
            lg:gap-14
            xl:gap-16
            2xl:gap-20
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

// Card animation wrapper
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="
        flex flex-col items-center
        bg-white
        rounded-2xl
        shadow-xl
        p-6
        sm:p-8
        md:p-10
        xl:p-12
        transition-all duration-500
      "
    >
      <div
        className="
          w-[64px] h-[64px]
          sm:w-[72px] sm:h-[72px]
          md:w-[80px] md:h-[80px]
          xl:w-[88px] xl:h-[88px]
          flex items-center justify-center
          rounded-full bg-white shadow-md mb-4
        "
      >
        <img
          src={icon}
          alt={`${title} Icon`}
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
      <h3
        className="
          text-[20px]
          sm:text-[22px]
          md:text-[24px]
          lg:text-[27px]
          font-semibold
          text-gray-900
          text-center
        "
      >
        {title}
      </h3>
      <p
        className="
          text-gray-600
          text-center
          mt-2
          text-[15px]
          sm:text-[16.5px]
          md:text-[18px]
          xl:text-[19.5px]
        "
      >
        {description}
      </p>
    </motion.div>
  );
}
