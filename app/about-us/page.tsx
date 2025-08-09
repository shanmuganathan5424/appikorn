import TopNavBar from "@/global-component/navigation";
import FirstContainer from "./component/first_container";
import Footer from "@/global-component/footer";
import NumberContainer from "./component/number_container";
import IndustryPage from "./component/industry";

export default function AboutUs() {
  return (
    <>
      <div className="w-full bg-purple1 mx-auto flex justify-center z-40">
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
