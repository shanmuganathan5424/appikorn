// app/components/PrivacySection.tsx
import Image from "next/image";

export default function PrivacySection() {
  return (
    <section className="bg-[#111] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacy and Security</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Fermentum sed aliquam gravida feugiat erat sed pretium sit. 
          Sagittis nibh enim ac lacus. Vitae pulvinar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col items-start gap-[58.83px] p-6 pr-12 rounded-[20px] bg-[rgba(237,239,242,0.04)] max-w-[425.667px] min-h-[240px]"
            >
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Lorem ipsum dolor</h3>
                <p className="text-gray-400 text-sm mb-4 text-start">
                  Lorem ipsum dolor sit amet consectetur. Mi nunc rhoncus orci vel posuere dui rhoncus risus dignissim.
                  Fames eget est pellentesque ullamcorper eget sit.
                </p>
                <Image
                  src="/mad-x/privacy.svg"
                  alt="Privacy icon"
                  width={24}
                  height={24}
                  className="text-green-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
