"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

function GridPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 - 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial 
        color={isDark ? "#1e293b" : "#e2e8f0"} 
        wireframe 
        transparent 
        opacity={0.2}
      />
    </mesh>
  );
}

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <GridPlane />
      </Canvas>
    </div>
  );
}
