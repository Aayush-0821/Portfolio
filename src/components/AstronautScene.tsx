"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./Astronaut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

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
          scale={1.4}
          rotation={[0.95, Math.PI - 0.9, -0.3]}
          position={[0, -1, 1]}
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

        <Rig />
      </Canvas>
    </div>
  );
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
  });
}
