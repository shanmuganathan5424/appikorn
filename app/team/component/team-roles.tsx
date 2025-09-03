"use client";
import React from "react";

export default function TeamRoles() {
  return (
    <section
      className="bg-black py-12 px-6"
      aria-labelledby="our-team-heading"
    >
      {/* Section Heading */}
      <div className="text-center pb-10">
        <h2
          id="our-team-heading"
          className="text-3xl font-bold text-white"
        >
          Our Team
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          Our team works together to design, develop, and deliver solutions that
          blend innovation, technology, and creativity. With expertise across
          research, development, and design, we turn ideas into impactful
          results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Row 1 */}
        <article
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          aria-labelledby="research-development-heading"
        >
          <div className="md:col-span-2">
            <img
              src="/dummy-image/dummy-2.webp"
              alt="Team working on Research and Development projects"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:col-span-1 flex flex-col justify-center">
            <h4 className="text-sm uppercase tracking-wide text-gray-400">
              Our Focus
            </h4>
            <h3
              id="research-development-heading"
              className="text-2xl font-semibold mt-1 text-white"
            >
              Research & Development
            </h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              Our Research and Development team constantly explores new
              technologies and methodologies to innovate future-ready solutions.
              From proof-of-concepts to advanced prototypes, we turn ideas into
              scalable systems that deliver impact.
            </p>
          </div>
        </article>

        {/* Row 2 */}
        <article
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          aria-labelledby="embedded-iot-heading"
        >
          <div className="order-1 md:order-2 md:col-span-2">
            <img
              src="/dummy-image/dummy-2.webp"
              alt="Embedded and IoT solutions in action"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="order-2 md:order-1 md:col-span-1 flex flex-col justify-center">
            <h4 className="text-sm uppercase tracking-wide text-gray-400">
              Innovation
            </h4>
            <h3
              id="embedded-iot-heading"
              className="text-2xl font-semibold mt-1 text-white"
            >
              Embedded & IoT
            </h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              We specialize in embedded systems and IoT applications that
              connect devices seamlessly. Our solutions enable automation, smart
              control, and real-time monitoring to power industries and modern
              lifestyles.
            </p>
          </div>
        </article>

        {/* Row 3 */}
        <article
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          aria-labelledby="designing-heading"
        >
          <div className="md:col-span-2">
            <img
              src="/dummy-image/dummy-2.webp"
              alt="Designing innovative interfaces and user experiences"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:col-span-1 flex flex-col justify-center">
            <h4 className="text-sm uppercase tracking-wide text-gray-400">
              Creative Approach
            </h4>
            <h3
              id="designing-heading"
              className="text-2xl font-semibold mt-1 text-white"
            >
              Designing
            </h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              From user interfaces to system architecture, our design process
              focuses on clarity, usability, and aesthetics. We craft designs
              that are not only visually engaging but also enhance functionality
              and user experience.
            </p>
          </div>
        </article>

        {/* Row 4 */}
        <article
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          aria-labelledby="development-heading"
        >
          <div className="md:col-span-2 order-1 md:order-2">
            <img
              src="/dummy-image/dummy-2.webp"
              alt="Developers coding and building applications"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:col-span-1 flex flex-col justify-center order-2 md:order-1">
            <h4 className="text-sm uppercase tracking-wide text-gray-400">
              Execution
            </h4>
            <h3
              id="development-heading"
              className="text-2xl font-semibold mt-1 text-white"
            >
              Development
            </h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              Our development team transforms concepts into reality through
              clean code and robust engineering practices. We deliver scalable,
              secure, and high-performance applications tailored to business
              needs.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
