
import Card from "@/app/landing-page/components/card";
import FlashLight from "@/app/landing-page/components/flash";

import Panel from "@/app/landing-page/components/panel";
import TopNavBar from "@/global-component/navigation";
import DropDown from "./components/dropdown";
import { use } from "react";

export default function Home() {
  return (
    <section >
      <div className="mx-0 relative bg-darkblue w-full h-[1024px] flex flex-col items-center" >

        <TopNavBar />

        <div className="text-center text-[215px] font-sans font-bold bg-[linear-gradient(to_top,_#FFF5F5,_#2A2AFF)] bg-clip-text text-transparent tracking-[7px]">
          APPIKORN
        </div>

        <div className="absolute bottom-4"><img src="/landing/landing_image.png" alt="landing" width={1200} height={750}  /></div>

      </div>
      {/* about */}
      <div className="mt-7">
        <div className="text-[50px] font-gilroy font-bold text-vilottext">About US</div>
        <div className="flex flex-row items-center justify-between">
          {/* gif */}
          <div className="w-600px h-370px ">\
            <img
            src="/landing/group-a.svg"
            alt="Shining animation"
            className="w-full h-full object-contain "
            />
          </div>

          {/* content */}
          <div className="w-[616.47px] text-end">
            <p className="font-sans font-bold text-[57px] leading-16 mb-6">Who we Are ?</p>
            <div className="flex flex-col gap- text-[20px] leading-6">
                <p>Founded in 2018, Appikorn Software Consultancy Services is
                    based in Pondicherry, India.</p>
                <p>We specialize in end-to-end software solutions — from IJI/UX
                    design to web and mobile development, VR/AR experiences,
                    cloud services, and more.</p>
                <p>Our passion lies in delivering innovative technology that turns
                    ideas into reality.</p>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className="text-vilottext mt-4 text-[58px] font-bold text-gray-900 mb-12 text-start">services</div>
        <Card />

      </div>

      <div>
        <div className="text-vilottext mt-4 text-[58px] font-bold text-gray-900 mb-12 text-start">Our Works</div>
        <Panel/>

      </div>

      <div>
        <div className="text-vilottext mt-4 text-[58px] font-bold text-gray-900 mb-12 text-start">WhyChoose Us?</div>
        <DropDown/>

      </div>

    </section>
  );
}
