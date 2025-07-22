"use client";
import Image from "next/image";
import Image1 from "../../../public/first_container/Image 1.png";
import Image2 from "../../../public/first_container/Image 2.png";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Gurantee from "../../../public/first_container/Guarantee.svg";
import Clock from "../../../public/first_container/Clock.svg";
import MapPin from "../../../public/first_container/Map-pin.svg";
import Calendar from "../../../public/first_container/Calendar.svg";

export default function FirstContainer() {
  return (
    <>
      <div className="w-[1641.78px] h-[977px] bg-[url('/first_container/big_screen1.png')] relative bg-center bg-cover py-20">
        {/* Images */}
        <div className="relative w-full h-[840px] overflow-hidden flex items-center justify-between text-white text-4xl">
          <Image
            className="h-[800px] absolute flex items-center justify-between -left-10 top-0 transform -translate-x-35 rounded-2xl"
            src={Image1}
            alt="Image1"
            height={850}
            width={600}
          ></Image>
          <Image
            className="h-[800px] absolute flex items-center justify-between -right-10 top-0 transform translate-x-35 rounded-2xl"
            src={Image2}
            alt="Image2"
            height={800}
            width={600}
          ></Image>
        </div>
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex flex-row text-[22px] space-x-3 text-[#9EA3B5]">
            <p>Product Strategy</p>
            <p>.</p>
            <p>Design & Development</p>
            <p>.</p>
            <p>Automations & Support</p>
          </div>
          <div className="text-[64px] leading-[76px] font-normal text-bold text-white pb-4">
            <p>Unlock the power of</p>
            <p>imagination with</p>
            <p>Appikorn</p>
          </div>
          <div className="flex flex-row space-x-8 text-[#FFD700] text-[20px]">
            <div className="flex flex-row space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p> Agile Delivery</p>
            </div>
            <div className="flex flex-row space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>End-to-End Support</p>
            </div>
          </div>
          <div className="pt-7">
            <div className="flex flex-row bg-[#FFD700] h-[62px] w-[200px] rounded-full items-center justify-center space-x-2 p-3">
              <button className="text-2xl text-black font-medium flex pb-1">
                contact us
              </button>
              <div className="bg-black h-10 w-10 flex justify-center items-center rounded-full">
                <PhoneIcon className="w-5 h-5 text-[#FFD700]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-85">
          <div className="bg-white w-[974px] h-[92px] rounded-full text-black flex flex-row items-center justify-center">
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center">
                <Image
                  src={Gurantee}
                  alt="Gurantee"
                  height={30}
                  width={30}
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F]">
                <p>Quality</p>
                <p>Assurance</p>
              </div>
            </div>
            <div></div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center">
                <Image
                  src={Clock}
                  alt="Gurantee"
                  height={30}
                  width={30}
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F]">
                <p>Fast</p>
                <p>Turnaround</p>
              </div>
            </div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center">
                <Image
                  src={MapPin}
                  alt="Gurantee"
                  height={30}
                  width={30}
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F]">
                <p>Local US</p>
                <p>Professional</p>
              </div>
            </div>
            <div className="w-[200px] flex items-center justify-center space-x-4">
              <div className="bg-[#1F3584] h-12 w-12 rounded-full flex items-center justify-center">
                <Image
                  src={Calendar}
                  alt="Gurantee"
                  height={30}
                  width={30}
                ></Image>
              </div>
              <div className="flex flex-col text-[16px] font-semibold text-[#1F1F1F]">
                <p>Flexible</p>
                <p>Appointments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
