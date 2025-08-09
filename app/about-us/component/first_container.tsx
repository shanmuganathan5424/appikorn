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
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-purple1 rounded-br-[150px] md:rounded-br-[200px] lg:rounded-br-[300px]">
      <div className="flex flex-col justify-start items-start lg:items-start px-4 sm:px-8 py-10 lg:flex-col lapl:flex-row">
        {/* Text Column */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-6 pl-10 pb-10 sm:space-y-8 lg:space-y-10 justify-center"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[69.27px] tracking-tight leading-tight font-semibold w-[500px]">
            <p>Innovate with</p>
            <div className="h-[50px] sm:h-[65px] lg:h-[75px] overflow-hidden">
              <AnimatePresence mode="sync">
                <motion.p
                  key={wordList[index]}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[#FFEA00]"
                >
                  {wordList[index]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p>Build for Tomorrow</p>
          </div>

          <p className="text-base sm:text-lg lg:text-[22.82px] font-normal leading-relaxed max-w-xl">
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
          // className="h-auto object-contain mt-8 pr-8 lg:mt-0"
          height={800}
          width={1000}
        />
      </div>
    </div>
  );
}
