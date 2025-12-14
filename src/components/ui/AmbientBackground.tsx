"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-auto group"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Base Grid (Subtle) */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* 2. Spotlight Reveal Effect */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
        }}
      />

      {/* 3. Aurora Gradients */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
