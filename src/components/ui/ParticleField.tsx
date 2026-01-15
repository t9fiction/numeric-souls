"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    // Use a seeded random approach or generate positions deterministically
    for (let i = 0; i < 100; i++) {
      // Simple deterministic positioning based on index
      const angle = (i / 100) * Math.PI * 2;
      const radius = (i % 10) * 0.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (i % 5 - 2) * 2;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color={isDark ? "#3b82f6" : "#1e40af"}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ParticleSystem />
      </Canvas>
    </div>
  );
}
