
import Card from "@/app/landing-page/components/card";

import Panel from "@/app/landing-page/components/panel";
import TopNavBar from "@/global-component/navigation";

import SmartCard from "./components/dropdown";
import Footer from "@/global-component/footer";
import Animate from "./components/animation-page";

export default function Home() {
  return (
    <section  className="bg-overallbg w-full h-[1024px]">
      <Animate/>
      {/* about */}
      <div className="px-8">
      <div className="mt-7">
        <div className="text-[50px] font-gilroy font-bold text-vilottext">About US</div>
        <div className="flex flex-row items-center justify-between px-4">
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

      <div className="mb-12">
        <div className="text-black mt-4 text-[58px] font-bold  mb-12 text-start">services</div>
        <Card />

      </div>

      <div className="mb-12">
        <div className="text-vilottext mt-4 text-[58px] font-bold  mb-12 text-start">Our Works</div>
        <Panel/>

      </div>

      <div className="mb-60">
        <div className="text-vilottext mt-4 text-[58px] font-bold  mb-12 text-start">WhyChoose Us?</div>
        <SmartCard/>

      </div>
      <Footer />
      </div>

    </section>
  );
}
