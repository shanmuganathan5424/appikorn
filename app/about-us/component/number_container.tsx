"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type AnimatedNumberProps = {
  min: number;
  max: number;
};

const AnimatedNumber = ({ min, max }: AnimatedNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const randomTarget = Math.floor(Math.random() * (max - min + 1)) + min;
      const duration = 2000;
      const frameRate = 30;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let currentFrame = 0;

      const interval = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const value = Math.floor(progress * randomTarget);
        setDisplayNumber(value);

        if (currentFrame >= totalFrames) {
          clearInterval(interval);
          setDisplayNumber(randomTarget);
        }
      }, 1000 / frameRate);
    }
  }, [inView, min, max]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[140.05px] h-[99.29px] text-[50px] font-bold flex flex-col justify-center items-center"
    >
      {displayNumber} +
    </motion.p>
  );
};

export default function NumberContainer() {
  return (
    <div className="flex flex-row justify-around text-black pt-20 pb-10">
      <div className="flex flex-col justify-center items-center">
        <AnimatedNumber min={10} max={100} />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[20px] font-semibold text-center"
        >
          PROJECT DELIVERED
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="bg-[#00000080] w-1 h-30"
      />
      <div className="flex flex-col justify-center items-center">
        <AnimatedNumber min={15} max={30} />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[20px] font-semibold text-center"
        >
          YEARS OF EXPERIENCE
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="bg-[#00000080] w-1 h-30"
      />

      <div className="flex flex-col justify-center items-center">
        <AnimatedNumber min={20} max={200} />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[20px] font-semibold text-center"
        >
          SATISFIED CLIENTS ON 10 COUNTRIES
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="bg-[#00000080] w-1 h-30"
      />

      <div className="flex flex-col justify-center items-center">
        <AnimatedNumber min={10} max={30} />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[20px] font-semibold text-center"
        >
          TECH EXPERTS
        </motion.p>
      </div>
    </div>
  );
}
