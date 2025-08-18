export default function WaveTop() {
  return (
     // w-1440 h-540     className="w-full h-[150px] md:h-[300px] lg:h-[540px]"
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
    fill="#150433"
    filter="url(#topPurpleShadow)"
  />
</svg>


  {/* Footer Note */}
      <p className="absolute bottom-40 left-1/2 -translate-1/2 mt-16 text-gray-400 text-sm">
        Madx - Developed from Appikorn
      </p>
</div>
   



  );
}
