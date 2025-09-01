import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Side - Image & About Text */}
      <div className="flex-1 space-y-6">
        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium">
          About Us
        </button>
        <p className="text-gray-600 leading-relaxed">
          Our mission and vision is range of tailored services designed to meet
          your needs.
        </p>

        {/* Image Card */}
        <div className="bg-gray-50 rounded-2xl p-6 relative shadow-sm w-fit">
          <img
            src="/portfolio/portfolio-project-image/beema.webp"
            alt="img"
            className="rounded-lg w-48 h-48 object-cover"
          />
          
          <p className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
            Since 20+ years.
          </p>
        </div>
      </div>

      {/* Right Side - Text & Stats */}
      <div className="flex-1 space-y-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-serif leading-snug">
          With over <span className="font-bold">25 years</span> of expertise,
          we specialize in crafting unique digital experiences that leave a
          lasting impact.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold">12m+</h3>
            <p className="text-gray-500 text-sm">Customer</p>
          </div>
          <div className="bg-[#4B2E20] text-white rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-sm">Strategic Plan</p>
          </div>
          <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold">99%</h3>
            <p className="text-gray-500 text-sm">Client Satisfied</p>
          </div>
          <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-gray-500 text-sm">Our Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
