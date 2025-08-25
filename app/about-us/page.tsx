"use client"; // 

import FirstContainer from "./component/first_container";
import NumberContainer from "./component/number_container";
import IndustryPage from "./component/industry";
import useLenisScroll from "@/hooks/useLenisScroll";

export default function AboutUs() {
  useLenisScroll(); // ✅ works now

  return (
    <div className="bg-[#F8F8FF]">
      <FirstContainer />
      <NumberContainer />
      <IndustryPage />
    </div>
  );
}
