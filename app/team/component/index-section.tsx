"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutAgency() {
  const title = "Empowering Teams with Tech.";

  // Animation variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // delay per letter
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="bg-gray-50 text-gray-900 py-16">
      {/* Heading Section */}
      <div className="text-center space-y-6 px-6 md:px-12 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight flex flex-wrap justify-center">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className={char === " " ? "mx-1" : ""}
            >
              {char}
            </motion.span>
          ))}
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We pride ourselves on building powerful software solutions that accelerate 
          growth, optimize workflows, and drive innovation. Our team constantly 
          challenges assumptions, adapts to new technologies, and delivers scalable 
          products that empower businesses to perform at their best every day.
        </p>
      </div>

      {/* Team Photos */}
      <div className="w-full bg-black py-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <Image
                src="/dummy-image.jpg"
                alt={`Team member ${i + 1}`}
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Supporting Statement */}
      <div className="text-center mt-12 px-6 md:px-12">
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          With collaboration, creativity, and technology at the heart of our process, 
          our software team thrives on solving complex challenges. We leverage diverse 
          expertise and agile practices to boost productivity, inspire innovation, 
          and deliver high-impact solutions that help our clients stay ahead. With 
          human-centric design at the core of our principles, we depend on our team’s 
          varied perspectives and life experiences to help produce forward-thinking 
          products for our clients.
        </p>
      </div>
    </section>
  );
}