import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Link } from "lucide-react";
import { motion } from "framer-motion";
import { AppRoutes } from "@/router";

const DATA = [
  {
    id: 1,
    src: "/portfolio/portfolio-project-image/flight-ticket.webp",
    title: "Flight-ticket",
    desc: "Los Angeles, CA • Building since 09.01.2024",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    tags: ["General Construction", "Design"],
  },
  {
    id: 2,
    src: "/portfolio/portfolio-project-image/b2b.webp",
    title: "B2B",
    desc: "About the project",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    tags: ["Web App", "Business"],
  },
  {
    id: 3,
    src: "/portfolio/portfolio-project-image/beema.webp",
    title: "Beema",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Web App", "Insurance"],
  },
  {
    id: 4,
    src: "/portfolio/portfolio-project-image/doc-manage-sys.webp",
    title: "Doc Management",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["System", "Management"],
  },
  {
    id: 5,
    src: "/portfolio/portfolio-project-image/flight-ticket.webp",
    title: "Flight Ticket",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Web App", "Booking"],
  },
  {
    id: 6,
    src: "/portfolio/portfolio-project-image/fresh-honest.webp",
    title: "Fresh Honest",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Food", "E-commerce"],
  },
  {
    id: 7,
    src: "/portfolio/portfolio-project-image/handyman-booking-service.webp",
    title: "Handyman Service",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Service", "App"],
  },
  {
    id: 8,
    src: "/portfolio/portfolio-project-image/health.webp",
    title: "Health",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Healthcare", "App"],
  },
  {
    id: 9,
    src: "/portfolio/portfolio-project-image/iot-panel.webp",
    title: "IoT Panel",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["IoT", "Dashboard"],
  },
  {
    id: 10,
    src: "/portfolio/portfolio-project-image/juzdate.webp",
    title: "Juzdate",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Dating", "App"],
  },
  {
    id: 11,
    src: "/portfolio/portfolio-project-image/juzscan.webp",
    title: "Juzscan",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Scanner", "Utility"],
  },
  {
    id: 12,
    src: "/portfolio/portfolio-project-image/lavazza.webp",
    title: "Lavazza",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Coffee", "Brand"],
  },
  {
    id: 13,
    src: "/portfolio/portfolio-project-image/progress.webp",
    title: "Progress",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Web App", "Productivity"],
  },
  {
    id: 14,
    src: "/portfolio/portfolio-project-image/wildbean.webp",
    title: "Wild Bean",
    location: "Los Angeles, CA",
    date: "Building since 09.01.2024",
    desc: "About the project",
    tags: ["Food", "Cafe"],
  },
];

export default function PortfolioShowcase() {
  const [current, setCurrent] = useState(1);
  const [direction, setDirection] = useState(0);

  const total = DATA.length;
  const leftIndex = (current - 1 + total) % total;
  const centerIndex = current % total;
  const rightIndex = (current + 1) % total;

  const visible = useMemo(
    () => [DATA[leftIndex], DATA[centerIndex], DATA[rightIndex]],
    [leftIndex, centerIndex, rightIndex]
  );

  const next = () => {
    setDirection(1);
    setCurrent((i) => (i + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((i) => (i - 1 + total) % total);
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-14 py-12 md:py-16">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-7">
            <h2 className="font-serif tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight text-[#1b1b1b]">
              Explore the latest in <br className="hidden sm:block" /> our portfolio.
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4 md:gap-6 md:items-end justify-between md:justify-start">
            {/* Recent Work button */}
            <button className="px-4 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-[2px] text-sm text-[#2c2c2c] shadow-sm transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md">
              Recent Work
            </button>
            <p className="text-sm sm:text-base leading-relaxed text-[#6b6b6b] md:text-right max-w-sm">
              Proactive approach to maintenance, we help you avoid costly
              repairs and extend the life of your property’s assets.
            </p>
          </div>
        </div>

        {/* LATEST PROJECTS + CTA */}
        <div className="mt-6 md:mt-10 flex items-center justify-between sm:justify-start gap-3 sm:gap-4 w-full">
          <span className="text-sm sm:text-lg text-[#444]">Latest Projects</span>
          <div className="hidden sm:flex flex-1 border-b border-dashed border-black"></div>
          {/* BUTTON */}
              <a
      href={AppRoutes.EXPLOREPROJECT}
      className="relative group flex items-center gap-2 sm:gap-4 pl-3 sm:pl-5 pr-2 py-1.5 sm:py-2.5 rounded-full bg-white text-xs sm:text-[15px] font-medium text-[#2b2b2b] ring-1 ring-black/5 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md"
    >
      <span className="sm:hidden">Explore All</span>
      <span className="hidden sm:inline">Explore All Projects</span>
      <span className="grid place-items-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-700 to-purple-400 text-white transition-all duration-300 group-hover:scale-110 group-hover:from-purple-600 group-hover:to-purple-300">
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
      </span>
      <span className="absolute inset-0 rounded-full ring-1 ring-black/5 pointer-events-none" />
    </a>
        </div>

        {/* MOBILE DESIGN (Carousel) */}
        <div className="mt-10 md:hidden relative w-full overflow-hidden">
          <motion.div
            key={centerIndex}
            className="flex w-full"
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x + velocity.x * 0.5;
              if (swipe < -100) {
                next();
              } else if (swipe > 100) {
                prev();
              }
            }}
          >
            {visible.map((img, i) => (
              <motion.img
                key={i}
                src={img.src}
                alt={img.title}
                className="w-full h-auto sm:h-[450px] object-cover object-center rounded-[28px] flex-shrink-0"
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              />
            ))}
          </motion.div>
        </div>

        {/* DESKTOP DESIGN */}
        <div className="mt-10 md:mt-12 hidden md:grid grid-cols-3 gap-6 md:gap-8 items-stretch">
          <figure
            key={visible[1].id}
            className="relative overflow-hidden rounded-[28px] w-full col-span-2 h-[480px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
          >
            <img src={visible[1].src} alt={visible[1].title} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 right-5 text-white z-10 hidden sm:block">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-white backdrop-blur text-black">
                {visible[1].date}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {visible[1].tags?.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1 rounded-full text-[12px] bg-white shadow text-black"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>

          <div className="hidden md:flex flex-col gap-6 md:gap-8 h-[480px]">
            {[visible[0], visible[2]].map((p) => (
              <figure
                key={p.id}
                className="relative overflow-hidden rounded-[28px] w-full h-1/2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] filter grayscale"
              >
                <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
              </figure>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="mt-6 space-y-4 px-4 md:px-0">
          <div className="flex flex-col items-start text-start ">
            <h3 className="font-serif text-[24px] sm:text-[28px] md:text-[34px] leading-tight text-black">
              {DATA[centerIndex].title}
            </h3>
            {DATA[centerIndex].location && (
              <p className="text-black mt-1 text-sm sm:text-[15px] md:text-[16px]">
                {DATA[centerIndex].location}
              </p>
            )}
          </div>
        </div>

        {/* Pagination + Buttons */}
        <div className="mt-6 space-y-2 md:space-y-4 px-4 md:px-0">
          <div className="flex items-center justify-between w-full">
            <div className="text-sm text-black">
              {String(centerIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full grid place-items-center text-black bg-white transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-md"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-full grid place-items-center text-white bg-gradient-to-br from-purple-700 to-purple-400 transition-all duration-300 hover:scale-110 hover:from-purple-600 hover:to-purple-300 hover:shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
