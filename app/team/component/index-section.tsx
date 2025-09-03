"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutAgency() {
  const title = "Empowering Teams with Tech.";

  // Animation for title letters
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  // Card animation (from top)
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // List of team images
  const teamImages = [
    "/dummy-image/dummy-6.webp",
    "/dummy-image/dummy-2.webp",
    "/dummy-image/dummy-3.webp",
    "/dummy-image/dummy-4.webp",
    "/dummy-image/dummy-5.webp",
    "/dummy-image/dummy-6.webp",
  ];

  return (
    <section
      className="bg-gray-50 text-gray-900 py-16"
      aria-labelledby="about-agency-title"
    >
      {/* Heading Section */}
      <header className="text-center space-y-6 px-6 md:px-12 mb-12">
        <h2
          id="about-agency-title"
          className="text-[24px] sm:text-[28px] md:text-5xl font-bold leading-tight flex flex-wrap justify-center"
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className={char === " " ? "mx-1" : ""}
              aria-hidden="true"
            >
              {char}
            </motion.span>
          ))}
        </h2>

        <p className="text-[14px] sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We pride ourselves on building powerful software solutions that
          accelerate growth, optimize workflows, and drive innovation. Our team
          constantly challenges assumptions, adapts to new technologies, and
          delivers scalable products that empower businesses to perform at their
          best every day.
        </p>
      </header>

      {/* Team Photos */}
      <div className="w-full bg-black py-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12 w-full max-w-6xl">
          {teamImages.map((src, i) => (
            <motion.figure
              key={i}
              className="rounded-lg overflow-hidden w-full h-72 bg-gray-800"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={src}
                alt={`Portrait of team member ${i + 1}, contributing to software innovation.`}
                width={400}
                height={400}
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover w-full h-full"
              />
              <figcaption className="sr-only">Team member {i + 1}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Supporting Statement */}
      <div className="text-center mt-12 px-6 md:px-12">
        <p className="text-[14px] sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
          With collaboration, creativity, and technology at the heart of our
          process, our software team thrives on solving complex challenges. We
          leverage diverse expertise and agile practices to boost productivity,
          inspire innovation, and deliver high-impact solutions that help our
          clients stay ahead. With human-centric design at the core of our
          principles, we depend on our team’s varied perspectives and life
          experiences to help produce forward-thinking products for our clients.
        </p>
      </div>
    </section>
  );
}
