"use client";
import Space from "@/components/modals/Space";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <section className="h-screen modal">
        <Canvas>
          <Suspense fallback={null}>
            <Space />
          </Suspense>
        </Canvas>
      </section>
    </main>
  );
}
