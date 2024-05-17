import { Physics } from "@react-three/cannon";
import { Environment } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Player from "./components/Player";
import FPV from "./components/FPV";
import { FaPlus } from "react-icons/fa";
import Cubes from "./components/Cubes";
import TextureSelector from "./components/TextureSelector";
import Options from "./components/Options";
import Inventory from "./components/Inventory";
import netherSky from "../assets/netherBG.hdr";
import { NetherGround } from "./components/NetherGround";
import useStore from "./hooks/useStore";
import { useGameContext } from "../context/GameContext";
import minecraftFont from "../fonts/MinecraftBold.otf";
import { Text } from "troika-three-text";
import { skillBlocks } from "./blocks/skills";
import Portal from "./components/Portal";

extend({ Text });

const Nether = () => {
  const [setCubes] = useStore((state) => [state.setCubes]);
  const [rotation] = useState([0, 0, 0]);

  const { setInNether, setAllBlocks, setKeyActionMap, setActive, isPortalLit } =
    useGameContext();

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === "/nether") {
      // Set inNether to true
      setCubes(true);
      setInNether(true);
      setActive("react");
      setAllBlocks(skillBlocks);
      setKeyActionMap({
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        KeyE: "openInventory",
        Space: "jump",
        Digit1: "react",
        Digit2: "next_js",
        Digit3: "mongo_db",
        Digit4: "express",
        Digit5: "node_js",
        Digit6: "bootstrap",
        Digit7: "tailwind",
        Digit8: "git",
        Digit9: "flask",
        Digit0: "flint_and_steel",
      });
    }
    // eslint-disable-next-line
  }, [setInNether]);

  return (
    <div classname="h-screen relative">
      <Canvas style={{ height: "100vh" }}>
        {/* <Sky sunPosition={[100, 100, 20]} /> */}
        <Environment files={netherSky} background blur={0.5} />

        <ambientLight intensity={1.5} />

        <FPV />
        <Physics>
          <Player />
          <Cubes />
          {/* <Slabs /> */}
          <NetherGround />
        </Physics>
        <text
          position-x={-0.5}
          position-y={5.3}
          position-z={-5}
          rotation={rotation}
          text={"HOME DIMENSION"}
          font={minecraftFont}
          fontSize={0.35}
          color="#eab308"
          anchorX="center"
          anchorY="middle"
        ></text>
        <text
          position-x={-0.5}
          position-y={0}
          position-z={-4.4}
          rotation={rotation}
          text={"Use Flint and Steel on the Portal!"}
          font={minecraftFont}
          fontSize={0.1}
          color="#eab308"
          anchorX="center"
          anchorY="middle"
          outlineWidth={"10%"}
        ></text>
        {isPortalLit && (
          <Portal position={[-0.5, 2, -5]} rotation={[0, 0, 0]} />
        )}
      </Canvas>
      <div className="center-align  text-white">
        <FaPlus />
      </div>
      <TextureSelector />
      <Options />
      <Inventory />
    </div>
  );
};

export default Nether;
