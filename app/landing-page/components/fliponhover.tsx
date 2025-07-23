export default function FlipOnHover() {
  return (
    <div className="group absolute top-0 left-0 flex w-full h-full overflow-hidden pointer-events-none animate-fade-in">
      {/* Left panel */}
      <div
        className="w-1/2 h-full transition-all duration-1000 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_#F8F8F8_0deg,_#AAA_0deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]"
      ></div>

      {/* Right panel mirrored */}
      <div
        className="w-1/2 h-full scale-x-[-1] transition-all duration-1000 ease-in-out
          [background:conic-gradient(from_90deg_at_50%_50%,_white_0deg,_#CCC_15deg,_#000_356.4deg)]
          mix-blend-color-dodge scale-y-[-1]"
      ></div>
    </div>
  );
}
