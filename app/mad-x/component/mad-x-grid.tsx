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
            fill
            priority
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-0"
          />

          {/* Foreground content */}
          <div className="relative z-10 p-6 text-white space-y-3 h-full flex flex-col justify-end bg-black/40">
            <Image src="/mad-x/mad-x-grid/thunder.svg" alt="Icon" width={48} height={48} />
            <h2 className="text-[#F5F9FE] text-[16px] sm:text-lg font-semibold">
              AI-Powered Assistant
            </h2>
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
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-4 bg-black rounded-xl flex flex-col justify-between h-[352px]">
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
    { title: "Voice Recording", description: "Capture high-quality audio with ease and clarity.", color: "text-blue-500" },
    { title: "Premium Quality", description: "Experience the highest standards in audio and visuals.", color: "text-green-500" },
    { title: "Custom Notes", description: "Add your personal touch with notes and highlights.", color: "text-yellow-500" },
    { title: "Favorites", description: "Save and revisit your best recordings anytime.", color: "text-red-500" }
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = () => {
      if (el) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  const Card = ({ title, description, color }: { title: string; description: string; color: string }) => (
    <div className="bg-gradient-to-t from-[#000000] to-[#334155] rounded-lg p-4 w-[80%] h-[40%] shadow-md flex flex-col gap-1 shrink-0 mt-8 ml-4 px-4">
      <div className="flex items-center gap-2">
        <span className={`w-5 h-5 ${color}`}>●</span>
        <h3 className="text-gray-200 font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar">
        {[...Array(2)].flatMap(() => cardsData).map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  );
}
