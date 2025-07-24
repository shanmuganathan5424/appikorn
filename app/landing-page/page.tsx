"use client";


import Panel from "@/app/landing-page/components/panel";
import SmartCard from "./components/dropdown";
import Animate from "./components/animation-page";
import DropDown from "./components/dropdown";
import HoverCluster from "./components/gif";
import Card from "@/global-component/card";

export default function Home() {
  return (
    <section className="bg-overallbg w-full">
      <Animate />

      {/* About */}
      <div className="px-4 md:px-8">
        <div className="mt-10 md:mt-14">
          <div className="text-[36px] md:text-[50px] font-gilroy font-bold text-vilottext mb-6">
            About US
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-0">
            {/* GIF / Image */}
            <div className="w-full lg:w-[600px] flex justify-center">
              <HoverCluster />
            </div>
            {/* Text content */}
            <div className="w-full lg:w-[616.47px] text-center lg:text-end">
              <p className="font-sans font-bold text-[32px] md:text-[48px] lg:text-[57px] leading-tight mb-4">
                Who we Are ?
              </p>
              <div className="flex flex-col gap-3 text-[16px] md:text-[18px] lg:text-[20px] leading-6">
                <p>
                  Founded in 2018, Appikorn Software Consultancy Services is
                  based in Pondicherry, India.
                </p>
                <p>
                  We specialize in end-to-end software solutions — from UI/UX
                  design to web and mobile development, VR/AR experiences,
                  cloud services, and more.
                </p>
                <p>
                  Our passion lies in delivering innovative technology that
                  turns ideas into reality.
                </p>
              </div>
            </div>

            
          </div>
        </div>

        {/* Services */}
        <div className="my-14 md:my-20">
          
          <Card />
        </div>

        {/* Our Works */}
        <div className="my-14 md:my-20">
          <div className="text-vilottext text-[36px] md:text-[48px] lg:text-[58px] font-bold mb-10 text-start">
            Our Works
          </div>
          <Panel />
        </div>

        {/* Why Choose Us */}
        <div className="mb-32 md:mb-52">
          <div className="text-vilottext text-[36px] md:text-[48px] lg:text-[58px] font-bold mb-10 text-start">
            Why Choose Us?
          </div>
          <DropDown />
        </div>
      </div>
    </section>
  );
}
