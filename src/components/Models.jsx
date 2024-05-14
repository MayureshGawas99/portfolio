import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import FerrariModel from "../assets/steve_minecraft.glb"; // Adjust the path as needed
import { Vector3 } from "three";

const Models = () => {
  const model = useGLTF(FerrariModel);
  const orbitControlsRef = useRef();

  useEffect(() => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.target = new Vector3(0, 5, 0); // Replace x, y, z with your desired coordinates
    }
  }, []);

  return (
    <>
      <mesh scale={1}>
        <primitive object={model.scene} />
        <ambientLight intensity={1} />
        <OrbitControls
          ref={orbitControlsRef}
          enableZoom={false}
          autoRotate={true}
          minPolarAngle={Math.PI / 2} // Limiting vertical rotation to 90 degrees (horizontal plane)
          maxPolarAngle={Math.PI / 2}
        />
      </mesh>
    </>
  );
};

export default Models;
