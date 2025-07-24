"use client";
import React, { useRef, useEffect, useState } from "react";

const HoverCluster = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);

  // Base positions (original size, to be scaled)
  const basePositions = [
    [-290, 50], [-220, 0], [-150, -25], [80, -35], [180, 0], [230, 45],
    [150, 40], [170, 120], [65, 60], [0, 150], [-130, 70],
    [-200, 107], [-90, 135]
  ];

  const applyTransform = () => {
    if (!containerRef.current) return;
    const miniIcons = containerRef.current.querySelectorAll<HTMLImageElement>(".mini-icon");

    miniIcons.forEach((icon, i) => {
      const [x, y] = basePositions[i] || [0, 0];
      icon.style.transform = `translate(${x * scaleFactor}px, ${y * scaleFactor}px)`;
    });
  };

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 500) setScaleFactor(0.3);
      else if (width < 768) setScaleFactor(0.5);
      else if (width < 1024) setScaleFactor(0.7);
      else setScaleFactor(1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          applyTransform();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated, scaleFactor]);

  const containerSize = {
    width: 600 * scaleFactor,
    height: 370 * scaleFactor,
  };

  const centerSize = {
    width: 140 * scaleFactor,
    height: 250 * scaleFactor,
  };

  const miniSize = {
    width: 74 * scaleFactor,
    height: 131 * scaleFactor,
  };

  return (
    <div
      className="relative mx-auto max-w-full "
      style={{ width: containerSize.width, height: containerSize.height }}
      ref={containerRef}
      onMouseEnter={() => {
        if (!hasAnimated) {
          applyTransform();
          setHasAnimated(true);
        }
      }}
    >
      {/* Central Image */}
      <img
        src="/gif/big.png"
        alt="Main"
        className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-4/5 "
        style={{
          width: `${centerSize.width}px`,
          height: `${centerSize.height}px`,
        }}
      />

      {/* Mini Icons */}
      {basePositions.map((_, i) => (
        <img
          key={i}
          src="/gif/mini.png"
          alt={`Mini ${i}`}
          className="mini-icon absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out -translate-y-4/5"
          style={{
            width: `${miniSize.width}px`,
            height: `${miniSize.height}px`,
            transform: `translate(-18px, -15px)`, // will be overridden on animate
          }}
        />
      ))}
    </div>
  );
};

export default HoverCluster;
