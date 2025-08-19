"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "../../../public/first_container/Image 1.png";
import Image2 from "../../../public/first_container/Image 2.png";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Gurantee from "../../../public/first_container/Guarantee.svg";
import Clock from "../../../public/first_container/Clock.svg";
import MapPin from "../../../public/first_container/Map-pin.svg";
import Calendar from "../../../public/first_container/Calendar.svg";
import { useMediaQuery } from "react-responsive";

export default function FirstContainer() {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: centerRef, inView: centerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: badgeRef, inView: badgeInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isBigScreen = useMediaQuery({ minWidth: 1800 });

  return (
    <>
      <div className="w-full h-[900px] bg-[url('/first_container/big_screen1.png')] relative bg-center bg-cover mx-auto overflow-hidden mob_s:h-[520px] md:h-[700px] lg:h-[750px] lg:py-10 lapl:h-[1000px] desktop:h-[1150px]">
        {/* Images */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full h-[840px] flex items-center justify-between text-4xl lg:h-[640px] lapl:h-[840px] desktop:h-[1000px]"
        >
          <Image
            className="hidden h-[800px] w-[580px] absolute items-center justify-between -left-44 top-20 rounded-2xl lg:flex lg:h-[600px] lg:w-[440px] lapl:h-[800px] lapl:w-[560px] desktop:h-[900px] desktop:w-[560px] desktop:left-0"
            src={Image1}
            alt="Image1"
          />
          <Image
            className="hidden h-[800px] w-[580px] absolute items-center justify-between -right-44 top-20 rounded-2xl lg:flex lg:h-[600px] lg:w-[440px] lapl:h-[800px] lapl:w-[560px] desktop:h-[900px] desktop:w-[560px] desktop:right-0"
            src={Image2}
            alt="Image2"
          />
        </motion.div>

        {isBigScreen ? (
          <div className="w-full z-0">
            {/* Bottom Left Corner */}
            <div className="absolute bottom-0 left-0 w-[26%] h-[5%] bg-white clip-top-left-notch"></div>

            {/* Bottom Right Corner */}
            <div className="absolute bottom-0 right-0 w-[26%] h-[5%] bg-white clip-top-right-notch"></div>
          </div>
        ) : null}

        {/* Center Content */}
        <motion.div
          ref={centerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={centerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 pt-20 md:pt-0"
        >
          <div className="flex flex-row text-[22px] items-center justify-center space-x-3 text-[#9EA3B5] mob_s:text-[12px] md:text-[14px] lg:w-[560px] lapl:text-[19px] lapl:w-[680px] desktop:w-[740px] desktop:text-[24px]">
            <p>Product Strategy</p>
            <p>.</p>
            <p>Design & Development</p>
            <p>.</p>
            <p>Automations & Support</p>
          </div>
          <div className="text-[64px] leading-[76px] font-normal text-bold text-white pb-4 mob_s:text-[30px] md:text-[44px] lapl:text-[56px] big_2:text-[66px]">
            <p>Unlock the power of</p>
            <p>imagination with</p>
            <p>Appikorn</p>
          </div>
          <div className="flex flex-row space-x-8 text-[#FFD700] text-[20px] mob_s:text-[12px] md:text-[16px] lapl:text-[18px] big_2:text-[24px]">
            <div className="flex flex-row items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p> Agile Delivery</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>End-to-End Support</p>
            </div>
          </div>
          <div className="py-7">
            <div className="flex flex-row bg-[#FFD700] h-[62px] w-[200px] rounded-full items-center justify-center space-x-2 p-3 mob_s:h-[45px] mob_s:w-[140px] md:h-[50px] md:w-[150px] lg:h-[50px] lg:w-[160px] lapl:h-[62px] lapl:w-[200px] ">
              <button className="text-2xl text-black font-medium flex pb-1 mob_s:text-[16px] lg:text-base xl:text-2xl">
                contact us
              </button>
              <div className="bg-black h-10 w-10 flex justify-center items-center rounded-full mob_s:h-8 mob_s:w-8 small:h-8 small:w-8 md:w-10 md:h-10">
                <PhoneIcon className="w-5 h-5 text-[#FFD700] mob_s:h-4 mob_s:w-4 md:w-5 md:h-5 lapl:w-5 lapl:h-5 desktop:w-6 desktop:h-6" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Down Element */}
        <motion.div
          ref={badgeRef}
          initial={{ opacity: 0, y: 60 }}
          animate={badgeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-12 mob_s:hidden md:block md:left-8 lg:left-33 lapl:left-62 lapl:bottom-20 desktop:left-200"
        >
          <div className="bg-white w-[974px] h-[92px] rounded-full text-black flex flex-row items-center justify-around px-8 md:h-[64px] md:w-[700px] lg:w-[760px] lg:h-[80px] lg:px-4 lapl:w-[944px] lapl:h-[92px] desktop:w-[984px] desktop:h-[100px]">
            <div className="w-[200px] flex items-center justify-center space-x-4 ">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg:w-12 lg:h-12 lapl:h-12 lapl:w-12 desktop:h-14 desktop:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px] lapl:h-[30px] lapl:w-[30px] desktop:h-[40px] desktop:w-[34px]"
                  src={Gurantee}
                  alt="Gurantee"
                />
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lapl:text-[16px] desktop:text-[20px]">
                <p>Quality</p>
                <p>Assurance</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4 ">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg:h-12 lg:w-12 lapl:h-12 lapl:w-12 desktop:h-14 desktop:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px] lapl:h-[30px] lapl:w-[30px] desktop:h-[40px] desktop:w-[34px]"
                  src={Clock}
                  alt="Clock"
                />
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg:text-[16px] lapl:text-[16px] desktop:text-[20px]">
                <p>Fast</p>
                <p>Turnaround</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4 ">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg:h-12 lg:w-12 lapl:h-12 lapl:w-12 desktop:h-14 desktop:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px] lapl:h-[30px] lapl:w-[30px] desktop:h-[40px] desktop:w-[34px]"
                  src={MapPin}
                  alt="MapPin"
                />
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg:text-[16px] lapl:text-[16px] desktop:text-[20px]">
                <p>Local US</p>
                <p>Professional</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg:h-12 lg:w-12 lapl:h-12 lapl:w-12 desktop:h-14 desktop:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg:h-[25px] lg:w-[25px] lapl:h-[30px] lapl:w-[30px] desktop:h-[40px] desktop:w-[34px]"
                  src={Calendar}
                  alt="Calendar"
                />
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg:text-[16px] lapl:text-[16px] desktop:text-[20px]">
                <p>Flexible</p>
                <p>Appointments</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
