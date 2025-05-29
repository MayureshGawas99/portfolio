import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { Ground } from "./components/Ground";
import Player from "./components/Player";
import FPV from "./components/FPV";
import { FaPlus } from "react-icons/fa";
import Cubes from "./components/Cubes";
import TextureSelector from "./components/TextureSelector";
import Inventory from "./components/Inventory";
import useStore from "./hooks/useStore";
import { useGameContext } from "../context/GameContext";
import minecraftFont from "../fonts/MinecraftBold.otf";
import { Text } from "troika-three-text";
import { blocks } from "./blocks/blocks";
import Portal from "./components/Portal";
import AudioPlayer from "../components/AudioPlayer";
import GameMenu from "./components/GameMenu";
import { world } from "./worlds/world";

extend({ Text });
const Home = () => {
  const [rotation] = useState([0, -Math.PI / 2, 0]);
  const [setCubes] = useStore((state) => [state.setCubes]);
  const { setInNether, setAllBlocks, setKeyActionMap, setActive, isPortalLit } =
    useGameContext();

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === "/overworld") {
      // Set inNether to true
      setCubes(false, world);
      setInNether(false);
      setActive("dirt");
      setAllBlocks(blocks);
      setKeyActionMap({
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        KeyE: "openInventory",
        Escape: "openMenu",
        Space: "jump",
        Digit1: "dirt",
        Digit2: "grass_block",
        Digit3: "stone",
        Digit4: "oak_plank",
        Digit5: "oak_log",
        Digit6: "cobblestone",
        Digit7: "mossy_cobblestone",
        Digit8: "moss",
        Digit9: "glass",
        Digit0: "flint_and_steel",
      });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="relative h-screen">
      <Canvas style={{ height: "100vh" }}>
        <Sky sunPosition={[-100, 100, 20]} />
        <ambientLight intensity={1.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          {/* <Slabs /> */}
          <Ground />
        </Physics>
        <text
          position-x={8}
          position-y={5.3}
          position-z={-2.5}
          rotation={rotation}
          text={"SKILLS DIMENSION"}
          font={minecraftFont}
          fontSize={0.35}
          color="#491f20"
          anchorX="center"
          anchorY="middle"
          outlineWidth={"10%"}
        ></text>
        <text
          position-x={7.4}
          position-y={0}
          position-z={-2.5}
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
          <Portal position={[8, 2, -2.5]} rotation={[0, Math.PI / 2, 0]} />
        )}
      </Canvas>
      <div className="text-white center-align">
        <FaPlus />
      </div>
      <TextureSelector />
      <Inventory />
      {/* <Options /> */}
      <GameMenu />
      <AudioPlayer />
    </div>
  );
};

export default Home;
