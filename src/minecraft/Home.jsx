import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Ground } from "./components/Ground";
import Player from "./components/Player";
import FPV from "./components/FPV";
import { FaPlus } from "react-icons/fa";
import Cubes from "./components/Cubes";
import TextureSelector from "./components/TextureSelector";
import Options from "./components/Options";

const Home = () => {
  return (
    <div classname="h-screen relative">
      <Canvas style={{ height: "100vh" }}>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="center-align  text-white">
        <FaPlus />
      </div>
      <TextureSelector />
      <Options />
    </div>
  );
};

export default Home;
