import React from "react";
import useStore from "../hooks/useStore";
import Cube from "./Cube";
import { useGameContext } from "../../context/GameContext";
import { netherWorld } from "../worlds/nether";
import { world } from "../worlds/world";

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);
  const { inNether } = useGameContext();
  const obsCubes = inNether ? netherWorld : world;
  const portal = obsCubes.filter((cube) => cube.texture === "obsidian");
  // console.log(portal);
  return cubes.map(({ key, pos, texture, rotation }) => {
    return (
      <Cube
        key={key}
        position={pos}
        texture={texture}
        rotation={rotation}
        portal={portal}
      />
    );
  });
};

export default Cubes;
