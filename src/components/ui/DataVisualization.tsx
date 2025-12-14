"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

function DataBars() {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        mesh.scale.y = 0.5 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3;
      });
    }
  });

  const bars = Array.from({ length: 8 }, (_, i) => (
    <mesh key={i} position={[i * 0.3 - 1.2, 0, 0]}>
      <boxGeometry args={[0.2, 1, 0.2]} />
      <meshStandardMaterial 
        color={isDark ? "#3b82f6" : "#1e40af"} 
        transparent 
        opacity={0.7}
      />
    </mesh>
  ));

  return <group ref={groupRef}>{bars}</group>;
}

export default function DataVisualization() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />
        <DataBars />
      </Canvas>
    </div>
  );
}
