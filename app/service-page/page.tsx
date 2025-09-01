"use client";

import React from "react";
import EmbeddedDesign from "./component/embedded_design";
import OfferInAppikorn from "./component/offer_in_appikorn";
import FirstContainer from "./component/first_container";
import useLenisScroll from "@/hooks/useLenisScroll";
import NewCard from "../landing-page/components/new-card";

//  Service Page Component
export default function ServicePage(){
  useLenisScroll();
  return (
    <>
      <div className="mx-auto bg-white">
        {/* Hero / First Section */}
        <section
          className="bg-black"
          role="region"
          aria-labelledby="service-hero"
        >
          <h1 id="service-hero" className="sr-only">
            Our Services at Appikorn
          </h1>
          <FirstContainer />
        </section>

        {/* Services Section */}
        <section
          className="bg-[#F8F8FF] px-4"
          role="region"
          aria-labelledby="service-details"
        >
          <h2 id="service-details" className="sr-only">
            Detailed Services We Provide
          </h2>

          {/* Cards with key offerings */}
          <NewCard />

          {/* Auto-sliding Offer Showcase */}
          <OfferInAppikorn />

          {/* Embedded Design Details */}
          <EmbeddedDesign />
        </section>
      </div>
    </>
  );
};


