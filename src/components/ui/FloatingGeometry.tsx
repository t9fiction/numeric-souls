"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Box, Sphere } from "@react-three/drei";
import { useTheme } from "next-themes";

function GeometricShapes() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Box args={[0.8, 0.8, 0.8]} position={[-2, 1, 0]}>
          <meshStandardMaterial 
            color={isDark ? "#3b82f6" : "#1e40af"} 
            wireframe 
            transparent 
            opacity={0.3}
          />
        </Box>
      </Float>
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <Sphere args={[0.5]} position={[2, -1, 0]}>
          <meshStandardMaterial 
            color={isDark ? "#8b5cf6" : "#7c3aed"} 
            wireframe 
            transparent 
            opacity={0.4}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <Box args={[0.6, 1.2, 0.6]} position={[0, 2, -1]}>
          <meshStandardMaterial 
            color={isDark ? "#06b6d4" : "#0891b2"} 
            wireframe 
            transparent 
            opacity={0.25}
          />
        </Box>
      </Float>
    </>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <GeometricShapes />
      </Canvas>
    </div>
  );
}
