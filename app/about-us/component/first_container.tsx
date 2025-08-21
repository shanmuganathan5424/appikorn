"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="bg-purple1 rounded-br-[100px] md:rounded-br-[200px] xl:rounded-br-[300px]">
      <div className="flex flex-col xl:flex-row items-center xl:items-start px-4 sm:px-8 md:px-12 py-20 md:py-16 xl:py-20 gap-8 xl:gap-16 max-w-screen-xl mx-auto w-full">

        {/* Text Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 max-w-full md:max-w-xl text-center xl:text-left w-full"
        >
          {/* Heading */}
          <div className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl tracking-tight leading-tight font-semibold">
            <p>Innovate with</p>
            <div className="h-[38px] sm:h-[50px] md:h-[65px] xl:h-[70px] overflow-hidden">
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

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-prose mx-auto xl:mx-0">
            We collaborate with next-gen founders and digital-first teams to
            turn visionary ideas into powerful software solutions. Scalable.
            Secure. Future-ready.
          </p>

          {/* Button */}
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 border border-[#FFEA00] rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out w-full sm:w-fit mx-auto xl:mx-0 whitespace-normal break-words text-center"
          >
            Let’s Start the Conversation →
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg"
        >
          <Image
            src="/about/office_image.svg"
            alt="Office Image"
            width={800}
            height={800}
            className="w-full h-auto"
            priority
          />
        </motion.div>

      </div>
    </div>
  );
}
