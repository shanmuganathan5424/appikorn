
import React from "react";
import EmbeddedDesign from "./component/embedded_design";
import OfferInAppikorn from "./component/offer_in_appikorn";

import FirstContainer from "./component/first_container";
import TopNavBar from "@/global-component/navigation";
import Card from "@/global-component/card";

const ServicePage = () => {
  return (
    <>
      <div className="mx-auto bg-white max-w-custom">
        <div className="bg-purple1 text-white">
          <TopNavBar />
        </div>

        <div className="bg-white">
          <FirstContainer />
        </div>
        <div className="bg-[#F8F8FF] px-15">
          <Card />
          <OfferInAppikorn />
          <EmbeddedDesign />
        </div>
        <div>{/* <Footer /> */}</div>
      </div>
    </>
  );
};

export default ServicePage;
