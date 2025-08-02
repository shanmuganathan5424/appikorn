"use client";
import React from "react";

const cardData = [
  {
    number: "01",
    title: "AI-Powered Workflow Optimizer",
    description: "Lorem ipsum dolor sit amet consectetur. Ac aliquam tellus tristique imperdiet...",
    image: "/panel/center-image/01.svg",
    bgImage: "/panel/bg-image/bg1.png",
  },
  {
    number: "02",
    title: "Real-Time Collaboration Hub",
    description: "Curabitur malesuada feugiat in morbi faucibus proin ipsum tellus a...",
    image: "/panel/center-image/02.svg",
    bgImage: "/panel/bg-image/bg2.png",
  },
  {
    number: "03",
    title: "Intelligent Project Tracking Suite",
    description: "Euismod eget odio eu ac aliquam. Nisl bibendum tellus ipsum lectus...",
    image: "/panel/center-image/03.svg",
    bgImage: "/panel/bg-image/bg3.png",
  },
  {
    number: "04",
    title: "Smart Workflow Automation",
    description: "Maecenas diam amet at sapien. Nulla eu leo venenatis ultrices...",
    image: "/panel/center-image/04.svg",
    bgImage: "/panel/bg-image/bg4.png",
  },
  {
    number: "05",
    title: "JuzAI Powered Intelligence Document Management",
    description: "Lorem ipsum dolor sit amet consectetur. Ac aliquam tellus tristique imperdiet...",
    image: "/panel/center-image/05.svg",
    bgImage: "/panel/bg-image/bg5.png",
  },
];

export default function PanelSlider() {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide px-6 py-4">
      <div className="inline-flex gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group relative flex-1 min-w-[380px] max-w-[400px] hover:flex-[1.2] transition-all duration-500 ease-in-out bg-vilotcustom flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px] overflow-hidden rounded-[20px]"
          >
            {/* Number and Content Wrapper */}
            <div className="max-w-[360px] z-10">
              <h2 className="text-[58px] font-bold mb-7">{card.number}</h2>

              {/* Robot Image */}
              <div className="absolute inset-0 flex items-end justify-center group-hover:justify-center pl-0 group-hover:pl-36 transition-all duration-700 ease-in-out z-0">
                <img
                  src={card.image}
                  alt={`image${card.number}`}
                  className="w-[287px] h-[509px] object-cover mix-blend-overlay"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-[40px] leading-[40px] font-bold">
                  {card.title}
                </h3>
                <p className="text-[16px] leading-5 mt-4">{card.description}</p>

                {/* Review Section */}
                <p className="mt-4 text-[16px] leading-4">Creators</p>
                <div className="flex items-center gap-3">
                  <div className="mt-2 flex -space-x-2">
                    <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-1.png" alt="Creator 1" />
                    <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-4.png" alt="Creator 2" />
                    <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-3.png" alt="Creator 3" />
                    <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-2.png" alt="Creator 4" />
                  </div>
                  <div>
                    <img className="mt-2 w-[100px] h-8" src="/panel/review/Line-arrow.svg" alt="Arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Image */}
            <div>
              <img
                src={card.bgImage}
                alt="Background"
                className="absolute bottom-0 right-0 w-[375px] h-[600px] object-cover mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
