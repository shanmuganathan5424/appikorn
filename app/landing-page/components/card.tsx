export default function Card() {
  return (
    <section className="bg-gray-50 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* <!-- Service Card --> */}
      <div className="flex flex-col items-center gap-[10px] w-[373.333px] flex-shrink-0 p-6 bg-white rounded-2xl drop-shadow-2xl">
        <div className="w-[67px] h-[67px] mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-4">
          <img src="/service-icon/cloud.svg" alt="Cloud Services Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-[27.36px] font-semibold text-gray-900">Cloud Services</h3>
        <p className="text-gray-600 mt-2 text-center text-[19.55px]">Delivering secure and scalable cloud solutions.</p>
      </div>

      {/* <!-- UI/UX Designer --> */}
      <div className="flex flex-col items-center gap-[10px] w-[373.333px] flex-shrink-0 p-6 bg-white rounded-2xl drop-shadow-2xl">
        <div className="w-[67px] h-[67px] mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-4">
          <img src="/service-icon/cloud.svg" alt="UI/UX Designer Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-[27.36px] font-semibold text-gray-900">UI/UX Designer</h3>
        <p className="text-gray-600 mt-2 text-center text-[19.55px]">Crafting intuitive and engaging user experiences.</p>
      </div>

      {/* <!-- Product Design --> */}
      <div className="flex flex-col items-center gap-[10px] w-[373.333px] flex-shrink-0 p-6 bg-white rounded-2xl drop-shadow-2xl">
        <div className="w-[67px] h-[67px] mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-4">
          <img src="/service-icon/product.svg" alt="Product Design Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-[27.36px] font-semibold text-gray-900">Product Design</h3>
        <p className="text-gray-600 mt-2 text-center text-[19.55px]">Designing products users love.</p>
      </div>

      {/* QA & Testing */}
      <div className="flex flex-col items-center gap-[10px] w-[373.333px] flex-shrink-0 p-6 bg-white rounded-2xl drop-shadow-2xl">
        <div className="w-[67px] h-[67px] mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-4">
          <img src="/service-icon/qa.svg" alt="QA & Testing Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-[27.36px] font-semibold text-gray-900">QA & Testing</h3>
        <p className="text-gray-600 mt-2 text-center text-[19.55px]">Ensuring quality, reliability, and performance.</p>
      </div>

      {/* <!-- Web Development --> */}
      <div className="flex flex-col items-center gap-[10px] w-[373.333px] flex-shrink-0 p-6 bg-white rounded-2xl drop-shadow-2xl">
        <div className="w-[67px] h-[67px] mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-4">
          <img src="/service-icon/dev.svg" alt="Web Development Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-[27.36px] font-semibold text-gray-900">Web Development</h3>
        <p className="text-gray-600 mt-2 text-center text-[19.55px]">Building fast, scalable platforms.</p>
      </div>

      {/* <!-- VR/AR Technology --> */}
      <div className="flex flex-col items-center gap-[10px] w-[373.333px] flex-shrink-0 p-6 bg-white rounded-2xl drop-shadow-2xl">
        <div className="w-[67px] h-[67px] mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-4">
          <img src="/service-icon/vr.svg" alt="VR/AR Technology Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-[27.36px] font-semibold text-gray-900">VR/AR Technology</h3>
        <p className="text-gray-600 mt-2 text-center text-[19.55px]">Creating immersive digital worlds.</p>
      </div>

    </div>
  </div>
</section>


  );
}
