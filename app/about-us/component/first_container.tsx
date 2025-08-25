"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
 <div className="bg-purple1 w-full h-screen rounded-br-[80px] md:rounded-br-[200px] xl:rounded-br-[300px] flex items-center overflow-hidden">
  <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 gap-6 sm:gap-10 lg:gap-16 max-w-screen-xl mx-auto w-full">

    {/* Text Section */}
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 max-w-full md:max-w-2xl text-center md:text-left w-full md:w-1/2"
    >
      {/* Heading */}
      <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight font-bold">
        <p>Innovate with</p>
        <div className="h-[32px] sm:h-[45px] md:h-[65px] xl:h-[80px] overflow-hidden">
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
      <p className="text-sm sm:text-base md:text-lg xl:text-xl font-normal leading-relaxed max-w-prose mx-auto md:mx-0">
        We collaborate with next-gen founders and digital-first teams to
        turn visionary ideas into powerful software solutions. Scalable.
        Secure. Future-ready.
      </p>

      {/* Button */}
      <Link href="/contact" passHref>
        <button
          aria-label="Start the conversation"
          className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-[#FFEA00] rounded-full text-sm sm:text-base md:text-lg xl:text-xl hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out w-full sm:w-[80%]  mx-auto md:mx-0"
        >
          Let’s Start the Conversation →
        </button>
      </Link>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full md:w-1/2 flex justify-center md:justify-end"
    >
      <Image
        src="/about/office_image.svg"
        alt="Office Image"
        width={700}
        height={700}
        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
        priority
      />
    </motion.div>
  </div>
</div>

  );
}
