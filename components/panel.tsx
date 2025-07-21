export default function Panel() {
  return (
  <div className="flex w-full h-[500px] rounded-[20px] overflow-hidden">
  {/* Panel 1 */}
  <div className="group relative flex-1 hover:flex-[4]  transition-all duration-500 ease-in-out bg-[#a75e1b] flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px]">
    <h2 className="text-[58px] font-bold z-10">01</h2>

    <div className="absolute inset-0 flex items-start justify-start z-10 opacity-30 transition-all duration-700 ease-in-out group-hover:items-center group-hover:justify-center">
    <img 
      src="/panel/center-image/01.svg"
      alt="Robot"
      className="w-[287px] h-[509px] object-cover mix-blend-overlay transition-all duration-700"
    />
  </div>

    <div className="z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-[40px] leading-[40px] font-bold">JuzAI Powered Intelligence Document Management</h3>
      <p className="text-[16px] leading-5 mt-4">Lorem ipsum dolor sit amet consectetur. Ac aliquam tellus tristique imperdiet in vitae elit platea ullamcorper. Curabitur malesuada feugiat in morbi faucibus proin ipsum tellus a. Euismod eget odio eu ac aliquam. Nisl bibendum tellus ipsum lectus ut odio ut lorem donec. Maecenas diam amet at sapien. Nulla eu leo venenatis ultrices. Ornare sem velit auctor.</p>

        {/* review */}

      <p className="mt-4 text-[16px leading-4]">Creators</p>

      <div className="flex flex-row gap-3">

        <div className="mt-2 flex -space-x-2">
            <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-1.png" />
            <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-4.png" />
            <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-3.png" />
            <img className="w-8 h-8 rounded-full" src="/panel/review/Ellipse-2.png" />
        </div>
        <div>
            <img className="mt-2 w-[100px] h-8 rounded-full" src="/panel/review/Line-arrow.svg" />
        </div>
      </div>
    </div>
    
    {/* bg image */}

    <div className=""></div>

  </div>

  {/* Repeat for Panels 2 to 5 */}
  <div className="group relative flex-1 hover:flex-[4]  transition-all duration-500 ease-in-out bg-[#4b1d10] flex items-center justify-center cursor-pointer">
    <h2 className="text-5xl font-bold text-white z-10">02</h2>
    <img src="/images/vending.png" alt="Vending" className="absolute bottom-0 object-contain h-full z-0" />
  </div>

  <div className="group relative flex-1 hover:flex-[4]  transition-all duration-500 ease-in-out bg-[#cc2c5b] flex items-center justify-center cursor-pointer">
    <h2 className="text-5xl font-bold text-white z-10">03</h2>
    <img src="/images/girl.png" alt="Girl" className="absolute bottom-0 object-contain h-full z-0" />
  </div>

  <div className="group relative flex-1 hover:flex-[4]  transition-all duration-500 ease-in-out bg-[#c69525] flex items-center justify-center cursor-pointer">
    <h2 className="text-5xl font-bold text-white z-10">04</h2>
    <img src="/images/boy.png" alt="Boy" className="absolute bottom-0 object-contain h-full z-0" />
  </div>

  <div className="group relative flex-1 hover:flex-[4]  transition-all duration-500 ease-in-out bg-[#9d55cd] flex items-center justify-center cursor-pointer">
    <h2 className="text-5xl font-bold text-white z-10">05</h2>
    <img src="/images/doctor.png" alt="Doctor" className="absolute bottom-0 object-contain h-full z-0" />
  </div>
</div>

  );
}
