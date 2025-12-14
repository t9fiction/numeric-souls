"use client";

import { motion } from "framer-motion";

const Cube = ({ 
  className, 
  size = 60,
  x,
  y,
  delay = 0 
}: { 
  className?: string;
  size?: number;
  x: number | string;
  y: number | string;
  delay?: number;
}) => {
  const halfSize = size / 2;
  
  return (
    <motion.div
      className={`absolute preserve-3d ${className}`}
      style={{ 
        width: size, 
        height: size,
        left: x,
        top: y,
      }}
      initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
      animate={{ 
        rotateX: [0, 360], 
        rotateY: [0, 360], 
        rotateZ: [0, 180],
        y: [0, -30, 0]
      }}
      transition={{ 
        default: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }
      }}
    >
      {/* Front */}
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30"
        style={{ transform: `translateZ(${halfSize}px)` }}
      />
      {/* Back */}
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30"
        style={{ transform: `rotateY(180deg) translateZ(${halfSize}px)` }}
      />
      {/* Right */}
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30"
        style={{ transform: `rotateY(90deg) translateZ(${halfSize}px)` }}
      />
      {/* Left */}
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30"
        style={{ transform: `rotateY(-90deg) translateZ(${halfSize}px)` }}
      />
      {/* Top */}
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30"
        style={{ transform: `rotateX(90deg) translateZ(${halfSize}px)` }}
      />
      {/* Bottom */}
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30"
        style={{ transform: `rotateX(-90deg) translateZ(${halfSize}px)` }}
      />
    </motion.div>
  );
};

export default function Floating3DShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]">
      <Cube x="10%" y="20%" size={40} delay={0} />
      <Cube x="85%" y="15%" size={60} delay={2} />
      <Cube x="15%" y="70%" size={50} delay={4} />
      <Cube x="80%" y="60%" size={30} delay={1} />
      <Cube x="50%" y="85%" size={20} delay={3} />
    </div>
  );
}
