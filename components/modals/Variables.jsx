import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { motion } from "framer-motion-3d";

function Variables() {
  const moonOrbit = useRef(null);
  const bgStar = useRef(null);
  const colorMapTexture = useTexture("/8k_moon.jpg");
  useFrame((state, delta) => {
    moonOrbit.current.rotation.y += delta * 0.05;
    bgStar.current.rotation.y += delta * 0.0009;
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <PerspectiveCamera position={[0, 1, 8]} makeDefault />
      <ambientLight intensity={0.01} />
      <directionalLight args={["#ffad14", 0.4]} position={[2, 1, 0]} />
      <directionalLight args={["#fff", 0.8]} position={[2, 1, 0]} />
      <motion.mesh
        position={[0, 0, 0]}
        rotation={[0, angleToRadians(90), 0]}
        ref={moonOrbit}
        scale={1}
        animate={{
          scale: 0,
        }}
        transition={{
          duration: 2,
          delay: 7,
          ease: "easeOut",
        }}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="blue" />
        <meshStandardMaterial map={colorMapTexture} />
      </motion.mesh>
      <mesh position={[0, 0, -10]} ref={bgStar}>
        <Stars
          radius={70}
          depth={140}
          count={2000}
          factor={7}
          saturation={0}
          fade={true}
          speed={1}
        />
      </mesh>
    </>
  );
}

export default Variables;

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;
