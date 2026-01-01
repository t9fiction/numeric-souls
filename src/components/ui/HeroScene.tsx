"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Float, Stars } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";
import React from "react";

function LorenzAttractor() {
  const ref = useRef<any>(null);

  // Calculate the Lorenz Attractor points
  const points = useMemo(() => {
    const pts = [];
    let x = 0.1;
    let y = 0;
    let z = 0;
    const dt = 0.01;
    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;

    for (let i = 0; i < 3000; i++) {
      const dx = sigma * (y - x) * dt;
      const dy = (x * (rho - z) - y) * dt;
      const dz = (x * y - beta * z) * dt;
      x += dx;
      y += dy;
      z += dz;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        // Slowly rotate the entire attractor
        ref.current.rotation.y += delta * 0.1;
        ref.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={ref} scale={0.1}>
      {/* 
        Line from @react-three/drei
        We center it by offsetting the position manually or usually attractors are centered around z=25 roughly. 
        We'll just rely on Float to handle some positioning and the group scale.
      */}
      <Line
        points={points}
        color="#4f46e5"       // Default
        lineWidth={2}         // In pixels (default)
        dashed={false}
        vertexColors={[[0.2, 0.2, 1], [1, 0.2, 0.2]] as any} // Optional gradient attempt (needs correct prop format)
      >
         {/* Gradient Material for cool tech look */}
         <lineBasicMaterial color="#4f46e5" opacity={0.8} transparent />
      </Line>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-[1] opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
               {/* Center the attractor roughly. Lorenz usually sits around y=0, z=25 with these params */}
               <group position={[0, -2, 0]}> 
                  <LorenzAttractor />
               </group>
            </Float>

            <Stars 
                radius={100} 
                depth={50} 
                count={3000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={0.5} 
            />
        </Suspense>
      </Canvas>
    </div>
  );
}
