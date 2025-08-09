export default function AiFrame() {
  return (
    <div className="bg-madxgrey w-full flex flex-col items-center justify-center text-white px-4 sm:px-6 py-10 relative gap-6 sm:gap-10">
      {/* Tagline */}
      <div className="text-center flex flex-col justify-center gap-2 sm:gap-4">
        <div
          className="uppercase tracking-widest mb-2 font-medium text-xs sm:text-sm md:text-base lg:text-lg bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #3EE1A3 0%, #32F08C 36%, #60F2BD 71.63%, #A0FDE7 100%)",
          }}
        >
          Introducing Madx
        </div>

        {/* Heading */}
        <h1 className="text-[20px] sm:text-3xl md:text-5xl font-bold text-center  leading-tight">
          The Smartest Way To Build With AI
        </h1>
      </div>

      {/* Transparent box */}
      <div className="w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] px-3 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-white bg-opacity-5 backdrop-blur-md border border-white/10 shadow-[0_0_80px_0_#17C96433] flex items-center justify-center">
        {/* You can add content here */}
      </div>
    </div>
  );
}
