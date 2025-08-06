import Image from "next/image";

export default function MadxGrid() {
  return (
    <>
      <div className="bg-[#0C0D0C] p-10">
        {/* Text */}
        <div className="flex flex-col items-center">
          <h1 className="text-[46.83px] font-semibold leading-[56.2px] text-[#F5F9FE] pb-5">
            Lorem ipsum dolor sit
          </h1>
          <p className="text-[#A6AAB5] text-[15.05px] leading-[24.08px] font-medium text-center w-[600px] pb-25">
            Lorem ipsum dolor sit amet consectetur. In feugiat vivamus mauris
            dignissim et est sed scelerisque volutpat. Varius mauris eu risus
            in.
          </p>
        </div>

        {/* Grid  */}
        <div className="grid grid-cols-6 w-[70%] h-[1088px] mx-auto gap-3">
          {/* Grid 1 */}
          <div className="col-span-4 bg-black rounded-xl h-[352px]">
            <div className="h-[50%] flex justify-center items-center pt-10">
              {/* <Image
                src="/mad-x/mad-x-grid/git-hub.svg"
                alt=""
                height={180}
                width={180}
              ></Image> */}
            </div>
            <div className="h-[50%] text-white flex flex-col justify-center">
              <div className="flex flex-col p-10 items-start space-y-1">
                <Image
                  src="/mad-x/mad-x-grid/thunder.svg"
                  alt="Magic_Icon"
                  height={48}
                  width={48}
                ></Image>
                <div className="flex items-start justify-center">
                  <h1 className="text-[#404040] text-[19px] pr-2 flex justify-center items-start font-semibold">
                    AI-Powered Assistant
                  </h1>
                </div>

                <p className="text-[#A3A3A3] font-semibold">
                  Bring your ideas to life with our intelligent assistant, no
                  coding knowledge required.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 2 */}
          <div className="col-span-2 bg-black rounded-xl h-[352px]">
            <div className="h-[50%]"></div>
            <div className="h-[50%] text-white flex flex-col justify-end">
              <div className="flex flex-col p-10">
                <Image
                  src="/mad-x/mad-x-grid/magic-beta.svg"
                  alt="Magic_Icon"
                  height={48}
                  width={48}
                ></Image>
                <div className="flex mx-auto items-center justify-center">
                  <h1 className="text-[#404040] text-[19px] pr-2 flex justify-center items-center font-semibold">
                    Lorem
                  </h1>
                  <div className="bg-[#18181B] w-8 h-5 rounded-sm flex justify-center items-center">
                    <p className=" text-center text-white text-[10px]">BETA</p>
                  </div>
                </div>

                <p className="p-2 text-[#A3A3A3] font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Sapien magna.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 3 */}
          <div className="col-span-4 bg-black rounded-xl h-[352px]">
            <div className="h-[50%] flex justify-center items-center pt-10">
              {/* <Image
                src="/mad-x/mad-x-grid/git-hub.svg"
                alt=""
                height={180}
                width={180}
              ></Image> */}
            </div>
            <div className="h-[50%] text-white flex flex-col justify-center">
              <div className="flex flex-col p-10 items-start space-y-1">
                <Image
                  src="/mad-x/mad-x-grid/rocket.svg"
                  alt="Magic_Icon"
                  height={48}
                  width={48}
                ></Image>
                <div className="flex items-start justify-center">
                  <h1 className="text-[#404040] text-[19px] pr-2 flex justify-center items-start font-semibold">
                    Lorem ipsum dolor sit amet consectetur. Etiam est gravida.
                  </h1>
                </div>

                <p className="text-[#A3A3A3] font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Blandit tincidunt
                  ultrices sed nullam aliquam semper quisque. Eu etiam eget sed
                  sit urna.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 4 */}
          <div className="col-span-2 bg-black rounded-xl h-[352px]">
            <div className="h-[50%]"></div>
            <div className="h-[50%] text-white flex flex-col justify-end items-start">
              <div className="flex flex-col p-10 items-start space-y-1">
                <Image
                  src="/mad-x/mad-x-grid/thunder.svg"
                  alt="Magic_Icon"
                  height={48}
                  width={48}
                ></Image>
                <div className="flex items-start justify-center">
                  <h1 className="text-[#404040] text-[19px] pr-2 flex justify-center items-start font-semibold">
                    Lorem ipsum dolor sit
                  </h1>
                </div>

                <p className="text-[#A3A3A3] font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Tempor ullamcorper
                  sollicitudin ac vitae metus eget sit. Pharetra aliquet aliquam
                  est a.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 5 */}
          <div className="col-span-2 bg-black rounded-xl h-[352px]">
            <div className="h-[50%] flex justify-center items-center pt-10">
              {/* <Image
                src="/mad-x/mad-x-grid/git-hub.svg"
                alt=""
                height={180}
                width={180}
              ></Image> */}
            </div>
            <div className="h-[50%] text-white flex flex-col justify-center">
              <div className="flex flex-col p-10 items-start space-y-1">
                <Image
                  src="/mad-x/mad-x-grid/upload.svg"
                  alt="Magic_Icon"
                  height={48}
                  width={48}
                ></Image>
                <div className="flex items-start justify-center">
                  <h1 className="text-[#404040] text-[19px] pr-2 flex justify-center items-start font-semibold">
                    Lorem ipsum dolor sit
                  </h1>
                </div>

                <p className="text-[#A3A3A3] font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Egestas at lacus
                  fermentum aliquet urna morbi.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 6 */}
          <div className="col-span-4 bg-black rounded-xl h-[352px]">
            <div className="h-[50%] flex justify-center items-center pt-10">
              <Image
                src="/mad-x/mad-x-grid/git-hub.svg"
                alt=""
                height={180}
                width={180}
              ></Image>
            </div>
            <div className="h-[50%] text-white flex flex-col justify-center">
              <div className="flex flex-col p-10 items-start space-y-1">
                <Image
                  src="/mad-x/mad-x-grid/thunder.svg"
                  alt="Magic_Icon"
                  height={48}
                  width={48}
                ></Image>
                <div className="flex items-start justify-center">
                  <h1 className="text-[#404040] text-[19px] pr-2 flex justify-center items-start font-semibold">
                    Lorem ipsum dolor sit amet consectetur. Amet posuere.
                  </h1>
                </div>

                <p className="text-[#A3A3A3] font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Aenean posuere
                  pulvinar varius quam ullamcorper volutpat. Sed odio viverra
                  auctor sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
