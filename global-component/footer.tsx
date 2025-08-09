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
        <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left w-full lg:w-1/4">
          <Image src={AppikornImage} alt="Appikorn Logo" width={140} height={70} />
          <p className="text-head_grey leading-relaxed max-w-full">
            Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris
          </p>

          <div className="flex flex-row sm:flex-row md:flex-col gap-3 w-full sm:w-[70%] md:w-[70%]">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-[50px] w-full rounded-full bg-light_blue pl-5 text-head_grey font-semibold outline-none"
            />
            <button className="bg-white sm:md:bg-dark_purple rounded-full h-[50px] w-[40%] sm:w-[30%] md:w-auto text-white text-[16px] font-semibold flex items-center justify-center gap-2">
              {/* Show text only on md+ screens */}
              <span className="hidden md:inline">Contact us</span>

              {/* Show image only on small screens */}
              <img
                src="/send.png"
                alt="contact us"
                className="md:hidden w-[50px] h-[50px]"
              />
            </button>

          </div>

        </div>

        {/* Columns 2, 3, 4 wrapper */}
{/* Columns 2, 3, 4 wrapper */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-3/4">
  
  {/* Column 2 */}
  <div className="flex flex-col items-center lg:items-start">
    <ul className="space-y-2 text-head_grey text-center sm:md:text-start">
      <li className="text-dark_purple font-bold text-xl mb-4 ">Services</li>
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
  <div className="flex flex-col items-center lg:items-start">
    <ul className="space-y-2 text-head_grey text-center sm:md:text-start">
      <li className="text-dark_purple font-bold text-xl mb-4">Company</li>
      <li>About</li>
      <li>Contact us</li>
      <li>Help Center</li>
    </ul>
  </div>

  {/* Column 4 */}
  <div className="flex flex-col items-center lg:items-start sm:col-span-full lg:col-span-1">
    <p className="text-dark_purple font-bold text-xl mb-4">Follow on Instagram</p>
    <div className="flex space-x-4">
      <Image src={Instagram} width={36} height={36} alt="Instagram" />
      <Image src={LinkedIn} width={36} height={36} alt="LinkedIn" />
      <Image src={WhatsApp} width={36} height={36} alt="WhatsApp" />
    </div>
  </div>

</div>



      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>

      {/* Footer Bottom */}
      <div className="mt-6 flex justify-center text-sm text-gray-500">
        <p>© 2025 Appikorn Consultancy | All Rights Reserved</p>
      </div>
    </motion.footer>
  );
}
