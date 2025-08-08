"use client";

import { useRef } from "react";
import "../../../styles/globals.css";

export default function ImageSliderContainer() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="bg-[#121314] w-full flex justify-center items-center py-10 sm:py-15 min-h-[640px] mb-5">
      <div className="flex w-full max-w-[1440px] px-5 sm:px-10">
        {/* LEFT STATIC TEXT & BUTTONS */}
        <div className="w-[35%] flex flex-col justify-center items-center text-white space-y-6">
          <div className="text-[30px] sm:text-[46px] font-bold text-center">
            <h1>what you will</h1>
            <h1>
              unlock with <span className="text-[#1FE58D]">MADX</span>
            </h1>
          </div>

{/* Buttons */}
<div className="flex flex-row gap-6">

  {/* PREV Button */}
  <button
    onClick={scrollPrev}
    className="flex items-center group transition-all duration-300"
  >
    {/* Green bar with text (mirrored) */}
    <div className="relative -mr-[25px] transition-transform duration-300 group-hover:-translate-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="35"
        viewBox="0 0 104 45"
        fill="none"
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

    {/* Circle with arrow (flipped arrow) */}
    <div className="z-10 w-[45px] h-[45px] rounded-full border-2 border-[#32F08C] flex justify-center items-center bg-white shadow-[-2px_1px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_#32F08C]">
      <img
        src="/mad-x/Line-arrow-green.svg"
        alt="arrow"
        className="w-5 h-5 transform rotate-180"
      />
    </div>
  </button>

  {/* NEXT Button */}
  <button
    onClick={scrollNext}
    className="flex items-center group transition-all duration-300"
  >
    {/* Circle with arrow */}
    <div className="z-10 w-[45px] h-[45px] rounded-full border-2 border-[#32F08C] flex justify-center items-center bg-white shadow-[2px_1px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_#32F08C]">
      <img
        src="/mad-x/Line-arrow-green.svg"
        alt="arrow"
        className="w-5 h-5"
      />
    </div>

    {/* Green bar with text */}
    <div className="-ml-[25px] relative transition-transform duration-300 group-hover:translate-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="35"
        viewBox="0 0 104 45"
        fill="none"
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
        <div className="w-[60%] overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="flex-shrink-0 snap-center border-2 border-[#7CF8A4] h-[550px] w-full rounded-[12.9px] text-white p-5 flex flex-col justify-between items-center"
              >
                <h1 className="text-[20px] sm:text-[28px] md:text-[30.95px] font-bold text-center">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque.
                </h1>
                <img
                  src="/mad-x/broken-image.svg"
                  alt="image"
                  className="w-[200px] sm:w-[280px] md:w-[331px] h-[200px] sm:h-[280px] md:h-[319px]"
                />
                <p className="text-[14px] sm:text-[16px] md:text-[18.06px] font-medium text-[#B3CCB3] text-justify">
                  Lorem ipsum dolor sit amet consectetur. Mi auctor dolor massa
                  condimentum luctus tellus cursus cursus. Aliquet condimentum
                  id duis scelerisque curabitur feugiat. Egestas nunc dignissim
                  varius facilisi. Magna libero dolor lectus ante amet ultricies
                  molestie in. In ut tincidunt cursus magna vel. Vitae lacinia
                  netus platea est scelerisque pharetra quis ipsum.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
