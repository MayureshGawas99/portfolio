import { useBox } from "@react-three/cannon";
import React, { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import { blocks } from "../blocks/blocks";

const Cube = ({ position, texture }) => {
  const [textures, setTextures] = useState(null);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  useEffect(() => {
    setTextures(blocks[texture]);
  }, []);

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        } else if (clickedFace === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 3) {
          addCube(x, y - 1, z);
          return;
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clickedFace === 5) {
          addCube(x, y, z - 1);
          return;
        }
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial map={textures?.right} attach={"material-0"} />
      <meshStandardMaterial map={textures?.left} attach={"material-1"} />
      <meshStandardMaterial map={textures?.top} attach={"material-2"} />
      <meshStandardMaterial map={textures?.bottom} attach={"material-3"} />
      <meshStandardMaterial map={textures?.front} attach={"material-4"} />
      <meshStandardMaterial map={textures?.back} attach={"material-5"} />
    </mesh>
  );
};

export default Cube;
