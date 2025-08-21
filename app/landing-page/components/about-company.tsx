"use client";

import ShapeOne from "@/components/ShapeOne";
import ShapeTwo from "@/components/ShapeTwo";

export default function Page() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20">
      
      {/* Left Section - Text Content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Secure & Easy-to-Use <span className="text-indigo-500">Crypto Wallet</span>
        </h1>
        <p className="text-lg text-gray-600">
          Store, send, and receive cryptocurrencies with confidence.  
          Manage your digital assets effortlessly with full security.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold shadow-md hover:bg-indigo-600 transition">
            Get Started →
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-400 font-semibold hover:border-indigo-500 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section - Shapes */}
      <div className="relative flex items-center justify-center mt-16 lg:mt-0">
        {/* ShapeOne in front */}
        <div className="absolute -top-12 -left-12">
          <ShapeOne className="w-[350px] h-[350px] text-indigo-400" />
          <div className="absolute inset-0 flex items-center justify-center text-black font-bold">
            Card One
          </div>
        </div>

        {/* ShapeTwo behind */}
        <div className="relative">
          <ShapeTwo className="w-[400px] h-[400px] text-green-400" />
          <div className="absolute inset-0 flex items-center justify-center text-black font-bold">
            Card Two
          </div>
        </div>
      </div>
    </section>
  );
}
