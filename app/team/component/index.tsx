"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedKits() {
  const heading = "Real Results".split(" "); // Split heading into words
  const description = `Accelerate your team’s growth with the right tools. Empower employees to 
  perform at their best, improve collaboration, and achieve measurable results together — faster, smarter, and hassle-free.`
    .split(" "); // Split description into words

  return (
    <section className=" min-h-screen w-full bg-black text-white py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-gray-300">Trusted Kits</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 font-bold">
              {heading.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-lg">
            {description.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.05 }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* CTA Buttons */}
          <div className="flex">
            <button className="px-6 py-3 rounded-full border select-none  border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition">
              See How It Works
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {/* Card 1 */}
            <div className="col-span-1 row-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/dummy-3.jpg"
                alt=""
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border col-span-2 row-span-2 border-white/10 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/dummy-2.jpg"
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 col-span-2 h-full col-row-2 border border-white/10 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Fast & Reliable WORK
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  employees to perform at their best, improve collaboration, and achieve measurable results
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 col-row-2 border h-full border-white/10 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/dummy-2.jpg"
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
