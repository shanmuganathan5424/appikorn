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

export default function Home() {
  return (
    <section className="bg-overallbg w-full overflow-x-hidden ">
      {/* Hero Animation */}
      {/* <Animate /> */}
      <MadxLanding />
      <Widgets />

      <div className="w-full px-4  md:px-4 lg:px-8  mx-auto">
        {/* About Section */}
        <section className="mt-12 md:mt-20">
          {" "}
          <h2 className="text-[20px] sm:text-[22px] md:text-[32px] lg:text-[42px] xl:text-[58px] font-bold text-vilottext mb-8 text-start">
            {" "}
            About Us{" "}
          </h2>{" "}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {" "}
            {/* Image/GIF */}{" "}
            <div className="w-full lg:w-[600px] flex justify-center">
              {" "}
              <HoverCluster />{" "}
            </div>{" "}
            {/* Text */}{" "}
            <div className="w-full lg:w-[600px] text-center lg:text-right">
              {" "}
              <h3 className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[28px] lg:text-[38px] xl:text-[48px] text-black mb-5 leading-tight">
                {" "}
                Who we Are?{" "}
              </h3>{" "}
              <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-black space-y-4 leading-relaxed">
                {" "}
                <p>
                  {" "}
                  Founded in 2018, Appikorn Software Consultancy Services is
                  based in Pondicherry, India.{" "}
                </p>{" "}
                <p>
                  {" "}
                  We specialize in end-to-end software solutions — from UI/UX
                  design to web and mobile development, VR/AR experiences, cloud
                  services, and more.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Our passion lies in delivering innovative technology that
                  turns ideas into reality.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        {/* Services Section */}
        <section className="my-16 md:my-24">
          <Card />
          <NewCard />

        </section>

        {/* Our Works Section */}
        <section className="my-16 md:my-24">
          <h2 className="text-vilottext text-[20px] sm:text-[22px] md:text-[32px] lg:text-[42px] xl:text-[58px] font-bold mb-3 sm:md:mb-8 text-start">
            Our Works
          </h2>
          <ResponsivePanel />
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-24 md:mb-40">
          <h2 className="text-vilottext text-[20px] sm:text-[22px] md:text-[32px] lg:text-[42px] xl:text-[58px] font-bold mb-8 text-start">
            Why Choose Us?
          </h2>
          <DropDown />
        </section>

        <div></div>
      </div>
    </section>
  );
}
