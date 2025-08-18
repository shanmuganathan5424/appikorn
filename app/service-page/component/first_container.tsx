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

  var isBigScreen = useMediaQuery({ minWidth: 1800 });

  return (
    <>
      <div className="w-full h-[900px] bg-[url('/first_container/big_screen1.png')] relative bg-center bg-cover mx-auto overflow-hidden mob_s:h-[520px] md:h-[520px] lg:h-[680px] lg:py-10 lg_big:h-[900px] xl:h-[900px] big:h-[1000px] big_1:bg-purple1 big_2:h-[1000px]">
        {/* Images */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full h-[840px] flex items-center justify-between text-4xl lg:h-[640px] lg_big:h-[840px] xl:h-[840px] big:h-[840px] big_1:h-[1000px] big_2:h-[1000px]"
        >
          <Image
            className="h-[800px] w-[580px] absolute flex items-center justify-between -left-44 top-20 rounded-2xl mob_s:hidden mob_m:hidden small:hidden lg:block lg:h-[600px] lg:w-[440px] lg_small:w-[450px] lg_big:h-[800px] lg_big:w-[500px] xl:h-[800px] xl:w-[500px] xl_small:h-[700px] xl_small:w-[500px] big:h-[880px] big:w-[560px] biggy:h-[880px] biggy:w-[520px] biggy:-left-20 big_0:h-[880px] big_0:w-[540px] big_1:h-[900px] big_1:w-[540px] big_1:left-0 big_11:w-[540px] big_2:h-[900px] big_2:w-[560px]"
            src={Image1}
            alt="Image1"
          ></Image>
          <Image
            className="h-[800px] w-[580px] absolute flex items-center justify-between -right-44 top-20 rounded-2xl mob_s:hidden mob_m:hidden small:hidden md:hidden lg:block lg:h-[600px] lg:w-[440px] lg_small:w-[450px] lg_big:h-[800px] lg_big:w-[500px] xl:h-[800px] xl:w-[500px] xl_small:h-[700px] xl_small:w-[500px] big:h-[880px] big:w-[560px] biggy:h-[880px] biggy:w-[520px] biggy:-right-20 big_0:h-[880px] big_0:w-[540px] big_1:h-[900px] big_1:w-[540px] big_1:right-0 big_11:w-[540px] big_2:h-[900px] big_2:w-[560px]"
            src={Image2}
            alt="Image2"
          ></Image>
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 pt-10 mob_s:justify-start md:pt-0 md:space-y-1 lg:pt-20 xl_small:pt-50 lapl:pt-40 big_2:justify-start big_2:pt-45"
        >
          <div className="flex flex-row text-[22px] items-center justify-center space-x-3 text-[#9EA3B5] mob_s:text-[12px] md:text-[14px] lg:w-[560px] xl:text-[19px] xl:w-[680px] big_1:w-[680px] big_1:text-[21px] big_2:w-[740px] big_2:text-[24px]">
            <p>Product Strategy</p>
            <p>.</p>
            <p>Design & Development</p>
            <p>.</p>
            <p>Automations & Support</p>
          </div>
          <div className="text-[64px] leading-[76px] font-normal text-bold text-white pb-4 mob_s:text-[30px] md:text-[44px] xl:text-[56px] big_1:text-[62px] big_1:leading-[86px] big_2:text-[66px]">
            <p>Unlock the power of</p>
            <p>imagination with</p>
            <p>Appikorn</p>
          </div>
          <div className="flex flex-row space-x-8 text-[#FFD700] text-[20px] mob_s:text-[12px] md:text-[16px] xl:text-[18px] big_1:text-[21px] big_2:text-[24px]">
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
            <div className="flex flex-row bg-[#FFD700] h-[62px] w-[200px] rounded-full items-center justify-center space-x-2 p-3 mob_s:h-[45px] mob_s:w-[140px] lg:h-[50px] lg:w-[160px] xl:h-[62px] xl:w-[200px] ">
              <button className="text-2xl text-black font-medium flex pb-1 mob_s:text-[16px] lg:text-base xl:text-2xl">
                contact us
              </button>
              <div className="bg-black h-10 w-10 flex justify-center items-center rounded-full mob_s:h-8 mob_s:w-8 small:h-8 small:w-8 big_1:w-12 big_1:h-12">
                <PhoneIcon className="w-5 h-5 text-[#FFD700] mob_s:h-4 mob_s:w-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 big_1:w-6 big_1:h-6" />
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
          className="absolute bottom-12 left-68 mob_s:hidden md:block md:left-8 lg:left-41 lg_small:left-50 lg_big:left-36 xl:left-42 xl:bottom-15 xl_small:left-52 big:left-51 biggy:left-63 big_0:left-77 big_0:bottom-20 big_1:left-103 big_11:left-116 big_2:left-126"
        >
          <div className="bg-white w-[974px] h-[92px] rounded-full text-black flex flex-row items-center justify-around px-8 md:h-[64px] md:w-[700px] lg_big:w-[900px] lg_big:h-[92px] xl:w-[944px] xl:h-[92px] xl_small:w-[922px] big:w-[984px] big_0:w-[984px] big_0:h-[100px] big_1:w-[984px] big_1:h-[100px]">
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg_big:h-12 lg_big:w-12 xl:h-12 xl:w-12 big_1:h-14 big_1:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px]  lg_big:h-[30px] lg_big:w-[30px] xl:h-[30px] xl:w-[30px] big_1:h-[40px] big_1:w-[34px]"
                  src={Gurantee}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg_big:text-[16px] xl:text-[16px] big_1:text-[20px]">
                <p>Quality</p>
                <p>Assurance</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg_big:h-12 lg_big:w-12 xl:h-12 xl:w-12 big_1:h-14 big_1:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg_big:h-[30px] lg_big:w-[30px] xl:h-[30px] xl:w-[30px] big_1:h-[40px] big_1:w-[34px]"
                  src={Clock}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg_big:text-[16px] xl:text-[16px] big_1:text-[20px]">
                <p>Fast</p>
                <p>Turnaround</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg_big:h-12 lg_big:w-12 xl:h-12 xl:w-12 big_1:h-14 big_1:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg_big:h-[30px] lg_big:w-[30px] xl:h-[30px] xl:w-[30px] big_1:h-[40px] big_1:w-[34px]"
                  src={MapPin}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg_big:text-[16px] xl:text-[16px] big_1:text-[20px]">
                <p>Local US</p>
                <p>Professional</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center md:h-10 md:w-10 lg_big:h-12 lg_big:w-12 xl:h-12 xl:w-12 big_1:h-14 big_1:w-14">
                <Image
                  className="h-[30px] w-[30px] md:h-[20px] md:w-[20px] lg_big:h-[30px] lg_big:w-[30px] xl:h-[30px] xl:w-[30px] big_1:h-[40px] big_1:w-[34px]"
                  src={Calendar}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] md:text-[14px] lg_big:text-[16px] xl:text-[16px] big_1:text-[20px]">
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
