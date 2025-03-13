import React from "react";
import panoramaImage from "../assets/panorama.hdr";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const Panorama = () => {
  return (
    <div className="absolute top-0 z-0 w-screen h-screen">
      <Canvas camera={{ position: [-0.5, 1, 2] }} style={{ height: "100vh" }}>
        <Environment files={panoramaImage} background />
        <OrbitControls
          target={[0, 1, 0]}
          autoRotate
          autoRotateSpeed={0.2}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Panorama;
