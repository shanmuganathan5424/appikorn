"use client";

import TopNavBar from "@/global-component/navigation";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#6A0DAD] flex flex-col items-center text-black overflow-hidden pb-32">
      
      {/* Top Nav */}
      <TopNavBar />

      {/* Background Gradient Circle */}

      <div className="absolute bottom-24 right-[10%]">
        <img src="/contact/String.svg" alt="string" className="w-[232px] h-[232px]" />
      </div>

      <motion.div
      initial={{ bottom: "16rem" }} // 64 in Tailwind (64 * 0.25rem = 16rem)
      animate={{ bottom: "1rem" }}  // 4 in Tailwind = 1rem
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      className="absolute right-[22%] w-[500px] h-[500px] bg-gradient-to-b from-[#F7E192A3] to-[#FFC700CC] opacity-100 rounded-full z-0"
      style={{ position: "absolute" }}
    />
      {/* Floating SVG Object */}
      <div className="absolute top-40 left-44 z-10">
        <img src="/contact/3d.svg" alt="cubic" className="w-[120px] h-[140px]" />
      </div>

      {/* Bottom Waves */}
      {/* Bottom Stacked Ovals */}
<div className="absolute -bottom-[80%] left-1/2 -translate-x-1/2 w-[130%] h-[1000px] z-0 pointer-events-none">
      {/* Animated Purple Base Oval */}
      <motion.div
        initial={{ rotate: -5 }}
        animate={{ rotate: 5 }}
        transition={{
        //   repeat: Infinity,
        //   repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/25 rounded-[50%] scale-x-150"
      />

      {/* Static White Top Oval */}
      <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-full h-[86%] bg-white rounded-[50%] scale-x-125 z-10 shadow-xl" />
    </div>



      {/* Content */}
      <div className="relative z-20 w-[75%] px-6 py-14 flex flex-col md:flex-row gap-12 items-start">
        
         <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-white pt-10 md:pt-40 space-y-4"
      >
        <h2 className="text-[32px] md:text-[64px] leading-tight font-extrabold">
          COME ON, GIVE US A SHOUT!
        </h2>
        <p className="text-lg max-w-[75%] font-gilroy">
          "We Look Forward To Connect With You." Ready to embrace the future of
          Industry 4.0 with Schopiq Automation? Reach out to our team to
          discuss how we can empower your business.
        </p>
      </motion.div>

      {/* Right Form Animation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 bg-white/70 backdrop-blur-xl rounded-[38px] shadow-lg py-12 px-6 md:px-16 mt-12 md:mt-0 min-w-[320px] md:min-w-[500px]"
      >
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Contact Form</h3>
        <p className="text-sm text-vilottext mb-6">
          Fill out the form below, and our team will get back to you promptly.
          Let's connect and create solutions together!
        </p>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Full name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-[#CBD5E1] rounded-xl p-2 mt-1 bg-white"
            />
          </div>

          {/* Business Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Business email *</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-[#CBD5E1] rounded-xl p-2 mt-1 bg-white"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <div className="flex gap-2 mt-1">
              <div className="relative w-[100px] h-[45px] rounded-xl bg-white">
                <select className="appearance-none w-full h-full pl-3 pr-8 text-[16px] font-semibold text-black bg-white rounded-xl focus:outline-none cursor-pointer">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <img
                  src="/contact/Triangle.svg"
                  alt="Arrow"
                  className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="bg-white flex-1 border-[#CBD5E1] rounded-xl p-2"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">What service do you need?</label>
            <div className="relative w-full h-[45px] rounded-xl p-2 mt-1 bg-white">
              <select className="appearance-none w-full h-full pl-3 pr-8 text-[16px] font-semibold text-black bg-white rounded-xl focus:outline-none cursor-pointer">
                <option value="select">Select</option>
                <option value="develope">Web Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="consuling">Consulting</option>
              </select>
              <img
                src="/contact/Triangle.svg"
                alt="Arrow"
                className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">How can we help you?</label>
            <textarea
              rows={3}
              placeholder="Enter your message here"
              className="w-full h-24 resize-none border-[#CBD5E1] rounded-xl p-2 mt-1 bg-white"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#6A0DAD] hover:bg-purple-700 text-white px-6 py-2 rounded-[95px] mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>

          
        </div>

    </section>
  );
}
