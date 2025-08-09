import TopNavBar from "@/global-component/navigation";
import FirstContainer from "./component/first_container";
import Footer from "@/global-component/footer";
import NumberContainer from "./component/number_container";
import IndustryPage from "./component/industry";

export default function AboutUs() {
  return (
    <div>
      
      
      <div className="bg-[#F8F8FF] relative top-0 ">
      <FirstContainer />
      <NumberContainer />
      <IndustryPage />
      </div>
      
    </div>
  );
}
