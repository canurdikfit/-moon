"use client";
import React from "react";
import { Sparkles, Stars } from "@react-three/drei";
import Variables from "./Variables";
import { motion } from "framer-motion-3d";

function Space(props) {
  return (
    <>
      <motion.mesh
        position={[0, 0, 0]}
        scale={1}
        animate={{
          scale: 0.14,
        }}
        transition={{
          duration: 5,
          delay: 3,
          ease: "easeInOut",
        }}
      >
        <motion.group
          animate={{
            rotateY: [0, 180, 360],
          }}
          transition={{
            delay: 8,
            duration: 5000,
            repeat: Infinity,
            times: [0, 0.5, 1],
            // repeatDelay: 1,
            ease: "linear",
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
        </motion.group>
      </motion.mesh>
      {/* stars swamping to the center */}
{/*       <motion.mesh
        position={[0, 0, 0]}
        scale={10}
        animate={{
          scale: 0.14,
        }}
        transition={{
          delay: 10,
          duration: 6,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      >
        <Stars
          radius={3}
          depth={3}
          count={2000}
          factor={0.3}
          saturation={0}
          fade={true}
        />
      </motion.mesh> */}
      {/* Sparkles Effects */}

      <motion.mesh
        scale={20}
        animate={{
          scale: 1.2,
        }}
        transition={{
          delay: 3,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        <Sparkles count={500} scale={2} size={2} speed={0.5} noise={0} />
      </motion.mesh>
      <Sparkles count={500} scale={20} size={2} speed={0.5} noise={1} />

      <Variables />
    </>
  );
}

export default Space;
