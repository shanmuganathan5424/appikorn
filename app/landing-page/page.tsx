"use client";

import Animate from "./components/animation-page";
import DropDown from "./components/dropdown";
import HoverCluster from "./components/gif";
import Card from "@/global-component/card";

import ResponsivePanel from "./components/mobile-responsive";
import MadxLanding from "./components/mad-x-landing-page";
import LandingPage from "../page";
import Widgets from "./components/widget";
import WhyChoose from "../mad-x/component/card";
import NewCard from "./components/new-card";
import AboutCompany from "./components/about-company";
import Hero from "./components/about-company";
import AboutUs from "./components/about-us";
import NewHero from "./components/new-company-about";

export default function Home() {
  return (
    <section className="relative bg-overallbg w-full overflow-x-hidden min-h-screen">
      <NewHero />
      {/* <Hero /> */}
      {/* Hero Animation */}
      {/* <Animate /> */}
      <MadxLanding />
      <Widgets />

      {/* About Section */}
      <div className="mt-16 ">
        <AboutUs />
      </div>
      

      {/* Services Section */}
      <section className=" px-4">
        <NewCard />
      </section>

      {/* Our Works Section */}
      <section className=" px-4">
        <h2 className="pb-12  text-black text-center font-bold leading-tight tracking-tight text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px]">
          Our Works
        </h2>
        <ResponsivePanel />
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-16 md:mb-40 px-4">

        <DropDown />
      </section>
    </section>
  );
}
