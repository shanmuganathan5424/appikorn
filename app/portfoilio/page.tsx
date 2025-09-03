"use client";

import React from "react";
import Section from "./components/home";
import useLenisScroll from "@/hooks/useLenisScroll";

import MultiLayerSlider from "./components/slider";
import ProjectLables from "./components/project-lables";

export default function Portfolio() {
  useLenisScroll();

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full min-h-screen bg-transparent">
        <Section />
        <MultiLayerSlider />
        <ProjectLables />
      </div>
    </div>
  );
}
