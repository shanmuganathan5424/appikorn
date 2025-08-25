"use client";

import useLenisScroll from "@/hooks/useLenisScroll";
import ContactSection from "./component/home";
import MapFrame from "./component/map";import { use } from "react";

export default function ContactUs() {
  useLenisScroll();
  return (
    <section className="flex flex-col items-center w-full bg-white relative top-0">
      <ContactSection />
      <MapFrame />
    </section>
  );
}