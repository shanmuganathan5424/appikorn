"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FirstContainer() {
  const wordList = ["Confidence", "Purpose", "Boldness", "Energy", "Drive"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordList.length);
    }, 2000); // 2s interval

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-[1440px] h-[775px] bg-purple1 mx-auto rounded-br-[300px]">
        <div className="flex flex-row justify-start relative">
          {/* Text Column */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-10 pl-10 justify-center w-[700px] absolute top-80 h-full"
          >
            <div className="text-[69.27px] tracking-[-0.4px] leading-[68px] w-[640px] font-semibold">
              <p className="">Innovate with</p>
              <div className="h-[75px] relative overflow-hidden">
                <AnimatePresence mode="sync">
                  <motion.p
                    key={wordList[index]}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute text-[#FFEA00]"
                  >
                    {wordList[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className="">Build for Tomorrow</p>
            </div>
            <p className="text-[22.82px] font-normal leading-[29.34px] w-[610px]">
              We collaborate with next-gen founders and digital-first teams to
              turn visionary ideas into powerful software solutions. Scalable.
              Secure. Future-ready.
            </p>
            <div className="w-[337.29779052734375px] h-[50px] border-[0.81px] border-[#FFEA00] rounded-[30.97px] flex items-center justify-center text-[22.82px] text-[#FFEA00] bg-transparent transition-all duration-800 ease-in-out hover:w-[380px] hover:h-[55px] hover:justify-center hover:bg-white hover:text-black hover:border-black hover:text-[25px]">
              Let’s Start the Conversation →
            </div>
          </motion.div>

          {/* Image */}

          <motion.img
            src="/about/office_image.svg"
            alt="Office Image"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-120 top-10"
            height={800}
            width={1026}
          ></motion.img>
        </div>
      </div>
    </>
  );
}
