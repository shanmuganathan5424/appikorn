"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneIcon } from "@heroicons/react/24/solid";

// Assets
import Image1 from "../../../public/first_container/Image 1.png";
import Image2 from "../../../public/first_container/Image 2.png";
import Gurantee from "../../../public/first_container/Guarantee.svg";
import Clock from "../../../public/first_container/Clock.svg";
import MapPin from "../../../public/first_container/Map-pin.svg";
import Calendar from "../../../public/first_container/Calendar.svg";
import Vector from "../../../public/first_container/Vector.svg";

export default function FirstContainer() {
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: centerRef, inView: centerInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: badgeRef, inView: badgeInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const smoothTransition = {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full bg-black mx-auto overflow-hidden 
                 min-h-[520px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] 
                 lapl:min-h-[1000px] desktop:min-h-[1150px] flex flex-col justify-center"
    >

{/* Glow background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[70%] h-[80%] bg-purple-950/50 rounded-full blur-[100px]" />
      </div>

      {/* Side Images */}
      {/* Left Image */}
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, x: -120 }}
        animate={imgInView ? { opacity: 1, x: 0 } : {}}
        transition={smoothTransition}
        className="absolute hidden lg:block -left-36 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Image
          className="rounded-2xl 
                     lg:h-[500px] lg:w-[380px] 
                     xl:h-[600px] xl:w-[440px] 
                     lapl:h-[800px] lapl:w-[560px] 
                     desktop:h-[900px] desktop:w-[560px]"
          src={Image1}
          alt="Team working on embedded product strategy and design"
          priority
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={imgInView ? { opacity: 1, x: 0 } : {}}
        transition={smoothTransition}
        className="absolute hidden lg:block -right-36 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Image
          className="rounded-2xl 
                     lg:h-[500px] lg:w-[380px] 
                     xl:h-[600px] xl:w-[440px] 
                     lapl:h-[800px] lapl:w-[560px] 
                     desktop:h-[900px] desktop:w-[560px]"
          src={Image2}
          alt="Software development and automation process illustration"
          priority
        />
      </motion.div>

      {/* Background Vector */}
      <Image
        className="absolute bottom-0 left-0 sm:hidden md:block w-full h-auto"
        src={Vector}
        alt="Decorative vector background"
      />

      {/* Center Content */}
      <motion.div
        ref={centerRef}
        initial={{ opacity: 0, y: 80 }}
        animate={centerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...smoothTransition, delay: 0.2 }}
        className="relative flex flex-col items-center justify-center text-center px-4 py-12 gap-y-6"
      >
        {/* Subheading */}
        <motion.p
          className="flex flex-wrap justify-center text-[#9EA3B5] 
                     text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
                     leading-relaxed gap-3"
        >
          Product Strategy <span aria-hidden="true">•</span> Design & Development{" "}
          <span aria-hidden="true">•</span> Automations & Support
        </motion.p>

        {/* Heading */}
        <motion.h1
          id="hero-heading"
          className="font-bold text-white 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                     leading-snug md:leading-[56px] lg:leading-[68px] xl:leading-[76px]"
        >
          Unlock the power of <br /> imagination with <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Appikorn</span>
        </motion.h1>

        {/* Features List */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6 
                     text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-medium 
                     text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
        >
          <li className="flex items-center gap-2">
            <span aria-hidden="true">✔</span> Agile Delivery
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">✔</span> End-to-End Support
          </li>
        </motion.ul>

        {/* CTA Button */}
        <motion.div className="pt-4">
          <button
            aria-label="Contact Appikorn team"
            className="flex flex-row bg-purple-600 rounded-full items-center justify-center gap-2 
                       h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-44 lg:h-16 lg:w-48 
                       transition hover:bg-purple-400"
          >
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black">
              Contact Us
            </span>
            <span className="bg-black flex justify-center items-center rounded-full 
                             h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9">
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Badge */}
      <motion.div
        ref={badgeRef}
        initial={{ opacity: 0, y: 80 }}
        animate={badgeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...smoothTransition, delay: 1 }}
        className="absolute bottom-12 mob_s:hidden md:block left-1/2 -translate-x-1/2 lapl:bottom-20"
      >
        <div className="bg-white w-[974px] h-[92px] rounded-full text-black flex flex-row items-center justify-around px-8 
                        md:h-[64px] md:w-[700px] lg:w-[760px] lg:h-[80px] lg:px-4 
                        lapl:w-[944px] lapl:h-[92px] 
                        desktop:w-[984px] desktop:h-[100px]">
          {[
            { icon: Gurantee, alt: "Quality Guarantee Icon", title: "Quality", subtitle: "Assurance" },
            { icon: Clock, alt: "Fast Delivery Icon", title: "Fast", subtitle: "Turnaround" },
            { icon: MapPin, alt: "Location Icon", title: "Local US", subtitle: "Professional" },
            { icon: Calendar, alt: "Calendar Icon", title: "Flexible", subtitle: "Appointments" },
          ].map((item, idx) => (
            <div key={idx} className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-purple-950 h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg:w-12 lg:h-12 lapl:h-12 lapl:w-12 desktop:h-14 desktop:w-14">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px] lapl:h-[30px] lapl:w-[30px] desktop:h-[40px] desktop:w-[34px]"
                />
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg:text-[16px] lapl:text-[16px] desktop:text-[20px]">
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
