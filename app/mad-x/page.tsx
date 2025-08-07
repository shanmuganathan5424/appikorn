import TopNavBar from "@/global-component/navigation";
import Home from "./component/home";
import AiFrame from "./component/ai-video";
import MadxCard from "./component/card";
import PrivacySection from "./component/privacy-security";
import FooterP from "./component/footer";
import MadxImage from "./component/mad-x-image-show";
import MadxGrid from "./component/mad-x-grid";
import ImageSliderContainer from "./component/image-slider";

export default function MadX() {
  return (
    <div className="relative bg-[#0C0D0C] w-full min-h-screen text-white">
      {/* green gradient */}
      <div className="absolute inset-0 flex justify-center z-0">
        <div
          className="w-[580px] h-[580px] rounded-full blur-[250px] -translate-y-44"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #73FFA0 0%, #459960 100%)",
          }}
        />
      </div>
      {/* end gradient */}

      {/* Top Navbar */}
      <div className="z-10 relative w-full mx-auto px-4">
        <TopNavBar />
      </div>

      {/* Home Section */}
      <div className="z-10 relative flex flex-col items-center justify-center ">
        <Home />
      </div>

      <div>
        <AiFrame />
    </div>

    <div>
        <MadxCard />
    </div>

    <div><ImageSliderContainer /></div>


    <div><MadxGrid /></div>

    <div><MadxImage /></div>

    <div>
        <PrivacySection />
    </div>

    </div>
  );
}
