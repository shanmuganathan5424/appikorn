"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-[#6A0DAD] flex flex-col items-center overflow-hidden px-4 pt-8 pb-32"
      aria-labelledby="contact-heading"
    >
      {/* Background Decorative String */}
      <div
        className="absolute bottom-8 sm:bottom-24 right-[2%] sm:right-[5%] hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/contact/String.svg"
          alt=""
          width={200}
          height={200}
          className="w-32 h-32 sm:w-[200px] sm:h-[200px]"
          priority={false}
        />
      </div>

      {/* Gradient Circle Animation (decorative) */}
      <motion.div
        initial={{ bottom: "16rem" }}
        animate={{ bottom: "1rem" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        aria-hidden="true"
        className="absolute right-4 sm:right-[15%] hidden md:block
        w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]
        bg-gradient-to-b from-[#F7E192A3] to-[#FFC700CC]
        rounded-full z-0"
      />

      {/* Floating SVG (decorative cube) */}
      <div
        className="absolute top-16 right-5 sm:top-28 sm:left-40 opacity-30 sm:opacity-65 z-10 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/contact/3d.svg"
          alt=""
          width={120}
          height={140}
          className="w-20 h-20 sm:w-[120px] sm:h-[140px]"
          loading="lazy"
        />
      </div>

      {/* Bottom Ovals (decorative shapes) */}
      <div
        className="absolute -bottom-[90%] left-1/2 -translate-x-1/2 w-[150%] h-[800px] sm:w-[130%] sm:h-[1000px] z-0"
        aria-hidden="true"
      >
        <motion.div
          initial={{ rotate: -5 }}
          animate={{ rotate: 5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/25 rounded-[50%] scale-x-150"
        />
        <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-full h-[86%] bg-white rounded-[50%] scale-x-125 z-10 shadow-xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mt-10 md:mt-14">
        {/* Left Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white pt-4 md:pt-28 space-y-4 md:ml-[50px]"
        >
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            COME ON, GIVE US A SHOUT!
          </h2>
          <p className="text-base md:max-w-[80%]">
            We’re here to help you achieve your business goals. Whether you
            have questions about our services, want to explore collaboration
            opportunities, or need guidance on your next big project, we’d love
            to hear from you!
          </p>
        </motion.div>

        {/* Right Form */}
<div className="relative z-20 w-full flex justify-center items-center mt-6 md:mt-0">
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="bg-white/90 backdrop-blur-xl rounded-[40px] shadow-lg py-6 px-6 md:px-10 w-full max-w-md"
  >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
            Contact Form
          </h3>
          <p className="text-xs text-[#6A0DAD] mb-5">
            Fill out the form below, and our team will get back to you promptly.
            Let’s connect and create solutions together.
          </p>

          <form className="space-y-4" method="post" action="/api/contact">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="text-xs font-medium text-gray-700">
                Full name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
              />
            </div>

            {/* Business Email */}
            <div>
              <label htmlFor="email" className="text-xs font-medium text-gray-700">
                Business email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="text-xs font-medium text-gray-700">
                Phone
              </label>
              <div className="flex gap-2 mt-1">
                <select
                  name="countryCode"
                  id="countryCode"
                  className="w-[25%] border border-gray-300 rounded-lg px-2 py-2 text-sm"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter number"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="text-xs font-medium text-gray-700">
                What service do you need?
              </label>
              <select
                id="service"
                name="service"
                className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm bg-white mt-1"
              >
                <option value="">Select</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Consulting</option>
                <option>iOS Application</option>
                <option>Cloud Service</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-xs font-medium text-gray-700">
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Enter your message"
                className="w-full resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center sm:justify-end">
              <button
                type="submit"
                className="bg-[#6A0DAD] hover:bg-purple-700 text-white text-sm px-5 py-2 rounded-full mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
        </div>
      </div>

      {/* Footer Text */}
      <p className="z-40 absolute bottom-9 text-white md:text-black text-center w-full md:w-[70%] px-4 text-sm">
        The firm’s will to challenge the conventional is innate in our history.
        It serves as the most important driver for future growth and achievement.
      </p>
    </section>
  );
}
