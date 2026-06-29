"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./Astronaut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export default function AstronautScene() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="w-full h-full">
      <Canvas>
        <Model
          scale={1.75}
          rotation={[0.75, Math.PI-0.45, -0.8]}
          position={[1.5, -0.9, 1]}
        />

        <OrbitControls
          minDistance={4}
          maxDistance={8}
          minPolarAngle={0.6}
          maxPolarAngle={2.4}
          minAzimuthAngle={-0.8}
          maxAzimuthAngle={1}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}