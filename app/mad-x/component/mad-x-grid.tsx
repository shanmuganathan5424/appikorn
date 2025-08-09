import Image from "next/image";

import { useEffect, useRef } from "react";


export default function MadxGrid() {
  return (
    <div className="bg-[#0C0D0C] px-4 py-16 sm:px-10">
      {/* Header Text */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-[20px] md:text-5xl font-semibold text-[#F5F9FE] mb-4">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-[#A6AAB5] text-[16px] md:text-[20px] leading-relaxed font-medium">
          Lorem ipsum dolor sit amet consectetur. In feugiat vivamus mauris
          dignissim et est sed scelerisque volutpat. Varius mauris eu risus in.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-[1000px] mx-auto">
        {/* CARD 1 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-black rounded-xl relative overflow-hidden h-[352px]">
  {/* Full background image */}
  <Image
    src="/mad-x/mad-x-grid/mad-x-code-Container.svg"
    alt="code container"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 z-0"
  />

  {/* Foreground content on top of image */}
  <div className="relative z-10 p-6 text-white space-y-3 h-full flex flex-col justify-end bg-black/40">
    <Image src="/mad-x/mad-x-grid/thunder.svg" alt="Icon" width={48} height={48} />
    <h2 className="text-[#F5F9FE] text-[16px] sm:text-lg font-semibold">AI-Powered Assistant</h2>
    <p className="text-[#A3A3A3] font-semibold hidden sm:block">
      Bring your ideas to life with our intelligent assistant, no coding knowledge required.
    </p>
  </div>
</div>


        {/* CARD 2 */}
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 bg-black rounded-xl flex flex-col justify-between h-[352px]">
          <div className="absolute bottom-0 p-6 text-white space-y-3">
            <Image src="/mad-x/mad-x-grid/magic-beta.svg" alt="Icon" width={48} height={48} />
            <div className="flex items-center gap-2">
              <h2 className="text-[#F5F9FE] text-[16px] sm:text-lg font-semibold">Lorem</h2>
              <span className="bg-[#18181B] text-white text-xs px-2 py-0.5 rounded-sm">BETA</span>
            </div>
            <p className="text-[#A3A3A3] font-semibold hidden sm:block">
              Lorem ipsum dolor sit amet consectetur. Sapien magna.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-4 bg-black rounded-xl flex flex-col justify-between h-[352px]">
          <Slide />
          <div className="absolute bottom-0 p-6 text-white space-y-3">
            <Image src="/mad-x/mad-x-grid/rocket.svg" alt="Icon" width={48} height={48} />
            <h2 className="text-[#F5F9FE] text-[16px] sm:text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur. Etiam est gravida.
            </h2>
            <p className="text-[#A3A3A3] font-semibold hidden sm:block">
              Lorem ipsum dolor sit amet consectetur. Blandit tincidunt ultrices sed nullam aliquam semper quisque. Eu etiam eget sed sit urna.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="relative col-span-1 sm:col-span-1 lg:col-span-2 bg-black rounded-xl flex flex-col justify-between h-[352px]">
          <div className="absolute bottom-0 p-6 text-white space-y-3">
            <Image src="/mad-x/mad-x-grid/thunder.svg" alt="Icon" width={48} height={48} />
            <h2 className="text-[#F5F9FE] text-[16px] sm:text-lg font-semibold">Lorem ipsum dolor sit</h2>
            <p className="text-[#A3A3A3] font-semibold hidden sm:block">
              Lorem ipsum dolor sit amet consectetur. Tempor ullamcorper sollicitudin ac vitae metus eget sit. Pharetra aliquet aliquam est a.
            </p>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="relative col-span-1 sm:col-span-1 lg:col-span-2 bg-black rounded-xl flex flex-col justify-between h-[352px]">
          <div className="absolute bottom-0 p-6 text-white space-y-3">
            <Image src="/mad-x/mad-x-grid/upload.svg" alt="Icon" width={48} height={48} />
            <h2 className="text-[#F5F9FE] text-[16px] sm:text-lg font-semibold">Lorem ipsum dolor sit</h2>
            <p className="text-[#A3A3A3] font-semibold hidden sm:block">
              Lorem ipsum dolor sit amet consectetur. Egestas at lacus fermentum aliquet urna morbi.
            </p>
          </div>
        </div>

        {/* CARD 6 */}
        <div className=" relative col-span-1 sm:col-span-2 lg:col-span-4 bg-black rounded-xl flex flex-col justify-between h-[352px]">
          <div className="flex justify-center items-center pt-8">
            <Image src="/mad-x/mad-x-grid/git-hub.svg" alt="GitHub" width={180} height={180} />
          </div>
          <div className="absolute bottom-0 p-6 text-white space-y-3">
            <Image src="/mad-x/mad-x-grid/thunder.svg" alt="Icon" width={48} height={48} />
            <h2 className="text-[#F5F9FE] text-[16px] sm:text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur. Amet posuere.
            </h2>
            <p className="text-[#A3A3A3] font-semibold hidden sm:block">
              Lorem ipsum dolor sit amet consectetur. Aenean posuere pulvinar varius quam ullamcorper volutpat. Sed odio viverra auctor sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Slide() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const cardsData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2z" />
          <path d="M19 11h-2a7 7 0 0 1-14 0H3a9 9 0 0 0 18 0z" />
        </svg>
      ),
      title: "Voice Recording",
      description: "Capture high-quality audio with ease and clarity."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22l1.18-7.86-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Premium Quality",
      description: "Experience the highest standards in audio and visuals."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2H6a2 2 0 0 0-2 2v16l4-4h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        </svg>
      ),
      title: "Custom Notes",
      description: "Add your personal touch with notes and highlights."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
          2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
          4.5 2.09C13.09 3.81 14.76 3 
          16.5 3 19.58 3 22 5.42 
          22 8.5c0 3.78-3.4 6.86-8.55 
          11.54L12 21.35z" />
        </svg>
      ),
      title: "Favorites",
      description: "Save and revisit your best recordings anytime."
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1;
    const interval = setInterval(() => {
      scrollContainer.scrollLeft += scrollStep;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  const Card = ({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) => (
  <div className="bg-gradient-to-t from-[#000000] to-[#334155] rounded-lg p-4 w-[80%] h-[40%] shadow-md flex flex-col gap-1 shrink-0 mt-8 ml-4 px-4">
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="text-gray-200 font-semibold">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);


  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar">
        {Array(2) // duplicate for infinite feel
          .fill(null)
          .flatMap(() => cardsData)
          .map((card, i) => (
            <Card key={i} {...card} />
          ))}
      </div>
    </div>
  );
}


