"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cardData = [
  {
    number: "01",
    title: "JuzAI AI-Powered Docs",
    description:
      "AI-powered automation that organizes files, extracts insights, and boosts productivity.",
    image: "/panel/center-image/01.svg",
    bgImage: "/panel/bg-image/bg1.png",
  },
  {
    number: "02",
    title: "Bestea Coffee Machine",
    description:
      "Fresh coffee, tea, and specialty drinks at the touch of a button—easy, sleek, and convenient.",
    image: "/panel/center-image/02.svg",
    bgImage: "/panel/bg-image/bg2.png",
  },
  {
    number: "03",
    title: "JuzDate – Couples Dating App",
    description:
      "Smart matching and private tools to help couples connect and grow together.",
    image: "/panel/center-image/03.png",
    bgImage: "/panel/bg-image/bg3.png",
  },
  {
    number: "04",
    title: "JuzScan – Food Delivery App",
    description:
      "Fast, reliable food delivery with smart recommendations and secure payments.",
    image: "/panel/center-image/04.svg",
    bgImage: "/panel/bg-image/bg4.png",
  },
  {
    number: "05",
    title: "Eco-friendly Wellness System",
    description:
      "Sustainable solutions for physical, mental, and environmental well-being.",
    image: "/panel/center-image/05.svg",
    bgImage: "/panel/bg-image/bg5.png",
  },
];

export default function PanelSlider() {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4 py-2">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
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
            <div
              className="
                relative
                w-full
                h-[370px] 
                bg-vilotcustom 
                flex flex-col items-start justify-between 
                text-white p-4 cursor-pointer
                leading-[1.3]
                overflow-hidden 
                rounded-[20px]
                sm:flex-row sm:items-start
                sm:h-[350px]
                md:h-[400px]
              "
            >
              {/* Number and Content */}
              <div className="max-w-full z-10 sm:max-w-[280px] sm:relative sm:z-10">
                <h2 className="text-[36px] sm:text-[40px] font-bold mb-3 sm:mb-6 leading-tight">
                  {card.number}
                </h2>

                {/* Text Content */}
                <div className="flex flex-col gap-2 z-30">
                  <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[16px] leading-snug mt-2">
                    {card.description}
                  </p>

                  {/* Review Section */}
                  <div className="mt-3 sm:mt-5 absolute bottom-8 sm:static">
                    <p className="text-[14px] leading-5 mb-1">Creators</p>
                    <div className="flex items-center gap-2">
                      <div className="mt-1 flex -space-x-1.5">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/panel/review/Ellipse-1.png"
                          alt="C1"
                        />
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/panel/review/Ellipse-4.png"
                          alt="C2"
                        />
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/panel/review/Ellipse-3.png"
                          alt="C3"
                        />
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/panel/review/Ellipse-2.png"
                          alt="C4"
                        />
                      </div>
                      <div>
                        <img
                          className="mt-1 w-[45px] h-8"
                          src="/panel/review/Line-arrow.svg"
                          alt="Arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Card Image */}
              <div className="absolute bottom-0 right-0 z-20 sm:relative sm:flex sm:items-end sm:justify-end sm:w-auto sm:h-auto">
                <img
                  src={card.image}
                  alt={`image${card.number}`}
                  className="
                    z-20
                    object-contain
                    w-[110px] h-[180px]
                    sm:w-[180px] sm:h-[320px]
                    md:w-[210px] md:h-[370px]
                    transition-all duration-700 ease-in-out
                  "
                  loading="lazy"
                />
              </div>

              {/* Background Image */}
              <div>
                <img
                  src={card.bgImage}
                  alt="Background"
                  className="
                    z-0
                    absolute bottom-0 right-0
                    w-full h-[400px]
                    object-cover
                    mix-blend-overlay
                    opacity-60
                    transition-all duration-700
                    sm:h-[350px]
                    md:h-[400px]
                  "
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
