"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedLogo() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.cos(time * 0.5) * 0.2;
    }
  });

  const textOptions = {
    color: 'white',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
    fontSize: 2,
    font: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff',
  };

  return (
    <group ref={meshRef}>
      <Box args={[4, 4, 4]} material-color="blue" />
      <Text position={[0, 0, 2.1]} {...textOptions}>
        N
      </Text>
    </group>
  );
}

const Logo3D = () => {
  return (
    <Canvas style={{ height: '400px', width: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedLogo />
    </Canvas>
  );
};

export default Logo3D;
