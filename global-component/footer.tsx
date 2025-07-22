import Image from "next/image";
import AppikornImage from "../public/footer-icons/appikorn-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Instagram from "../public/socialMediaIcons/Instagram.svg";
import LinkedIn from "../public/socialMediaIcons/LinkedIn.svg";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="bg-white h-144 text-black px-25">
        {/* Upper Footer */}
        <div className="grid grid-cols-4  pt-15 pb-15">
          {/* 1st Column */}
          <div className="flex flex-col space-y-3">
            <Image
              src={AppikornImage}
              alt="Appikorn Icon"
              height={71.38532257080078}
              width={135.6885223388672}
            ></Image>
            <p className=" text-head_grey text-[18px]">
              Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing
              elit aliquam mauris
            </p>
            <input
              type="text"
              className="w-[419px] h-[66px] rounded-full border-none outline-none focus:border-none focus:outline-none bg-light_blue pl-5 text-head_grey"
              placeholder="Enter your email"
            />
            <button className="bg-dark_purple rounded-full p-3 w-[170px] h-[66px] text-white text-bold">
              Contact Us
            </button>
          </div>
          {/* Column 2 */}
          <div className="flex-col place-items-center">
            <p className="text-dark_purple text-bold text-xl">Services</p>
            <div className="pt-3 pl-32 text-[18px]">
              <p className="text-base text-head_grey ">Cloud service</p>
              <p className="text-base text-head_grey">UI/UX Design</p>
              <p className="text-base text-head_grey">Product Design</p>
              <p className="text-base text-head_grey">QA & Testing</p>
              <p className="text-base text-head_grey">Web Development</p>
              <p className="text-base text-head_grey">VR/AR Technology</p>
              <p className="text-base text-head_grey">
                Android / IOS application
              </p>
              <p className="text-base text-head_grey">Automations</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex-col place-items-center">
            <p className="text-dark_purple text-bold text-xl">Company</p>
            <div className="pt-3 pl-3 text-[18px]">
              <p className="text-base text-head_grey">About</p>
              <p className="text-base text-head_grey">Contact us</p>
              <p className="text-base text-head_grey">Help Center</p>
            </div>
          </div>
          {/* Column 4 */}
          <div className="flex-col place-items-center">
            <p className="text-dark_purple text-bold text-xl">Follow Us</p>
            <div className="flex pt-3 space-x-2">
              <Image
                src={LinkedIn}
                height={36}
                width={36}
                alt="LinkedIn Logo"
              />
              <Image
                src={Instagram}
                height={36}
                width={36}
                alt="Instagram Logo"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-0.25 w-320 mx-auto"></div>
        {/* Lower Footer */}
        <div className="place-items-end text-head_grey text-[18px]">
          <p className="pr-20 pt-5">
            Copyright © 2025 Appikorn consultancy | All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
