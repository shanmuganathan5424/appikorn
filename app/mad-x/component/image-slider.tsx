"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "../../../styles/globals.css";

export default function ImageSliderContainer() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Dragging logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => setIsDragging(false);

  // ✅ Add keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "ArrowLeft") scrollPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      className="bg-[#121314] w-full flex justify-center items-center py-10 min-h-[640px] mb-5"
      role="region"
      aria-label="Features slider"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-5 sm:px-10 gap-8">
        
        {/* LEFT TEXT & BUTTONS */}
        <div className="w-full md:w-[35%] flex flex-col justify-center items-center text-white space-y-6">
          <h2 className="text-[20px] sm:text-[36px] md:text-[46px] font-bold text-center leading-tight">
            What You Will <br className="hidden sm:block" />
            Unlock With <span className="text-[#1FE58D]">MADX</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-row gap-6">
            {/* PREV */}
            <button
              aria-label="Previous slide"
              onClick={scrollPrev}
              className="flex items-center group transition-all duration-300"
            >
              <div className="relative -mr-[25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="35"
                  viewBox="0 0 104 45"
                  className="transform scale-x-[-1]"
                >
                  <path
                    d="M0 0H100.619C102.728 0 104.179 2.11828 103.416 4.08445L92.9485 42.0844C92.5009 43.2391 91.3898 44 90.1514 44H0V0Z"
                    fill="#32F08C"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  PREV
                </span>
              </div>
              <div className="z-10 w-[45px] h-[45px] rounded-full border-2 border-[#32F08C] flex justify-center items-center bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_#32F08C]">
                <Image
                  src="/mad-x/Line-arrow-green.svg"
                  alt="Previous arrow"
                  width={20}
                  height={20}
                  className="rotate-180"
                />
              </div>
            </button>

            {/* NEXT */}
            <button
              aria-label="Next slide"
              onClick={scrollNext}
              className="flex items-center group transition-all duration-300"
            >
              <div className="z-10 w-[45px] h-[45px] rounded-full border-2 border-[#32F08C] flex justify-center items-center bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_#32F08C]">
                <Image
                  src="/mad-x/Line-arrow-green.svg"
                  alt="Next arrow"
                  width={20}
                  height={20}
                />
              </div>
              <div className="-ml-[25px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="35"
                  viewBox="0 0 104 45"
                >
                  <path
                    d="M0 0H100.619C102.728 0 104.179 2.11828 103.416 4.08445L92.9485 42.0844C92.5009 43.2391 91.3898 44 90.1514 44H0V0Z"
                    fill="#32F08C"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  NEXT
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full md:w-[60%] overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
          >
            {[1, 2, 3, 4].map((num) => (
              <article
                key={num}
                tabIndex={0}
                className="flex-shrink-0 snap-center border-2 border-[#7CF8A4] h-[550px] w-full rounded-[12.9px] text-white p-5 flex flex-col justify-start items-center gap-4 focus:outline-none focus:ring-2 focus:ring-[#32F08C]"
              >
                <h3 className="text-[16px] sm:text-[22px] md:text-[28px] font-bold text-center select-none">
                  Powerful feature {num} to unlock productivity
                </h3>
                <Image
                  src="/mad-x/broken-image.svg"
                  alt={`Feature ${num} illustration`}
                  width={280}
                  height={280}
                  className="w-[180px] sm:w-[240px] md:w-[280px] h-[180px] sm:h-[240px] md:h-[280px] object-contain select-none"
                />
                <div className="overflow-y-auto no-scrollbar max-h-[150px] w-full">
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#B3CCB3] text-justify select-none">
                    Lorem ipsum dolor sit amet consectetur. Mi auctor dolor massa
                    condimentum luctus tellus cursus cursus. Aliquet condimentum id duis
                    scelerisque curabitur feugiat. Egestas nunc dignissim varius facilisi.
                    Magna libero dolor lectus ante amet ultricies molestie in.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
