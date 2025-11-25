import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#3eff3e"
        emissive="#3eff3e"
        emissiveIntensity={0.3}
        wireframe
      />
    </mesh>
  );
}

function InnerBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y -= 0.015;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

export function AnimatedLogo() {
  return (
    <div className="w-full h-64 md:h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3eff3e" />
        <RotatingBox />
        <InnerBox />
      </Canvas>
    </div>
  );
}
