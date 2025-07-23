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
      className="bg-white px-6 md:px-24 sm:px-16 py-4 pt-8 text-black"
    >
      {/* Upper Section */}
      <div className="grid grid-cols-4 gap-x-35 gap-y-10 pl-10 sm:gap-y-10">
        {/* Column 1 - Logo & Subscription */}
        <div className=" lg:w-[350px] flex flex-col space-y-4 text-[16px] md:[14px] sm:[14px] justify-center">
          <Image
            src={AppikornImage}
            alt="Appikorn Logo"
            width={140}
            height={70}
          />
          <p className="text-head_grey leading-relaxed">
            Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing
            elit aliquam mauris
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className=" h-[50px] w-[300px] rounded-full bg-light_blue pl-5 text-head_grey font-semibold outline-none border-none"
          />
          <button className="bg-dark_purple rounded-full h-[50px] w-[150px] text-white text-[16px]  md:[14px] sm:[14px] font-semibold">
            Contact us
          </button>
        </div>

        {/* Column 1 - Services */}
        <div className="flex flex-col items-center w-full text-[14px] md:w-[330px] md:text-[16px] lg:pl-20">
          <div className="flex flex-col items-start">
            <p className="text-dark_purple font-bold text-xl mb-4">Services</p>
            <div className="space-y-2 text-head_grey">
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
        <div className="w-full text-[14px] flex flex-col items-center md:text-[16px]">
          <p className="text-dark_purple font-bold text-xl mb-4">Company</p>
          <div className="space-y-2 text-head_grey">
            <p>About</p>
            <p>Contact us</p>
            <p>Help Center</p>
          </div>
        </div>

        {/* Column 4 - Instagram Grid */}
        <div className="w-full md:w-[200px]">
          <p className="text-dark_purple font-bold text-xl mb-4">
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

      {/* Divider */}
      <div className="border-t border-gray-200 my-4 lg:w-full md:w-2/3 sm:w-1/2"></div>

      {/* Lower Section */}
      <div className="flex justify-end gap-4 text-head_grey text-[16px] sm:justify-end md:text-[14px] md:justify-end lg:justify-end">
        <p className="">© 2025 Appikorn Consultancy | All Rights Reserved</p>
      </div>
    </motion.div>
  );
}
