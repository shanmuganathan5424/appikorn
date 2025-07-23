"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="pb-10">
          <h1 className="text-purple1 font-bold leading-[71.22px] tracking-[-0.49px] text-[58px]">
            Services
          </h1>
        </div>
        <div className="grid grid-cols-1 small:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 👇 Fade-in animation wrapper for each card
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
      className="flex flex-col items-center gap-[10px] w-full p-6 bg-white rounded-2xl drop-shadow-2xl"
    >
      <div className="w-[67px] h-[67px] mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-4">
        <img src={icon} alt={`${title} Icon`} className="w-8 h-8" />
      </div>
      <h3 className="text-[27.36px] font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 text-center text-[19.55px]">
        {description}
      </p>
    </motion.div>
  );
}
