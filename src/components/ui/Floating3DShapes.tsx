"use client";

import { motion } from "framer-motion";

// A single wireframe face
const Face = ({ 
  rotateX = 0, 
  rotateY = 0, 
  translateZ = 0, 
  className = "" 
}: { 
  rotateX?: number; 
  rotateY?: number; 
  translateZ: number; 
  className?: string 
}) => (
  <div 
    className={`absolute inset-0 border border-primary/40 ${className}`}
    style={{ 
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)` 
    }}
  >
    {/* Corner Accents for "Tech" look */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
  </div>
);

const HyperCube = ({ 
  size = 200, 
  x, 
  y, 
  delay = 0,
  duration = 20
}: { 
  size?: number; 
  x: number | string; 
  y: number | string; 
  delay?: number;
  duration?: number;
}) => {
  const halfSize = size / 2;
  const innerSize = size * 0.5;
  const innerHalf = innerSize / 2;

  return (
    <div 
      className="absolute perspective-[1000px]"
      style={{ left: x, top: y, width: size, height: size }}
    >
      {/* Outer Shell */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ 
          rotateX: [0, 360], 
          rotateY: [0, 360] 
        }}
        transition={{ 
          duration: duration, 
          repeat: Infinity, 
          ease: "linear",
          delay: delay 
        }}
      >
        <Face translateZ={halfSize} />
        <Face rotateY={180} translateZ={halfSize} />
        <Face rotateY={90} translateZ={halfSize} />
        <Face rotateY={-90} translateZ={halfSize} />
        <Face rotateX={90} translateZ={halfSize} />
        <Face rotateX={-90} translateZ={halfSize} />
        
        {/* Inner Core (Counter-Rotating) */}
        <motion.div
            className="absolute top-1/2 left-1/2 preserve-3d"
            style={{ 
                width: innerSize, 
                height: innerSize,
                marginLeft: -innerHalf,
                marginTop: -innerHalf,
            }}
            animate={{ 
                rotateX: [360, 0], 
                rotateY: [360, 0] 
            }}
            transition={{ 
                duration: duration * 0.7, 
                repeat: Infinity, 
                ease: "linear",
                delay: delay 
            }}
        >
             <Face translateZ={innerHalf} className="border-primary/60 bg-primary/5" />
             <Face rotateY={180} translateZ={innerHalf} className="border-primary/60 bg-primary/5" />
             <Face rotateY={90} translateZ={innerHalf} className="border-primary/60 bg-primary/5" />
             <Face rotateY={-90} translateZ={innerHalf} className="border-primary/60 bg-primary/5" />
             <Face rotateX={90} translateZ={innerHalf} className="border-primary/60 bg-primary/5" />
             <Face rotateX={-90} translateZ={innerHalf} className="border-primary/60 bg-primary/5" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Floating3DShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Solar System of Hyperstructures */}
      <HyperCube x="10%" y="15%" size={120} duration={25} />
      <HyperCube x="80%" y="60%" size={180} duration={30} delay={2} />
      
      {/* Background Grid Particles/Effects can go here if needed */}
    </div>
  );
}
