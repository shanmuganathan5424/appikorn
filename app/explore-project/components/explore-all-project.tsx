
"use client";

import Image from "next/image";

export default function ExploreAll() {
  return (
    <section className="relative w-full h-[250px] sm:h-[450px] rounded-xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <Image
        src="/images/deer.jpg" // replace with your image path
        alt="Wildlife Adventure"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center px-6 sm:px-12 text-white">
        <h1 className="text-2xl sm:text-4xl font-extrabold max-w-lg leading-snug">
          EXPLORE OUR PROJECT WITH SOLID IDEAS
        </h1>
        <p className="mt-3 text-sm sm:text-lg max-w-md">
          Discover innovations, designs, and powerful concepts shaping the future.
        </p>
        
        <button className="mt-5 w-fit px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base rounded-lg transition-all">
          EXPLORE ALL →
        </button>
      </div>

      {/* Bottom Right Text */}
      <p className="absolute bottom-4 right-6 text-white italic font-medium text-lg">
        Innovation
      </p>
    </section>
  );
}
