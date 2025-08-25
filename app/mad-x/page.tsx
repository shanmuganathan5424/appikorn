"use client";

import dynamic from "next/dynamic";
import Head from "next/head";

import Home from "./component/home";
import AiFrame from "./component/ai-video";
import MadxCard from "./component/card";
import FooterP from "./component/footer";
import useLenisScroll from "@/hooks/useLenisScroll";

// Lazy load heavy sections
const PrivacySection = dynamic(() => import("./component/privacy-security"), { ssr: false });
const MadxImage = dynamic(() => import("./component/mad-x-image-show"), { ssr: false });
const MadxGrid = dynamic(() => import("./component/mad-x-grid"), { ssr: false });
const ImageSliderContainer = dynamic(() => import("./component/image-slider"), { ssr: false });
const SlidingImage = dynamic(() => import("./component/slideing-card"), { ssr: false });

export default function MadX() {
  useLenisScroll();
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>MadX – Code Less. Ship More.</title>
        <meta
          name="description"
          content="MadX automates 70% of app development. Design faster, code smarter, and deliver better with AI-powered tools and privacy-first security."
        />
        <meta name="keywords" content="MadX, AI development, low-code, automation, app builder, privacy, security" />
        <meta name="author" content="MadX Team" />
        <meta property="og:title" content="MadX – Code Less. Ship More." />
        <meta property="og:description" content="Automating 70% of app development with AI, privacy, and security." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/mad-x/og-image.png" />
      </Head>

      <main className="relative w-full bg-[#0C0D0C] text-white overflow-x-hidden top-0">
        {/* Background Green Gradient */}
        <div className="absolute inset-0 z-0 flex justify-center top-0">
          <div
            className="w-[580px] h-[580px] rounded-full blur-[250px] -translate-y-44"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #73FFA0 0%, #459960 100%)",
            }}
          />
        </div>

        {/* Sections */}
        <div className="relative z-10">
          <section aria-label="Hero Section">
            <Home />
          </section>

          <section aria-label="AI Video Frame">
            <AiFrame />
          </section>

          <section aria-label="Features">
            <MadxCard />
          </section>

          {/* Lazy loaded for performance */}
          <section aria-label="Image Slider">
            <ImageSliderContainer />
          </section>

          <section aria-label="MadX Grid">
            <MadxGrid />
          </section>

          <section aria-label="MadX Showcase">
            <MadxImage />
          </section>

          <section aria-label="Sliding Cards">
            <SlidingImage />
          </section>

          <section aria-label="Privacy and Security">
            <PrivacySection />
          </section>

        </div>
      </main>
    </>
  );
}
