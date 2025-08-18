
export default function PurpleStar() {
  return (

<div className="relative w-full h-screen overflow-hidden flex items-center justify-center">

  {/* Glowing SVG Star */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="26"
    viewBox="0 0 92 96"
    fill="none"
    className="absolute animate-pulse drop-shadow-[0_0_20px_#6A0DAD] z-10"
    style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }}
  >
    {/* Glow Filter */}
    <defs>
      <filter id="largePurpleShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#6A0DAD" floodOpacity="1" />
      </filter>
    </defs>

    {/* Main Shape */}
    <path
      d="M46 0C46 0 50.4689 23.011 60.3118 33.0659C69.8817 42.842 92 48 92 48C92 48 69.8817 53.158 60.3118 62.9341C50.4689 72.989 46 96 46 96C46 96 41.5311 72.989 31.6882 62.9341C22.1183 53.158 0 48 0 48C0 48 22.1183 42.842 31.6882 33.0659C41.5311 23.011 46 0 46 0Z"
      fill="#6A0DAD"
      filter="url(#largePurpleShadow)"
    />
  </svg>
</div>
  );
}
