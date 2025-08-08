"use client";
import React, { useState } from "react";

export default function SlidingImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: "/mad-x/black-brocken-image.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus ac est dictum quis purus. Odio quam semper tellus ipsum ullamcorper tortor a...",
    },
    {
      id: 2,
      image: "/mad-x/black-brocken-image.svg",
      title: "Card Two Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus ac est dictum quis purus. Odio quam semper tellus ipsum ullamcorper tortor a...",
    },
    {
      id: 3,
      image: "/mad-x/black-brocken-image.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "This is the description for card three. Ut enim ad minim veniam...",
    },
    {
      id: 4,
      image: "/mad-x/black-brocken-image.svg",
      title: "Card Four Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus ac est dictum quis purus...",
    },
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
    <div className="bg-[#121314] py-10 px-5 sm:px-10">
      <div className="max-w-[1550px] mx-auto">
        {/* Header Text */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[32px] sm:text-[46.83px] font-semibold leading-tight text-[#F5F9FE] pb-5">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-[#A6AAB5] text-[15px] sm:text-[16px] leading-[24px] font-medium max-w-[90%] sm:max-w-[600px] pb-10">
            Lorem ipsum dolor sit amet consectetur. At mauris lorem volutpat et
            ullamcorper sit eget.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end space-x-4 pb-10">
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

        {/* Card Carousel */}
        <div className="relative h-[400px] sm:h-[640px] w-full flex items-center justify-center">
          <div className="relative flex h-full w-full items-start justify-start">
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
                positionClass =
                  "left-[5%] sm:-left-[15%] top-[41%] -translate-x-1/2 z-20";
                scaleClass = "scale-80 opacity-50";
              } else if (isNext) {
                positionClass =
                  "right-[5%] sm:-right-[15%] top-[41%] translate-x-1/2 z-20";
                scaleClass = "scale-80 opacity-50";
              }

              return (
                <div
                  key={card.id}
                  className={`absolute top-1/2 -translate-y-1/2 w-[90%] sm:w-[800px] lg:w-[960px] h-[350px] sm:h-[615px] bg-[#BCBCBC] rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out ${positionClass} ${scaleClass}`}
                >
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    className="w-[200px] sm:w-[331px] h-[200px] sm:h-[317px] object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Text - Dynamic */}
        <div className="flex flex-col sm:flex-row px-0 sm:px-10 lg:px-60 pt-10 space-y-4 sm:space-y-0 sm:space-x-10">
          <h1 className="text-white w-full sm:w-[25%] text-[20px] font-semibold">
            {cards[activeIndex].title}
          </h1>
          <p className="text-[#A6AAB5] w-full sm:w-[75%] text-[14px] sm:text-[16px]">
            {cards[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}
