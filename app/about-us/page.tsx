import TopNavBar from "@/global-component/navigation";
import FirstContainer from "./component/first_container";
import Footer from "@/global-component/footer";
import NumberContainer from "./component/number_container";
import IndustryPage from "./component/industry";

export default function AboutUs() {
  return (
    <>
      <div className="w-[1440px] bg-purple1 mx-auto flex justify-center">
        <TopNavBar />
      </div>
      <div className="bg-[#F8F8FF]">
      <FirstContainer />
      <NumberContainer />
      <IndustryPage />
      </div>
      
    </>
  );
}
