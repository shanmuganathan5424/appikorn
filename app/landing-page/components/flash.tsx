export default function FlashLight() {
  return (
  <div className="h-screen w-full flex items-center justify-center">
      <div className="relative w-full max-w-6xl h-[60vh] rounded-xl overflow-hidden flex items-center justify-center">
        {/* Angular Gradient Background */}
        <div className="absolute inset-0 angular-gradient blur-xl opacity-80 z-0"></div>

        {/* Thicker Neon Line (Left Half Only) */}
        <div className="absolute top-1/2 left-0 w-1/2 h-[4px] bg-white shadow-[0_0_60px_20px_white] z-10 transform -translate-y-1/2" />
      </div>
    </div>
  );
}