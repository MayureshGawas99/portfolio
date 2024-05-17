import { useBox } from "@react-three/cannon";
import React, { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import { useGameContext } from "../../context/GameContext";

const Slab = ({ position, texture }) => {
  const [textures, setTextures] = useState(null);
  const top = false;
  const [x, y, z] = position;
  const { pos, allBlocks } = useGameContext();
  const [ref] = useBox(() => ({
    type: "Static",
    position: [x, top ? y + 0.25 : y - 0.25, z],
  }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  useEffect(() => {
    setTextures(allBlocks[texture]);
    // eslint-disable-next-line
  }, []);

  function calculateDistance(vector1, vector2) {
    if (vector1.length !== vector2.length) {
      throw new Error("Vectors must have the same dimensions");
    }

    let sumOfSquares = 0;
    for (let i = 0; i < vector1.length; i++) {
      sumOfSquares += Math.pow(vector1[i] - vector2[i], 2);
    }

    return Math.sqrt(sumOfSquares);
  }

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        const block = [x, y, z];
        const distance = calculateDistance(block, pos.current);
        if (distance < 6) {
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
        }
      }}
    >
      <boxGeometry attach="geometry" args={[1, 0.5, 1]} />
      <meshStandardMaterial
        transparent={true}
        map={textures?.right}
        attach={"material-0"}
      />
      <meshStandardMaterial
        transparent={true}
        map={textures?.left}
        attach={"material-1"}
      />
      <meshStandardMaterial
        transparent={true}
        map={textures?.top}
        attach={"material-2"}
      />
      <meshStandardMaterial
        transparent={true}
        map={textures?.bottom}
        attach={"material-3"}
      />
      <meshStandardMaterial
        transparent={true}
        map={textures?.front}
        attach={"material-4"}
      />
      <meshStandardMaterial
        transparent={true}
        map={textures?.back}
        attach={"material-5"}
      />
    </mesh>
  );
};

export default Slab;
