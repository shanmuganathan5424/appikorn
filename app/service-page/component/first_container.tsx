"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { useMediaQuery } from "react-responsive";

// Assets
import Image1 from "../../../public/first_container/Image 1.png";
import Image2 from "../../../public/first_container/Image 2.png";
import Gurantee from "../../../public/first_container/Guarantee.svg";
import Clock from "../../../public/first_container/Clock.svg";
import MapPin from "../../../public/first_container/Map-pin.svg";
import Calendar from "../../../public/first_container/Calendar.svg";

export default function FirstContainer() {
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: centerRef, inView: centerInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: badgeRef, inView: badgeInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const isBigScreen = useMediaQuery({ minWidth: 1800 });

  // Common smooth transition config
  const smoothTransition = {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full h-[900px] bg-[url('/first_container/big_screen1.png')] relative bg-center bg-cover mx-auto overflow-hidden mob_s:h-[520px] md:h-[700px] lg:h-[750px] lg:py-10 lapl:h-[1000px] desktop:h-[1150px]"
    >
      {/* Side Images */}
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, y: 100 }}
        animate={imgInView ? { opacity: 1, y: 20 } : {}}
        transition={smoothTransition}
        className="w-full h-[840px] flex items-center justify-between lg:h-[640px] lapl:h-[840px] desktop:h-[1000px]"
      >
        <Image
          className="hidden absolute -left-44 top-10 rounded-2xl lg:flex lg:h-[600px] lg:w-[440px] lapl:h-[800px] lapl:w-[560px] desktop:h-[900px] desktop:w-[560px] desktop:left-0"
          src={Image1}
          alt="Team working on embedded product strategy and design"
          priority
        />
        <Image
          className="hidden absolute -right-44 top-10 rounded-2xl lg:flex lg:h-[600px] lg:w-[440px] lapl:h-[800px] lapl:w-[560px] desktop:h-[900px] desktop:w-[560px] desktop:right-0"
          src={Image2}
          alt="Software development and automation process illustration"
          priority
        />
      </motion.div>

      {/* Decorative corners */}
      {isBigScreen && (
        <div className="w-full z-0">
          <div className="absolute bottom-0 left-0 w-[26%] h-[5%] bg-white clip-top-left-notch"></div>
          <div className="absolute bottom-0 right-0 w-[26%] h-[5%] bg-white clip-top-right-notch"></div>
        </div>
      )}

      {/* Center Content */}
      <motion.div
        ref={centerRef}
        initial={{ opacity: 0, y: 80 }}
        animate={centerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...smoothTransition, delay: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 pt-20 md:pt-0"
      >
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={centerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...smoothTransition, delay: 0.3 }}
          className="flex flex-row text-[22px] items-center justify-center space-x-3 text-[#9EA3B5] mob_s:text-[12px] md:text-[14px] lg:w-[560px] lapl:text-[19px] lapl:w-[680px] desktop:w-[740px] desktop:text-[24px]"
        >
          Product Strategy <span aria-hidden="true">•</span> Design & Development{" "}
          <span aria-hidden="true">•</span> Automations & Support
        </motion.p>

        {/* Heading */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={centerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...smoothTransition, delay: 0.5 }}
          className="text-[64px] leading-[76px] font-bold text-white pb-4 mob_s:text-[30px] md:text-[44px] lapl:text-[56px] big_2:text-[66px]"
        >
          Unlock the power of <br /> imagination with <br /> <span className="text-[#FFD700]">Appikorn</span>
        </motion.h1>

        {/* Features List */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={centerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...smoothTransition, delay: 0.7 }}
          className="flex flex-row space-x-8 text-[#FFD700] text-[20px] mob_s:text-[12px] md:text-[16px] lapl:text-[18px] big_2:text-[24px] font-medium"
        >
          <li className="flex flex-row items-center justify-center space-x-2">
            <span aria-hidden="true">✔</span> Agile Delivery
          </li>
          <li className="flex flex-row items-center justify-center space-x-2">
            <span aria-hidden="true">✔</span> End-to-End Support
          </li>
        </motion.ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={centerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ ...smoothTransition, delay: 0.9 }}
          className="py-7"
        >
          <button
            aria-label="Contact Appikorn team"
            className="flex flex-row bg-[#FFD700] h-[62px] w-[200px] rounded-full items-center justify-center space-x-2 p-3 mob_s:h-[45px] mob_s:w-[140px] md:h-[50px] md:w-[150px] lg:h-[50px] lg:w-[160px] lapl:h-[62px] lapl:w-[200px] hover:bg-yellow-400 transition"
          >
            <span className="text-2xl text-black font-medium mob_s:text-[16px] lg:text-base xl:text-2xl">
              Contact Us
            </span>
            <span className="bg-black h-10 w-10 flex justify-center items-center rounded-full mob_s:h-8 mob_s:w-8">
              <PhoneIcon className="w-5 h-5 text-[#FFD700]" />
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
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg:w-12 lg:h-12 lapl:h-12 lapl:w-12 desktop:h-14 desktop:w-14">
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
