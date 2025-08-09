"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    image: "/panel/center-image/03.png",
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
    <div className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="rounded-[20px]"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px] bg-vilotcustom flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px] overflow-hidden rounded-[20px] sm:flex-row sm:items-start">
              
              {/* Number and Content */}
              <div className="max-w-[360px] z-10 sm:relative sm:z-10">
                <h2 className="text-[58px] font-bold mb-7">{card.number}</h2>

                {/* Text Content */}
                <div className="flex flex-col gap-3 z-30">
                  <h3 className="text-[40px] leading-[40px] font-bold">{card.title}</h3>
                  <p className="text-[16px] leading-5 mt-4">{card.description}</p>

                  {/* Review Section (moves to bottom in mobile) */}
                  <div className="mt-4 sm:mt-6 absolute bottom-6 sm:static">
                    <p className="text-[16px] leading-4">Creators</p>
                    <div className="flex items-center gap-3">
                      <div className="mt-2 flex -space-x-2">
                        <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-1.png" alt="C1" />
                        <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-4.png" alt="C2" />
                        <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-3.png" alt="C3" />
                        <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-2.png" alt="C4" />
                      </div>
                      <div>
                        <img className="mt-2 w-[100px] h-8" src="/panel/review/Line-arrow.svg" alt="Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Card Image (responsive position & size) */}
              <div className="absolute bottom-0 right-0 z-20 sm:relative sm:flex sm:items-end sm:justify-end sm:w-auto sm:h-auto">
                <img
                  src={card.image}
                  alt={`image${card.number}`}
                  className="z-20 object-fill mix-blend-overlay w-[150px] h-[250px] sm:w-[287px] sm:h-[509px] transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>

              {/* Background Image */}
              <div>
                <img
                  src={card.bgImage}
                  alt="Background"
                  className="z-0 absolute bottom-0 right-0 w-full h-[600px] object-cover mix-blend-overlay opacity-100 transition-all duration-700 "
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
