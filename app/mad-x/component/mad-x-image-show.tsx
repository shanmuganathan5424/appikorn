import Image from "next/image";

export default function MadxImage() {
  return (
    <div className="bg-[#0C0D0C] pt-10 px-5 sm:px-10 lg:px-20">
      <div className="flex flex-col items-center max-w-[1200px] mx-auto">
        <h1 className="text-[20px] sm:text-[36px] md:text-[46.83px] font-semibold leading-[1.2] text-[#F5F9FE] pb-5 text-center">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-[#A6AAB5] text-[14px] sm:text-[16px] leading-[1.5] font-medium text-center max-w-[90vw] sm:max-w-[600px] pb-10">
          Lorem ipsum dolor sit amet consectetur. In feugiat vivamus mauris dignissim et est sed scelerisque volutpat. Varius mauris eu risus in.
        </p>
        <div className="bg-[#32F08C] text-black flex items-center px-4 sm:px-6 py-2 space-x-2 rounded">
          <Image
            src="/mad-x/mad-x-grid/thunder.svg"
            alt="Magic_Icon"
            height={18}
            width={18}
            priority={true}
          />
          <p className="text-[12px] sm:text-[14px] font-semibold">Explore MADX</p>
        </div>

        <div className="w-full max-w-full mt-10 relative" style={{ aspectRatio: "1284 / 809" }}>
          <Image
            src="/mad-x/mad-x-Background.svg"
            alt="Magic Background"
            fill
            className="object-contain"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
