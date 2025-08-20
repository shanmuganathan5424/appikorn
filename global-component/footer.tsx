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
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full bg-white px-6 py-10 text-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Column 1 - Full width on small screens, 1/4 on large */}
        <div className="flex flex-col items-center space-y-4 text-center lg:text-left w-full lg:w-1/4">
          <Image
            src={AppikornImage}
            alt="Appikorn Logo"
            width={140}
            height={70}
          />
          <p className="text-head_grey leading-relaxed max-w-full mob_s:text-[12px] md:text-[14px] lapl:text-[16px]">
            Join us on the journey to redefine possibilities, where technology
            seamlessly enhances human potential. Experience the power of
            Appikorn Industry 4.0 solutions and unlock the door to unprecedented
            growth, efficiency, and sustainability.
          </p>

          <div className="flex flex-row items-center mob_s:text-[12px] md:text-[14px] lapl:text-[16px] sm:flex-row md:flex-col gap-3 w-full sm:w-[70%] md:w-[70%] lg:w-[90%]">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-[50px] w-full rounded-full bg-light_blue pl-5 text-head_grey font-semibold outline-none mob_s:h-[40px] md:h-[50px]"
            />
            <button className="bg-white  rounded-full text-white text-[16px] font-semibold flex items-center justify-center h-[50px] w-[40%] sm:w-[30%] sm:md:bg-dark_purple md:w-[25%] lg:w-[45%]">
              {/* Show text only on md+ screens */}
              <span className="hidden md:inline md:text-[14px] lapl:text-[16px]">
                Contact us
              </span>

              {/* Show image only on small screens */}
              <img
                src="/send.png"
                alt="contact us"
                className="md:hidden w-[35px] h-[35px]"
              />
            </button>
          </div>
        </div>

        {/* Columns 2, 3, 4 wrapper */}
        {/* Columns 2, 3, 4 wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-3/4">
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <ul className="space-y-2 text-head_grey text-center mob_s:text-[12px] md:text-[14px] lapl:text-[16px] sm:md:text-start">
              <li className="text-dark_purple font-bold text-xl mb-4 mob_s:text-[15px] md:text-[17px] lapl:text-[20px]">
                Services
              </li>
              <li>Cloud service</li>
              <li>UI/UX Design</li>
              <li>Product Design</li>
              <li>QA & Testing</li>
              <li>Web Development</li>
              <li>VR/AR Technology</li>
              <li>Android</li>
              <li>IOS application</li>
              <li>Automations</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <ul className="space-y-2 text-head_grey text-center mob_s:text-[12px] md:text-[14px] lapl:text-[16px] sm:md:text-start">
              <li className="text-dark_purple font-bold text-xl mb-4 mob_s:text-[15px] md:text-[17px] lapl:text-[20px]">
                Company
              </li>
              <li>About</li>
              <li>Contact us</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center sm:col-span-full lg:col-span-1">
            <p className="text-dark_purple font-bold text-xl mb-4 mob_s:text-[15px] md:text-[17px] lapl:text-[20px]">
              Follow on Instagram
            </p>
            <div className="flex space-x-4">
              <div className="w-6 h-6 md:w-9 md:h-9">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9">
                <Image
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9">
                <Image
                  src={WhatsApp}
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>

      {/* Footer Bottom */} 
      <div className="mt-6 flex justify-center text-sm text-gray-500 mob_s:text-[12px] md:text-[14px] lg:justify-end lapl:text-[16px]">
        <p>© 2025 Appikorn Consultancy | All Rights Reserved</p>
      </div>
    </motion.footer>
  );
}
