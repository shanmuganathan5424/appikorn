import TopNavBar from "@/global-component/navigation";

export default function Animate() {
  return (
    <div className="relative w-full h-[1024px] [background:linear-gradient(180deg,_#08081F_-0.4%,_rgba(8,8,31,0)_39.6%,_#08081F_79.6%)]">
        <div className="mx-0 relative bg-darkblue w-full h-[1024px] flex flex-col items-center " >

            <TopNavBar />

            <div className="text-center text-[280px] font-anton font-light bg-[linear-gradient(to_top,_#FFF5F5,_#2A2AFF)] bg-clip-text text-transparent tracking-[7px]">
            APPIKORN
            </div>

            <div className="absolute top-0 left-0 flex flex-row w-full h-[1024px] justify-start items-start">
                <div className="w-1/2 h-[1024px] 
                [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)] 
                mix-blend-color-dodge">
                </div>
                <div className="w-1/2 h-[1024px] 
                [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)] 
                mix-blend-color-dodge 
                -scale-x-100">
                </div>
            </div>






            <div className="absolute bottom-0 "><img src="/landing/landing_image.png" alt="landing" width={1200} height={750}  /></div>

        </div>
    </div>
  );
}