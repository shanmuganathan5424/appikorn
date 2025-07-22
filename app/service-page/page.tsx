import Footer from "@/global-component/footer";
import React from "react";
import EmbeddedDesign from "./component/embedded_design";
import OfferInAppikorn from "./component/offer_in_appikorn";

const ServicePage = () => {
  return (
    <div className="px-25">
      <h1>Service Page</h1>
      <OfferInAppikorn />
      <EmbeddedDesign />
      <Footer />
    </div>
  );
};

export default ServicePage;
