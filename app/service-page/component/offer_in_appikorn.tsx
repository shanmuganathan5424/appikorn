"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Photo1 from "@/public/offer-content/photo1.jpg";
import Photo2 from "@/public/offer-content/photo2.jpg";
import Photo3 from "@/public/offer-content/photo3.jpg";
import Photo4 from "@/public/offer-content/photo4.jpg";
import Photo5 from "@/public/offer-content/photo5.jpg";
import Photo6 from "@/public/offer-content/photo6.jpg";
import Photo7 from "@/public/offer-content/photo7.jpg";

const cards = [
  {
    image: Photo1,
    title: "Embedded Design",
    text: "We specialize in building robust embedded solutions that integrate seamlessly with hardware and software ecosystems. From microcontroller-based devices to IoT-enabled platforms, our designs are optimized for performance and reliability. We prioritize power efficiency, security, and scalability in every project. Our expertise spans automotive, healthcare, consumer electronics, and industrial applications. With Appikorn, businesses get embedded systems that are future-ready and adaptable.",
    alt: "Embedded system design concept illustration",
  },
  {
    image: Photo2,
    title: "UI/UX Design",
    text: "Our design philosophy focuses on creating intuitive digital experiences that delight users. We apply design thinking methodologies to craft interfaces that balance creativity with usability. From wireframes to high-fidelity prototypes, we ensure a seamless journey across web and mobile platforms. We focus on accessibility, responsiveness, and engaging user interactions. At Appikorn, we don’t just design products — we design memorable experiences.",
    alt: "User interface and experience design visuals",
  },
  {
    image: Photo3,
    title: "Product Design",
    text: "We transform ideas into impactful products that solve real-world challenges. Our product design team works closely with clients to align innovation with business goals. We ensure that every product is user-friendly, scalable, and aesthetically appealing. Our process covers concept ideation, prototyping, testing, and final deployment. With Appikorn, businesses get end-to-end product design that drives growth and customer satisfaction.",
    alt: "Product design sketches and prototyping workspace",
  },
  {
    image: Photo4,
    title: "QA Testing",
    text: "We deliver robust quality assurance processes to ensure your applications meet the highest standards. Our QA specialists use both manual and automated testing to identify and resolve potential issues early. We test across devices, operating systems, and platforms to guarantee compatibility. Security, performance, and functionality are at the core of our testing strategies. With Appikorn, businesses can launch products confidently, knowing they’re bug-free and reliable.",
    alt: "Quality assurance testing dashboard",
  },
  {
    image: Photo5,
    title: "Customer Support",
    text: "Customer trust is built on timely and effective support, and that’s what we deliver. Our dedicated team provides 24/7 assistance to resolve queries quickly and professionally. We focus on clear communication, empathy, and proactive problem-solving. From onboarding to long-term service, we ensure customers feel valued at every step. Appikorn’s support services help businesses retain clients and strengthen their brand reputation.",
    alt: "Customer support team assisting a client",
  },
  {
    image: Photo6,
    title: "Tech Support",
    text: "Technology issues can slow businesses down, and we’re here to prevent that. Our technical support team ensures smooth operations by troubleshooting and resolving issues quickly. We offer both remote and on-site assistance depending on client needs. System monitoring, maintenance, and optimization are central to our approach. With Appikorn, organizations can focus on growth while we handle the tech challenges.",
    alt: "Technical support service with system monitoring",
  },
  {
    image: Photo7,
    title: "User Research",
    text: "Understanding users is the foundation of successful products, and we make it a priority. We conduct in-depth research, surveys, and usability testing to uncover user needs and pain points. Our research-driven approach ensures that design and development align with real-world expectations. We provide actionable insights that guide product decisions and feature prioritization. At Appikorn, user research is not just a step — it’s the backbone of creating impactful solutions.",
    alt: "User research process with surveys and analytics",
  },
];

export default function OfferInAppikorn() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentCard = cards[index];

  // Animation variants
  const imageVariants = isMobile
    ? { initial: { x: 300 }, animate: { x: 0 }, exit: { x: -300 } }
    : { initial: { y: -660 }, animate: { y: 0 }, exit: { y: 660 } };

  const textVariants = isMobile
    ? { initial: { x: -300 }, animate: { x: 0 }, exit: { x: 300 } }
    : { initial: { y: 660 }, animate: { y: 0 }, exit: { y: -660 } };

  return (
    <section className="py-20" aria-labelledby="offer-heading">
      <header className="pb-20 text-black font-bold text-center">
        <h1 id="offer-heading" className="text-[32px] md:text-[58px]">
          What We Offer in Appikorn
        </h1>
      </header>

      <article
        className="bg-[#F8F8FF] flex flex-col md:flex-row items-center justify-center"
        aria-label={`Offer: ${currentCard.title}`}
      >
        <div className="h-auto md:h-[640px] w-full md:w-[1550px] flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden">
          {/* Left Column (Image) */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[640px] overflow-hidden">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={`img-${index}`}
                initial={imageVariants.initial}
                animate={imageVariants.animate}
                exit={imageVariants.exit}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentCard.image}
                  alt={currentCard.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  className="w-full h-full object-cover rounded-t-2xl md:rounded-tl-2xl md:rounded-bl-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Text) */}
          <div
            className="relative w-full md:w-1/2 h-auto md:h-[640px] overflow-hidden 
                       bg-white rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl 
                       p-6 md:p-10 text-black flex flex-col justify-start"
          >
            {/* Title with animation */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-[22px] md:text-[48px] font-bold leading-snug 
                           text-center md:text-left mb-4 md:mb-6"
              >
                {currentCard.title}
              </motion.h2>
            </AnimatePresence>

            {/* Text (desktop only) */}
            <p
              className="hidden md:block text-[14px] md:text-[24px] leading-[22px] 
                         md:leading-[40px] xl:leading-[48px] text-center md:text-left 
                         max-w-[90%] md:max-w-full"
            >
              {currentCard.text}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
