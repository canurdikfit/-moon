"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  // Scroll,
  // ScrollControls,
  Sparkles,
  Stars,
} from "@react-three/drei";
import Variables from "./Variables";
import { motion } from "framer-motion-3d";

function Space(props) {
  const starMovement = useRef(null);
  const sparkleScale = useRef(null);

  useFrame((state, delta) => {
    starMovement.current.rotation.y += delta * 0.05;
  });

  return (
    <>
      {/* <ScrollControls pages={4} damping={0.1}> */}
      <motion.mesh
        position={[0, 0, 0]}
        scale={1}
        ref={starMovement}
        animate={{
          scale: 0.14,
        }}
        transition={{
          duration: 5,
          delay: 3,
          ease: "easeInOut",
        }}
      >
        <Stars
          radius={3}
          depth={3}
          count={2000}
          factor={0.4}
          saturation={0}
          fade={true}
        />
      </motion.mesh>
      <motion.group
        scale={10}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 4,
          delay: 4,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          count={500}
          scale={2}
          size={2}
          speed={0.5}
          noise={1}
          ref={sparkleScale}
        />
      </motion.group>

      <Variables />
      <Sparkles
        count={500}
        scale={20}
        size={2}
        speed={0.5}
        noise={1}
      />
      {/* <Scroll></Scroll>
      <Scroll html>
          <h1 className="text-white absolute inset-x-0 block text-nowrap text-4xl">
            html in here (optional)
          </h1>
          <h1
            className="text-white absolute inset-x-0 block text-nowrap text-4xl"
            style={{ top: "100vh" }}
          >
            second page
          </h1>
          <h1
            className="text-white absolute inset-x-0 block text-nowrap text-4xl"
            style={{ top: "200vh" }}
          >
            third page
          </h1>
        </Scroll>
      </ScrollControls> */}
    </>
  );
}

export default Space;
