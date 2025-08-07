"use client";
import React, { useState } from "react";

export default function SlidingImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
  ];

  const nextCard = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevCard = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="bg-[#121314] pt-10 p-10">
        {/* Text */}
        <div className="flex flex-col items-center">
          <h1 className="text-[46.83px] font-semibold leading-[56.2px] text-[#F5F9FE] pb-5">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-[#A6AAB5] text-[15.05px] leading-[24.08px] font-medium text-center w-[600px] pb-25">
            Lorem ipsum dolor sit amet consectetur. At mauris lorem volutpat et
            ullamcorper sit eget. Duis eleifend bibendum cursus praesent diam
            posuere ac.
          </p>
        </div>
        <div className="h-[1024px] border-2 border-white flex flex-col">
          <div className="flex flex-row justify-end pt-10 pr-15 space-x-4 pb-10">
            {/* SVG 1 */}
            <div className="group bg-[#EDEFF22E] h-10 w-10 flex items-center justify-center hover:bg-[#32F08C]">
              <div
                className="group bg-[#EDEFF22E] h-10 w-10 flex items-center justify-center hover:bg-[#32F08C] cursor-pointer"
                onClick={prevCard}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 stroke-current text-[#787D87] group-hover:text-black"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.33301 15.6948L3.33301 10.6948L8.33301 5.69482M4.16701 10.6948H16.667"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </div>
            {/* SVG 2 */}
            <div
              className="group bg-[#EDEFF22E] h-10 w-10 flex items-center justify-center hover:bg-[#32F08C] cursor-pointer"
              onClick={nextCard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                fill="none"
                className="w-6 h-6 stroke-current text-[#787D87] group-hover:text-black"
              >
                <path
                  d="M12.257 5.69482L17.257 10.6948L12.257 15.6948M16.423 10.6948H3.92297"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>

          {/* Container with Cards */}
          <div className="relative h-[640px] w-full bg-[#BCBCBC] mx-auto rounded-md overflow-hidden flex items-center justify-center">
            <div className="relative flex h-full w-full items-center justify-center">
              {cards.map((card, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === activeIndex - 1;
                const isNext = index === activeIndex + 1;

                if (!isPrev && !isActive && !isNext) return null;

                let positionClass = "";
                let scaleClass = "";

                if (isActive) {
                  positionClass = "left-1/2 -translate-x-1/2 z-30";
                  scaleClass = "scale-100";
                } else if (isPrev) {
                  positionClass = "left-[15%] -translate-x-1/2 z-20";
                  scaleClass = "scale-90 opacity-50";
                } else if (isNext) {
                  positionClass = "left-[100%] -translate-x-1/2 z-20";
                  scaleClass = "scale-90 opacity-50";
                }

                return (
                  <div
                    key={card.id}
                    className={`absolute top-1/2 -translate-y-1/2 w-[960px] h-[615.59px] bg-white rounded-lg flex items-center justify-center text-black text-2xl font-bold transition-all duration-300 ease-in-out
            ${positionClass} ${scaleClass}`}
                  >
                    {card.content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-row px-60 pt-10">
            <h1 className="text-white w-[25%]">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="text-[#A6AAB5] w-[75%]">
              Lorem ipsum dolor sit amet consectetur. Metus ac est dictum quis
              purus. Odio quam semper tellus ipsum ullamcorper tortor a.
              Fringilla vitae pharetra tristique erat quisque. Pellentesque sed
              proin magna sodales id rutrum volutpat habitant. Risus donec ac
              convallis id tempus et enim. Feugiat amet est magna vel feugiat a.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
