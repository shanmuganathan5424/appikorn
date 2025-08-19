"use client";

import TopNavBar from "@/global-component/navigation";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#6A0DAD] flex flex-col items-center text-black overflow-hidden px-4  pt-8 pb-32">
      {/* Background String */}
      <div className="absolute bottom-8 sm:bottom-24 right-[2%] sm:right-[5%]">
        <img
          src="/contact/String.svg"
          alt="string"
          className="w-32 h-32 sm:w-[200px] sm:h-[200px]"
        />
      </div>

      {/* Gradient Circle Animation */}
      <motion.div
        initial={{ bottom: "16rem" }}
        animate={{ bottom: "1rem" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="
        absolute
        right-4 sm:right-[15%]
        w-48 h-48
        sm:w-72 sm:h-72
        md:w-96 md:h-96
        lg:w-[500px] lg:h-[500px]
        bg-gradient-to-b from-[#F7E192A3] to-[#FFC700CC]
        rounded-full
        z-0
      "
      />

      {/* Floating SVG */}
      <div className="absolute top-16 right-5  sm:top-28 sm:left-40 opacity-30 sm:opacity-65 z-10">
        <img
          src="/contact/3d.svg"
          alt="cubic"
          className="w-20 h-20 sm:w-[120px] sm:h-[140px]"
        />
      </div>

      {/* Bottom Ovals */}
      <div className="absolute -bottom-[90%] left-1/2 -translate-x-1/2 w-[150%] h-[800px] sm:w-[130%] sm:h-[1000px] z-0">
        <motion.div
          initial={{ rotate: -5 }}
          animate={{ rotate: 5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/25 rounded-[50%] scale-x-150"
        />
        <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-full h-[86%] bg-white rounded-[50%] scale-x-125 z-10 shadow-xl" />
      </div>

      {/* Content */}
      <div
        className="relative z-20 w-full px-0 sm:px-6 py-8 
                grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mt-5 sm:mt-6 md:mt-0"
      >
        {/* Left Text */}
<div className="flex flex-col items-start md:items-center">
  <motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="text-white pt-4 md:pt-28 space-y-3 md:mt-14 max-w-full sm:ml-0 md:ml-[30px] lg:ml-[50px]"
>

    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-full text-white">
      COME ON, GIVE US A SHOUT!
    </h2>

    <p className="text-lg sm:text-base max-w-full md:max-w-[80%] text-white text-start md:text-start">
      We’re here to help you achieve your business goals. Whether you have questions about our services, want to explore collaboration opportunities, or need guidance on your next big project, we’d love to hear from you!
    </p>
  </motion.div>
</div>



        {/* Right Form */}
        <div className="flex justify-center items-center mt-4 md:mt-14">
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-lg 
               py-6 px-4 sm:px-6 md:px-10 w-full max-w-md"
  >
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
      Contact Form
    </h3>
    <p className="text-[10px] sm:text-xs text-[#6A0DAD] mb-5">
      Fill out the form below, and our team will get back to you promptly.
      Let’s connect and create solutions together.
    </p>

            <form className="space-y-3">
              {/* Full Name */}
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Full name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm bg-white"
                />
              </div>

              {/* Business Email */}
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Business email *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Phone
                </label>
                <div className="flex gap-2 mt-1">
                  <div className="relative w-[25%] h-8 bg-white rounded-lg">
                    <select className="appearance-none w-full h-full pl-2 pr-6 text-sm font-medium text-gray-700 bg-white rounded-lg focus:outline-none">
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <img
                      src="/contact/Triangle.svg"
                      alt="Arrow"
                      className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter number"
                    className="flex-1 border border-gray-300 rounded-lg px-2 py-1.5 text-sm bg-white"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="text-xs font-medium text-gray-700">
                  What service do you need?
                </label>
                <div className="relative w-full h-8 mt-1 bg-white rounded-lg">
                  <select className="appearance-none w-full h-full pl-2 pr-6 text-sm font-medium text-gray-700 bg-white rounded-lg focus:outline-none">
                    <option value="">Select</option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Consulting</option>
                    <option>IOS Appilcation</option>
                    <option>Cloud Service</option>
                  </select>
                  <img
                    src="/contact/Triangle.svg"
                    alt="Arrow"
                    className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-medium text-gray-700">
                  How can we help you?
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter your message"
                  className="w-full resize-none border border-gray-300 rounded-lg px-2 py-1.5 text-sm bg-white"
                />
              </div>

              {/* Submit */}
              <div className="flex  justify-center sm:justify-end">
                <button
                  type="submit"
                  className="bg-[#6A0DAD] hover:bg-purple-700 text-white text-sm px-5 py-1.5 rounded-full mt-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
