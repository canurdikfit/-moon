// components/RotatingParticleSphere.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RotatingParticleSphere = () => {
  const particleRef = useRef();


  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Sphere />
      <RotatingParticle ref={particleRef} />
    </Canvas>
  );
};

const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="blue" wireframe />
    </mesh>
  );
};

const RotatingParticle = () => {
    const ref = useRef();
  useFrame(() => {
    // Rotate the particle around the sphere
    ref.current.position.x = Math.sin(Date.now() * 0.001) * 2;
    ref.current.position.z = Math.cos(Date.now() * 0.001) * 2;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default RotatingParticleSphere;
