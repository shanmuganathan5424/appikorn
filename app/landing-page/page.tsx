"use client";

import dynamic from "next/dynamic";

// Import above-the-fold content normally
import NewHero from "./components/new-company-about";
import MadxLanding from "./components/mad-x-landing-page";
import Widgets from "./components/widget";
import AboutUs from "./components/about-us";
import NewCard from "./components/new-card";
import useLenisScroll from "@/hooks/useLenisScroll";

// Lazy load below-the-fold content
const ResponsivePanel = dynamic(
  () => import("./components/mobile-responsive"),
  { ssr: false }
);
const DropDown = dynamic(() => import("./components/dropdown"), { ssr: false });

export default function Home() {
  useLenisScroll();

  return (
    <main
      id="home-page"
      className="relative bg-overallbg w-full overflow-x-hidden min-h-screen"
    >
      {/* Hero Section */}
      <NewHero />
      <MadxLanding />
      <Widgets />

      {/* About Section */}
      <section
        id="about-section"
        aria-labelledby="about-heading"
        className="mt-16 px-4"
      >
        <h2 id="about-heading" className="sr-only">
          About Appikorn Software Consultancy
        </h2>
        <AboutUs />
      </section>

      {/* Services Section */}
      <section
        id="services-section"
        aria-labelledby="services-heading"
        className="px-4"
      >
        <NewCard />
      </section>

      {/* Our Works Section */}
      <section
        id="works-section"
        aria-labelledby="works-heading"
        className="px-4"
      >
        <h2
          id="works-heading"
          className="pb-12 text-black text-center font-bold leading-tight tracking-tight text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]"
        >
          Our Works
        </h2>
        <ResponsivePanel />
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        aria-labelledby="why-heading"
        className="mt-16 md:mb-40 px-4"
      >
        <h2 id="why-heading" className="sr-only">
          Why Choose Appikorn
        </h2>
        <DropDown />
      </section>
    </main>
  );
}
