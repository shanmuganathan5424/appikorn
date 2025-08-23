"use client";
import { motion } from "framer-motion";
import { FaDatabase, FaGlobe, FaCogs, FaCalendarAlt } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

function Node({ icon, label, highlight, className }: { 
  icon?: any; label: string; highlight?: string; className?: string 
}) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 bg-[#1a1f2c] rounded-xl shadow-md border border-gray-700 text-gray-200 text-sm ${className}`}
    >
      {icon && (
        <div className="flex items-center justify-center w-6 h-6 bg-[#242b3a] rounded-md">
          {icon}
        </div>
      )}
      <span>
        {label}{" "}
        {highlight && <span className="font-semibold text-white">{highlight}</span>}
      </span>
    </div>
  );
}

// 🔹 Generate polyline path from points
function generateDirectPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  return `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;
}

export default function FlowLayout() {
  const [path, setPath] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔹 Define your line direction points here
  const points = [
    { x: 50, y: 70 },   // start near Import node
    { x: 115, y: 70 }, // pass through Launch
    { x: 115, y: 190 }, // Custom Websites
    { x: 785, y: 190 }, // Automatic Improvements
    { x: 785, y: 70 }, // Deliver
    { x: 850, y: 70 },  // Calendar Meetings
  ];

useEffect(() => {
  setPath(generateRoundedPath(points, 40)); // 40px radius
}, []);

  return (
    <div className="flex items-center justify-center">
      <div ref={containerRef} className="relative w-[80%] h-[250px]">
        {/* Animated line */}
       <svg
  viewBox="0 0 900 250"
  className="absolute top-0 left-0 w-full h-full"
  fill="none"
>
  <motion.path
    d={path}
    stroke="#6366f1"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{
      duration: 2,       // runs for 2 seconds
      ease: "easeInOut", // smooth easing
    }}
  />
</svg>
        {/* Nodes (fixed positions) */}
        <Node
          className="absolute left-[0px] top-[50px] node w-[210px]"
          icon={<FaDatabase className="text-blue-400 text-sm" />}
          label="Import"
          highlight="CRM data"
        />
        <Node className="absolute left-[230px] top-[110px] node" label="Launch" />
        <Node
          className="absolute left-[310px] top-[170px] node"
          icon={<FaGlobe className="text-green-400 text-sm" />}
          label="Custom"
          highlight="websites & outreach"
        />
        <Node
          className="absolute right-[330px] top-[170px] node"
          icon={<FaCogs className="text-pink-400 text-sm" />}
          label="Automatic"
          highlight="improvements"
        />
        <Node className="absolute right-[230px] top-[110px] node" label="Deliver" />
        <Node
          className="absolute right-[0px] top-[50px] node w-[210px]"
          icon={<FaCalendarAlt className="text-yellow-400 text-sm" />}
          label="Calendar"
          highlight="Meetings"
        />
      </div>
    </div>
  );
}





function generateRoundedPath(points: { x: number; y: number }[], radius = 40) {
  if (points.length < 2) return "";

  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    // Calculate direction vectors
    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;
    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;

    // Normalize lengths
    const len1 = Math.hypot(dx1, dy1);
    const len2 = Math.hypot(dx2, dy2);

    // Scale back from corner point to get radius offset
    const offset1 = Math.min(radius, len1 / 2);
    const offset2 = Math.min(radius, len2 / 2);

    // Entry and exit points for curve
    const p1x = curr.x - (dx1 / len1) * offset1;
    const p1y = curr.y - (dy1 / len1) * offset1;
    const p2x = curr.x + (dx2 / len2) * offset2;
    const p2y = curr.y + (dy2 / len2) * offset2;

    // Line to curve start
    d += ` L ${p1x},${p1y}`;
    // Quadratic curve through corner
    d += ` Q ${curr.x},${curr.y} ${p2x},${p2y}`;
  }

  // Last line
  const last = points[points.length - 1];
  d += ` L ${last.x},${last.y}`;

  return d;
}