"use client";

import TopNavBar from "@/global-component/navigation";
import Home from "./component/home";
import AiFrame from "./component/ai-video";
import MadxCard from "./component/card";
import PrivacySection from "./component/privacy-security";
import FooterP from "./component/footer";
import MadxImage from "./component/mad-x-image-show";
import MadxGrid from "./component/mad-x-grid";
import ImageSliderContainer from "./component/image-slider";
import SlidingImage from "./component/slideing-card";

export default function MadX() {
  return (
    <div className="relative w-full bg-[#0C0D0C] text-white overflow-x-hidden">
      {/* Background Green Gradient */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <div
          className="w-[580px] h-[580px] rounded-full blur-[250px] -translate-y-44"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #73FFA0 0%, #459960 100%)",
          }}
        />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 px-4">
        <TopNavBar />
      </div>

      {/* Sections */}
      <div className="relative z-10">
        <Home />
        <AiFrame />
        <MadxCard />
        <ImageSliderContainer />
        <MadxGrid />
        <MadxImage />
        <SlidingImage />
        <PrivacySection />
        
      </div>
    </div>
  );
}
