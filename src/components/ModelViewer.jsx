import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
};

const CameraUpdater = ({ position }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...position);
    camera.updateProjectionMatrix();
  }, [position, camera]);

  return null;
};

const ModelViewer = ({ model, position }) => {
  return (
    <Canvas key={model} camera={{ position, fov: 50 }}>
      <ambientLight intensity={2} />
      <CameraUpdater position={position} />
      <Model url={model} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
