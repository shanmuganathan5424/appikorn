export default function AiFrame() {
    return (
        <div>

            <div className="bg-madxgrey w-full flex flex-col items-center justify-center text-white px-auto py-10 relative">

        {/* Tagline */}
        <div className="text-center mb-[88px]">
            <div className="text-sm uppercase tracking-widest mb-2 bg-clip-text text-transparent font-medium md-[18px]"
            style={{
            backgroundImage: "linear-gradient(90deg, #3EE1A3 0%, #32F08C 36%, #60F2BD 71.63%, #A0FDE7 100%)"
            }}
            >
                Introducing Madx
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
                The Smartest Way To Build With AI
            </h1>
        </div>

            {/* Transparent box */}
            <div className="w-full max-w-[1000px] h-[500px] px-3 rounded-[40px] bg-white bg-opacity-5 backdrop-blur-md border border-white/10 shadow-[0_0_80px_0_#17C96433]">
                {/* You can add content inside here */}
            </div>
        </div>
        </div>
 
    );
}