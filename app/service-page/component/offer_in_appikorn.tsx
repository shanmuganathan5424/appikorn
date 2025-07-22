import Image from "next/image";
import React from "react";
import Page1 from "../../../public/photo1.jpg";

const OfferInAppikorn = () => {
  return (
    <>
      <div className="bg-white py-20 place-items-center flex">
        <div className="w-[688px] h-[600px] bg-indigo-300 rounded-lt-2xl rounded-lb-2xl">
          <Image
            className="w-[688px] h-[600px]"
            src={Page1}
            alt="Photo1"
          ></Image>
        </div>

        <div className="w-[688px] h-[600px] bg-white text-black rounded-rt-2xl rounded-rb-2xl">
          <h1 className="h-[72] w-[400] text-bold text-[48px]">
            Embedded Design
          </h1>
          <p className="text-[24px] pt-20">
            Lorem ipsum dolor sit amet consectetur. Vitae justo nullam eleifend
            dui nibh in ac velit egestas. Libero et massa donec ullamcorper. A
            elementum rhoncus nisl id penatibus massa. At sit eget dapibus porta
            cras arcu vitae. Sed semper auctor vivamus malesuada. Tempus
            bibendum tincidunt lorem et nunc urna. Lacus facilisi.Lorem ipsum
            dolor sit amet consectetur. Vitae justo nullam eleifend dui nibh in
            ac velit egestas. Libero et massa donec ullamcorper.
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferInAppikorn;
