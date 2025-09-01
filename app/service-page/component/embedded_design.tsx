"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInParagraph = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                 leading-relaxed sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[45px] 
                 text-justify mb-6 break-words"
    >
      {children}
    </motion.p>
  );
};

const EmbeddedDesign = () => {
  return (
    <div className="bg-[#F8F8FF] text-black ">
      {/* Title */}
      <h1
        className="text-black text-center
                     text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[58px] 
                     font-bold leading-snug sm:leading-tight lg:leading-[71px] 
                     tracking-tight pb-6 sm:pb-8 md:pb-10"
      >
        Embedded Design
      </h1>

      {/* Content */}
      <div className="font-normal space-y-6">
        <FadeInParagraph>
          Embedded Design focuses on developing specialized computing systems
          that are integrated directly into devices to perform dedicated
          functions with high efficiency and reliability. Unlike general-purpose
          computers, embedded systems are tailored to specific tasks, combining
          custom hardware and software to optimize performance, minimize power
          consumption, and ensure precise operation. These designs are the
          backbone of modern electronics, enabling everything from smart
          appliances and wearable devices to industrial machinery and medical
          instruments to operate seamlessly and intelligently.
        </FadeInParagraph>

        <FadeInParagraph>
          The scope of Embedded Design extends across multiple industries,
          driving innovation in areas like IoT, robotics, automotive systems,
          and automation. By enabling real-time processing, intelligent control,
          and seamless integration, embedded systems not only enhance
          functionality but also improve safety, usability, and overall user
          experience. As technology advances, Embedded Design continues to
          evolve, empowering devices to be smarter, more connected, and more
          responsive to the needs of both consumers and industries.
        </FadeInParagraph>
      </div>
    </div>
  );
};

export default EmbeddedDesign;
