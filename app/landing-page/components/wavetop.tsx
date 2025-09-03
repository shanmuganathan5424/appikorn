export default function WaveTop() {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -80 1440 600"
        fill="none"
        className="w-full h-[100px] md:h-[200px] lg:h-[450px]"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="topPurpleShadow" x="-50%" y="-100%" width="200%" height="300%">
            <feDropShadow dx="0" dy="-12" stdDeviation="20" floodColor="#8B5CF6" />
          </filter>
        </defs>
        <path
          d="M0 0C0 0 416.464 174.721 717.997 175.076C1019.53 175.43 1440 0 1440 0V540H0V0Z"
          fill="#000000"
          filter="url(#topPurpleShadow)"
        />
      </svg>

      {/* Footer Note */}
      <p className="w-full absolute top-1/2 -translate-y-1/5 mt-16 text-gray-400 text-[12px] sm:text-sm text-center">
        Madx - Developed from Appikorn
      </p>
    </div>
  );
}
