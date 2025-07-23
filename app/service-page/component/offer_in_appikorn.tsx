"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Photo1 from "@/public/offer-content/photo1.jpg"; // Replace with your images
import Photo2 from "@/public/offer-content/photo2.jpg"; // Replace with your images
import Photo3 from "@/public/offer-content/photo3.jpg"; // Replace with your images
import Photo4 from "@/public/offer-content/photo4.jpg"; // Replace with your images
import Photo5 from "@/public/offer-content/photo5.jpg"; // Replace with your images
import Photo6 from "@/public/offer-content/photo6.jpg"; // Replace with your images
import Photo7 from "@/public/offer-content/photo7.jpg"; // Replace with your images

const cards = [
  {
    image: Photo1,
    title: "Embedded Design",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl ",
  },
  {
    image: Photo2,
    title: "UI/UX Design",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl ",
  },
  {
    image: Photo3,
    title: "Product Design",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl ",
  },
  {
    image: Photo4,
    title: "QA Testing",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl ",
  },
  {
    image: Photo5,
    title: "Customer Support",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl ",
  },
  {
    image: Photo6,
    title: "Tech Support",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl ",
  },
  {
    image: Photo7,
    title: "User Research",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A elementum rhoncus nisl ",
  },
];

export default function OfferInAppikorn() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // slower for smoother experience
    return () => clearInterval(timer);
  }, []);

  const currentCard = cards[index];

  return (
    <div className="py-20">
      <div className="pb-20 text-purple1 font-bold leading-[71.22px] tracking-[-0.49px]">
        <h1 className="text-[58px]">What We Offer in Appikorn</h1>
      </div>
      <div className="bg-[#F8F8FF] flex items-center justify-center">
        <div className="h-[640px] w-[1550px] flex rounded-2xl shadow-xl overflow-hidden">
          {/* Left Column (Image) */}
          <div className="relative w-1/2 h-[640px] overflow-hidden">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={`img-${index}`}
                initial={{ y: -660 }}
                animate={{ y: 0 }}
                exit={{ y: 660 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentCard.image}
                  alt={currentCard.title}
                  className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Text) */}
          <div className="relative w-1/2 h-[640px] overflow-hidden bg-white rounded-tr-2xl rounded-br-2xl">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={`text-${index}`}
                initial={{ y: 660 }}
                animate={{ y: 0 }}
                exit={{ y: -660 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full p-10 flex flex-col justify-center text-black"
              >
                <h1 className="text-[48px] font-bold mb-6 leading-snug">
                  {currentCard.title}
                </h1>
                <p className="text-[24px] leading-relaxed">
                  {currentCard.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
