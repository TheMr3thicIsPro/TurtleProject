'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { useScroll } from 'framer-motion';

export default function Turtle() {
  const group = useRef<Group>(null);
  const { scrollYProgress } = useScroll();

  useFrame((state, delta) => {
    if (!group.current) return;

    // Swimming animation
    const t = state.clock.getElapsedTime();
    
    // Gentle floating
    group.current.position.y = Math.sin(t * 0.5) * 0.2;
    group.current.rotation.z = Math.sin(t * 0.3) * 0.05;
    
    // Scroll interaction - dive deeper and rotate
    const scrollOffset = scrollYProgress.get(); // 0 to 1
    
    // Move turtle down and forward based on scroll
    // Start at [0, 0, 0], move to [0, -5, -2]
    group.current.position.y = (Math.sin(t * 0.5) * 0.2) - (scrollOffset * 10);
    group.current.rotation.x = scrollOffset * 0.5;
  });

  return (
    <group ref={group} dispose={null}>
      {/* Shell */}
      <mesh scale={[1.2, 0.5, 1.4]} position={[0, 0.2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#0d2e38" 
          roughness={0.3} 
          metalness={0.2} 
        />
      </mesh>
      
      {/* Shell Pattern Glow */}
      <mesh scale={[1.21, 0.51, 1.41]} position={[0, 0.2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#64ffda" 
          wireframe 
          transparent 
          opacity={0.1}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.3, 1.6]} scale={[0.4, 0.35, 0.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#112240" roughness={0.5} />
      </mesh>

      {/* Flippers - Front Left */}
      <Flipper position={[-1, 0, 0.8]} rotation={[0.5, 0.5, -0.5]} phase={0} />
      {/* Flippers - Front Right */}
      <Flipper position={[1, 0, 0.8]} rotation={[0.5, -0.5, 0.5]} phase={0} mirror />
      
      {/* Flippers - Back Left */}
      <Flipper position={[-0.8, -0.1, -1]} rotation={[-0.5, 0.5, -0.5]} scale={0.6} phase={Math.PI} />
      {/* Flippers - Back Right */}
      <Flipper position={[0.8, -0.1, -1]} rotation={[-0.5, -0.5, 0.5]} scale={0.6} phase={Math.PI} mirror />
    </group>
  );
}

function Flipper({ position, rotation, scale = 1, phase, mirror }: any) {
  const ref = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    // Flapping motion
    const flap = Math.sin(t * 1.5 + phase) * 0.4;
    ref.current.rotation.z = rotation[2] + (mirror ? -flap : flap);
    ref.current.rotation.x = rotation[0] + flap * 0.5;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      <boxGeometry args={[1.5, 0.1, 0.6]} />
      <meshStandardMaterial color="#112240" roughness={0.5} />
    </mesh>
  );
}
