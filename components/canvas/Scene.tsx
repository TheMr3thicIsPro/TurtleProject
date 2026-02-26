'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, Stars } from '@react-three/drei';
import Turtle from './Turtle';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

function Ocean() {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate entire ocean slightly
      groupRef.current.rotation.y += 0.0005;
      
      // Move camera/group based on scroll to simulate diving
      const depth = scrollYProgress.get() * 20; // Dive 20 units down
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -depth, 0.05);
      state.camera.lookAt(0, -depth - 2, 0); // Look slightly down
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} color="#0a192f" />
      <directionalLight 
        ref={lightRef}
        position={[5, 10, 5]} 
        intensity={2} 
        color="#64ffda" 
        castShadow 
      />
      <pointLight position={[-5, -10, -5]} intensity={0.5} color="#020c1b" />

      {/* Particles / Plankton */}
      <Sparkles count={500} scale={20} size={2} speed={0.4} opacity={0.4} color="#64ffda" />
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

      {/* The Turtle */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Turtle />
      </Float>

      {/* Fog for depth */}
      <fog attach="fog" args={['#020c1b', 5, 30]} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-ocean-950">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Ocean />
        </Suspense>
      </Canvas>
    </div>
  );
}
