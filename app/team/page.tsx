"use client";

import React from "react";
import dynamic from "next/dynamic";
import useLenisScroll from "@/hooks/useLenisScroll";


// ✅ Dynamic imports (lazy load non-critical sections for performance)
const HeroSection = dynamic(() => import("./component/index"), { ssr: true });
const AboutAgency = dynamic(() => import("./component/index-section"), { ssr: true });
const RoleSection = dynamic(() => import("./component/team-one"), { ssr: true });
const ManagerComponent = dynamic(() => import("./component/manager-component"), { ssr: true });
const TeamRoles = dynamic(() => import("./component/team-roles"), { ssr: true });

export default function Team() {
  useLenisScroll();
  return (
    <main role="main" className="bg-white text-gray-900">
      {/* ✅ ARIA landmark + semantic tags improve accessibility & SEO */}

      <header>
        <title>Our Team | Company Name</title>
        <meta
          name="description"
          content="Meet our team of experts specializing in research, development, design, and innovation. Together, we deliver impactful and future-ready solutions."
        />
      </header>

      {/* ✅ Use <section> for structure & SEO */}
      <section aria-labelledby="team-section">
      <HeroSection />
      </section>


      <section aria-labelledby="about-agency">
        <AboutAgency />
      </section>

      <section aria-labelledby="roles">
        <RoleSection />
      </section>

      <section aria-labelledby="management">
        <ManagerComponent />
      </section>

      <section aria-labelledby="team-roles">
        <TeamRoles />
      </section>
    </main>
  );
}
