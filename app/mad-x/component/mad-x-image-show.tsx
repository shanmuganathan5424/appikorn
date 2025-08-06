import Image from "next/image";

export default function MadxImage() {
  return (
    <>
      <div className="bg-[#0C0D0C] pt-10 p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[46.83px] font-semibold leading-[56.2px] text-[#F5F9FE] pb-5">
            Lorem ipsum dolor sit
          </h1>
          <p className="text-[#A6AAB5] text-[15.05px] leading-[24.08px] font-medium text-center w-[600px] pb-10">
            Lorem ipsum dolor sit amet consectetur. In feugiat vivamus mauris
            dignissim et est sed scelerisque volutpat. Varius mauris eu risus
            in.
          </p>
          <div className="bg-[#32F08C] text-black flex px-6 py-2 space-x-1.5">
            <Image
              src="/mad-x/mad-x-grid/thunder.svg"
              alt="Magic_Icon"
              height={18}
              width={18}
            ></Image>
            <p className="text-[12px]">Explore MADX</p>
          </div>
          <Image
            src="/mad-x/mad-x-Background.svg"
            alt="Magic_Icon"
            height={809.2391357421875}
            width={1284.47998046875}
            className="pt-18"
          ></Image>
        </div>
      </div>
    </>
  );
}
