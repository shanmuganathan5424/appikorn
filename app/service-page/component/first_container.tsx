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

  return (
    <>
      <div className="w-full h-[900px] bg-[url('/first_container/big_screen1.png')] relative bg-center bg-cover mx-auto overflow-hidden lg:h-[680px]">
        {/* Images */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full h-[840px] flex items-center justify-between text-4xl lg:h-[640px]"
        >
          <Image
            className="h-[800px] w-[580px] absolute flex items-center justify-between -left-44 top-0  rounded-2xl lg:h-[600px] lg:w-[400px]"
            src={Image1}
            alt="Image1"
          ></Image>
          <Image
            className="h-[800px] w-[580px] absolute flex items-center justify-between -right-44 top-0 rounded-2xl lg:h-[600px] lg:w-[400px]"
            src={Image2}
            alt="Image2"
          ></Image>
        </motion.div>
        {/* Center Content */}
        <motion.div
          ref={centerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={centerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="flex flex-row text-[22px] space-x-3 text-[#9EA3B5] lg:text-[16px] lg:w-[550px]">
            <p>Product Strategy</p>
            <p>.</p>
            <p>Design & Development</p>
            <p>.</p>
            <p>Automations & Support</p>
          </div>
          <div className="text-[64px] leading-[76px] font-normal text-bold text-white pb-4 lg:text-[16px]">
            <p>Unlock the power of</p>
            <p>imagination with</p>
            <p>Appikorn</p>
          </div>
          <div className="flex flex-row space-x-8 text-[#FFD700] text-[20px]">
            <div className="flex flex-row items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
                className="w-6 h-6"
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
          <div className="pt-7">
            <div className="flex flex-row bg-[#FFD700] h-[62px] w-[200px] rounded-full items-center justify-center space-x-2 p-3">
              <button className="text-2xl text-black font-medium flex pb-1">
                contact us
              </button>
              <div className="bg-black h-10 w-10 flex justify-center items-center rounded-full">
                <PhoneIcon className="w-5 h-5 text-[#FFD700]" />
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
          className="absolute bottom-12 left-68 lg:left-39"
        >
          <div className="bg-white w-[974px] h-[92px] rounded-full text-black flex flex-row items-center justify-center lg:h-[64px] lg:w-[700px]">
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center lg:h-10 lg:w-10">
                <Image
                  className="h-[30px] w-[30px] lg:h-[20px] lg:w-[20px]"
                  src={Gurantee}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] lg:text-[14px]">
                <p>Quality</p>
                <p>Assurance</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center lg:h-10 lg:w-10">
                <Image
                  className="h-[30px] w-[30px] lg:h-[20px] lg:w-[20px]"
                  src={Clock}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] lg:text-[14px]">
                <p>Fast</p>
                <p>Turnaround</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center lg:h-10 lg:w-10">
                <Image
                  className="h-[30px] w-[30px] lg:h-[20px] lg:w-[20px]"
                  src={MapPin}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] lg:text-[14px]">
                <p>Local US</p>
                <p>Professional</p>
              </div>
            </div>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-white via-[#4F66B7] to-white"></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center lg:h-10 lg:w-10">
                <Image
                  className="h-[30px] w-[30px] lg:h-[20px] lg:w-[20px]"
                  src={Calendar}
                  alt="Gurantee"
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F] lg:text-[14px]">
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
