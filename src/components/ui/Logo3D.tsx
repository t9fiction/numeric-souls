"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

function AnimatedLogo() {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* N */}
      <mesh position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.1]} />
        <meshStandardMaterial color={isDark ? "#3b82f6" : "#1e40af"} />
      </mesh>
      <mesh position={[-0.4, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.1, 0.6, 0.1]} />
        <meshStandardMaterial color={isDark ? "#3b82f6" : "#1e40af"} />
      </mesh>
      <mesh position={[-0.2, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.1]} />
        <meshStandardMaterial color={isDark ? "#3b82f6" : "#1e40af"} />
      </mesh>
      
      {/* S */}
      <mesh position={[0.2, 0.2, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color={isDark ? "#8b5cf6" : "#7c3aed"} />
      </mesh>
      <mesh position={[0.2, 0, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color={isDark ? "#8b5cf6" : "#7c3aed"} />
      </mesh>
      <mesh position={[0.2, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color={isDark ? "#8b5cf6" : "#7c3aed"} />
      </mesh>
    </group>
  );
}

export default function Logo3D() {
  return (
    <div className="w-12 h-12">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 2]} intensity={0.8} />
        <AnimatedLogo />
      </Canvas>
    </div>
  );
}
