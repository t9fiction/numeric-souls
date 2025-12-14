"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, Suspense } from "react";
import * as THREE from "three";

function ParticleCloud(props: React.ComponentProps<typeof Points>) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 1.2 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#4f46e5"
          size={0.005} // Very subtle, small points
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
       {/* Height controls how much vertical space it takes, but since it's absolute, it fills container. 
           We move the camera or scale object to make it "smaller". 
       */}
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Suspense fallback={null}>
            {/* 
                Positioned slightly to the right to not interfere with centered text too much,
                or centered but very sparse. 
                User said "not main focus", so let's push it back and make it a background texture.
            */}
            <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                <ParticleCloud scale={[1.8, 1.8, 1.8]} /> 
            </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
