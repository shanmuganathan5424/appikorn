import TopNavBar from "@/global-component/navigation";
import FirstContainer from "./component/first_container";
import Footer from "@/global-component/footer";
import NumberContainer from "./component/number_container";
import IndustryPage from "./component/industry";
import LandingAboutUs from "../landingAboutUs";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#F8F8FF]">
        <FirstContainer />
        <NumberContainer />
        <IndustryPage />
        <LandingAboutUs />
      </div>
    </>
  );
}
