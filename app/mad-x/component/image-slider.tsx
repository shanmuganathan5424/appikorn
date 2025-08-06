import Image from "next/image";
import "../../../styles/globals.css"; // <- Include custom CSS to hide scrollbar

export default function ImageSliderContainer() {
  return (
    <>
      <div className="bg-[#121314] w-full flex justify-center items-center overflow-x-hidden py-15 min-h-[640px]">
        <div className="flex overflow-x-auto no-scrollbar space-x-20 mx-auto">
          {/* Text */}
          <div className="flex-shrink-0 flex flex-col text-white text-center h-[550px] text-[48px] text-bold font-bold justify-center items-center pl-20">
            <h1 className="w-full">what you will </h1>
            <h1 className="w-full">
              unlock with<span className="text-[#1FE58D]"> MADX</span>
            </h1>
          </div>

          {/* Square Text1 */}
          <div className="flex-shrink-0 flex flex-col justify-between items-center border-2 border-[#7CF8A4] h-[550px] w-[840px] rounded-[12.9px] text-white p-5">
            <h1 className="text-[30.95px] font-bold text-bold text-center">
              Lorem ipsum dolor sit amet consectetur. Pellentesque.
            </h1>
            <div className="bg-green-300 h-80 w-80 rounded-xl mx-auto"></div>
            <p className=" text-[18.06px] font-medium text-[#B3CCB3]">
              Lorem ipsum dolor sit amet consectetur. Mi auctor dolor massa
              condimentum luctus tellus cursus cursus. Aliquet condimentum id
              duis scelerisque curabitur feugiat. Egestas nunc dignissim varius
              facilisi. Magna libero dolor lectus ante amet ultricies molestie
              in. In ut tincidunt cursus magna vel. Vitae lacinia netus platea
              est scelerisque pharetra quis ipsum.
            </p>
          </div>

          {/* Square Text2 */}
          <div className="flex-shrink-0 flex flex-col justify-between items-center border-2 border-[#7CF8A4] h-[550px] w-[840px] rounded-[12.9px] text-white p-5">
            <h1 className="text-[30.95px] font-bold text-bold">
              Lorem ipsum dolor sit amet consectetur. Pellentesque.
            </h1>
            <div className="bg-green-300 h-80 w-80 rounded-xl mx-auto"></div>
            <p className=" text-[18.06px] font-medium text-[#B3CCB3]">
              Lorem ipsum dolor sit amet consectetur. Mi auctor dolor massa
              condimentum luctus tellus cursus cursus. Aliquet condimentum id
              duis scelerisque curabitur feugiat. Egestas nunc dignissim varius
              facilisi. Magna libero dolor lectus ante amet ultricies molestie
              in. In ut tincidunt cursus magna vel. Vitae lacinia netus platea
              est scelerisque pharetra quis ipsum.
            </p>
          </div>

          {/* Square Text3 */}
          <div className="flex-shrink-0 flex flex-col justify-between items-center border-2 border-[#7CF8A4] h-[550px] w-[840px] rounded-[12.9px] text-white p-5">
            <h1 className="text-[30.95px] font-bold text-bold">
              Lorem ipsum dolor sit amet consectetur. Pellentesque.
            </h1>
            <div className="bg-green-300 h-80 w-80 rounded-xl mx-auto"></div>
            <p className=" text-[18.06px] font-medium text-[#B3CCB3]">
              Lorem ipsum dolor sit amet consectetur. Mi auctor dolor massa
              condimentum luctus tellus cursus cursus. Aliquet condimentum id
              duis scelerisque curabitur feugiat. Egestas nunc dignissim varius
              facilisi. Magna libero dolor lectus ante amet ultricies molestie
              in. In ut tincidunt cursus magna vel. Vitae lacinia netus platea
              est scelerisque pharetra quis ipsum.
            </p>
          </div>

          {/* Square Text4 */}
          <div className="flex-shrink-0 flex flex-col justify-between items-center border-2 border-[#7CF8A4] h-[550px] w-[840px] rounded-[12.9px] text-white p-5">
            <h1 className="text-[30.95px] font-bold text-bold">
              Lorem ipsum dolor sit amet consectetur. Pellentesque.
            </h1>
            <div className="bg-green-300 h-80 w-80 rounded-xl mx-auto"></div>
            <p className=" text-[18.06px] font-medium text-[#B3CCB3]">
              Lorem ipsum dolor sit amet consectetur. Mi auctor dolor massa
              condimentum luctus tellus cursus cursus. Aliquet condimentum id
              duis scelerisque curabitur feugiat. Egestas nunc dignissim varius
              facilisi. Magna libero dolor lectus ante amet ultricies molestie
              in. In ut tincidunt cursus magna vel. Vitae lacinia netus platea
              est scelerisque pharetra quis ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
