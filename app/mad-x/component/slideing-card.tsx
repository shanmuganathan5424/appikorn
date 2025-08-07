export default function SlidingImage() {
  return (
    <>
      <div className="bg-[#121314] pt-10 p-10">
        {/* Text */}
        <div className="flex flex-col items-center">
          <h1 className="text-[46.83px] font-semibold leading-[56.2px] text-[#F5F9FE] pb-5">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-[#A6AAB5] text-[15.05px] leading-[24.08px] font-medium text-center w-[600px] pb-25">
            Lorem ipsum dolor sit amet consectetur. At mauris lorem volutpat et
            ullamcorper sit eget. Duis eleifend bibendum cursus praesent diam
            posuere ac.
          </p>
        </div>
        <div className="h-[1024px] border-2 border-white flex flex-col">
          <div className="flex flex-row justify-end pt-5 pr-5 space-x-4">
            <div className="bg-[#EDEFF22E] h-8 w-8 flex items-center justify-center">
              <span className="text-4xl font-bold">←</span>
            </div>
            <div className="bg-[#EDEFF22E] h-10 w-10 flex items-center justify-center">
              <span className="text-4xl font-bold">→</span>
            </div>
          </div>
          <div className="flex flex-row"></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
