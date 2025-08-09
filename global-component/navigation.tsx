"use client";
import { AppRoutes } from "@/router";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-8 py-2 flex items-center justify-between bg-transparent relative z-50">
      {/* Logo */}
      <div>
        <img
          src="/landing/appikorn-logo 1.svg"
          alt="Appikorn Logo"
          className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px]"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-white text-base font-eudoxus">
        <Link href={AppRoutes.HOME} className="hover:underline">Home</Link>
        <Link href={AppRoutes.ABOUT} className="hover:underline">About</Link>
        <Link href={AppRoutes.SERVICES} className="hover:underline">Services</Link>
        <Link href={AppRoutes.PORTFOLIO} className="hover:underline">Portfolio</Link>
        <Link href="#" className="hover:underline">Team</Link>
        <Link href={AppRoutes.CONTACT} className="hover:underline">Contact</Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden text-white text-3xl cursor-pointer">
        {isMenuOpen ? (
          <HiX onClick={() => setIsMenuOpen(false)} />
        ) : (
          <HiMenu onClick={() => setIsMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[40%] sm:w-[30%] h-full bg-white text-black flex flex-col items-start p-6 space-y-6 shadow-lg md:hidden z-[9999]"
          >
            <button
              className="text-3xl self-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiX />
            </button>
            <Link href={AppRoutes.HOME} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href={AppRoutes.ABOUT} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href={AppRoutes.SERVICES} onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href={AppRoutes.PORTFOLIO} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link href={AppRoutes.CONTACT} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
