"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Line } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

function CodeStructure() {
  const groupRef = useRef<THREE.Group>(null!);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  const primaryColor = isDark ? "#3b82f6" : "#1e40af";
  const accentColor = isDark ? "#10b981" : "#059669";

  // Create connection lines between nodes
  const connections = [
    [[-1, 1, 0], [0, 0, 0]],
    [[1, 1, 0], [0, 0, 0]],
    [[0, 0, 0], [0, -1, 0]],
    [[-1, -1, 0], [0, -1, 0]],
    [[1, -1, 0], [0, -1, 0]]
  ];

  return (
    <group ref={groupRef}>
      {/* Central node */}
      <Box args={[0.3, 0.3, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color={primaryColor} emissive={primaryColor} emissiveIntensity={0.2} />
      </Box>
      
      {/* Top nodes */}
      <Box args={[0.2, 0.2, 0.2]} position={[-1, 1, 0]}>
        <meshStandardMaterial color={accentColor} />
      </Box>
      <Box args={[0.2, 0.2, 0.2]} position={[1, 1, 0]}>
        <meshStandardMaterial color={accentColor} />
      </Box>
      
      {/* Bottom nodes */}
      <Box args={[0.25, 0.25, 0.25]} position={[0, -1, 0]}>
        <meshStandardMaterial color={primaryColor} />
      </Box>
      <Box args={[0.15, 0.15, 0.15]} position={[-1, -1, 0]}>
        <meshStandardMaterial color={accentColor} />
      </Box>
      <Box args={[0.15, 0.15, 0.15]} position={[1, -1, 0]}>
        <meshStandardMaterial color={accentColor} />
      </Box>

      {/* Connection lines */}
      {connections.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={isDark ? "#6b7280" : "#9ca3af"}
          lineWidth={2}
        />
      ))}
    </group>
  );
}

const TechVisualization = () => {
  return (
    <Canvas style={{ height: '400px', width: '400px' }} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.4} />
      <CodeStructure />
    </Canvas>
  );
};

export default TechVisualization;
