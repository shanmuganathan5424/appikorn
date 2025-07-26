"use client";
import { AppRoutes } from "@/router";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <div className=" w-[1200px] h-[80px] px-8 py-2 flex items-center justify-between">
      {/* Logo Section */}
      <div>
        <img
          src="/landing/appikorn-logo 1.svg"
          alt="Appikorn Logo"
          className="h-[80px] w-[80px]"
        />
      </div>

      {/* Navigation Menu */}
      <div className="flex space-x-10 text-white text-base font-eudoxus">
        <Link href={AppRoutes.HOME} className="hover:underline">
          Home
        </Link>
        <Link href={AppRoutes.ABOUT} className="hover:underline">
          About
        </Link>
        <Link href={AppRoutes.SERVICES} className="hover:underline">
          Services
        </Link>
        <Link href="#" className="hover:underline">
          Portfolio
        </Link>
        <Link href="#" className="hover:underline">
          Team
        </Link>
        <Link href={AppRoutes.CONTACT} className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
}
