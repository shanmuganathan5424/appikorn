"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AppikornImage from "../public/footer-icons/LOGO.svg";
import Instagram from "../public/socialMediaIcons/Instagram.svg";
import LinkedIn from "../public/socialMediaIcons/LinkedIn.svg";
import WhatsApp from "../public/socialMediaIcons/whatsapp.svg";

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full bg-white px-4 py-4 pt-8 text-black"
    >
      {/* Upper Section */}
      <div className="grid grid-cols-1 gap-y-10 pl-10 small:grid-cols-1 sm:grid-cols-2 sm:pl-0 md:grid-cols-4 md:px-12 lg:grid-cols-4">
        {/* Column 1 - Logo & Subscription */}
        <div className="flex flex-col items-start justify-center space-y-4 text-[16px] small:items-center sm:items-start sm:[14px] md:[14px] lg:w-[350px] ">
          <Image
            src={AppikornImage}
            alt="Appikorn Logo"
            width={140}
            height={70}
          />
          <p className="text-head_grey leading-relaxed w-[180px]">
            Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing
            elit aliquam mauris
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className=" h-[50px] w-[200px] rounded-full bg-light_blue pl-5 text-head_grey font-semibold outline-none border-none"
          />
          <button className="bg-dark_purple rounded-full h-[50px] w-[150px] text-white text-[16px]  md:[14px] sm:[14px] font-semibold">
            Contact us
          </button>
        </div>

        {/* Column 1 - Services */}
        <div className="flex flex-col items-center w-full text-[14px] small:items-center sm:items-center md:w-[330px] md:text-[16px] md:pr-20 lg:pr-20 lg:items-start">
          <div className="flex flex-col items-center small:items-center lg:items-center">
            <p className="text-dark_purple font-bold text-xl mb-4 ">Services</p>
            <div className="space-y-2 text-head_grey pl-20">
              <p>Cloud service</p>
              <p>UI/UX Design</p>
              <p>Product Design</p>
              <p>QA & Testing</p>
              <p>Web Development</p>
              <p>VR/AR Technology</p>
              <p>Android / IOS application</p>
              <p>Automations</p>
            </div>
          </div>
        </div>

        {/* Column 2 - Company */}
        <div className="w-full text-[14px] flex flex-col items-start small:items-center sm:items-start sm:pl-8 md:text-[16px] md:pl-15 lg:pl-15">
          <p className="text-dark_purple font-bold text-xl mb-4">Company</p>
          <div className="space-y-2 text-head_grey">
            <p>About</p>
            <p>Contact us</p>
            <p>Help Center</p>
          </div>
        </div>

        {/* Column 4 - Instagram Grid */}
        <div className="w-full flex flex-col items-center sm:items-center md:w-[200px]">
          <div className="flex flex-col items-center sm:items-center">
            <p className=" text-dark_purple font-bold text-xl mb-4 sm:text-xl ">
              Follow on Instagram
            </p>
            {/* <div className="grid grid-cols-2 gap-[10px]">
            {[
              "/footer-icons/local-image/local-img1.png",
              "/footer-icons/local-image/local-img2.png",
              "/footer-icons/local-image/local-img3.png",
              "/footer-icons/local-image/local-img4.png",
            ].map((src, index) => (
              <div
                key={index}
                className="w-[110px] h-[110px] overflow-hidden rounded-[10px]"
              >
                <img
                  src={src}
                  alt={`insta${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div> */}
            <div className="flex space-x-4">
              <Image src={Instagram} width={36} height={36} alt="Instagram" />
              <Image src={LinkedIn} width={36} height={36} alt="LinkedIn" />
              <Image src={WhatsApp} width={36} height={36} alt="WhatsApp" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-auto px-4 my-4 sm:px-6 lg:px-8"></div>

      {/* Lower Section */}
      <div className="flex justify-end gap-4 text-head_grey text-[14px] sm:justify-end md:text-[14px] md:justify-end lg:justify-end">
        <p className="">© 2025 Appikorn Consultancy | All Rights Reserved</p>
      </div>
    </motion.div>
  );
}
