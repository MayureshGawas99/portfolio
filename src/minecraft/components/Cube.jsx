import { useBox } from "@react-three/cannon";
import React, { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import { useGameContext } from "../../context/GameContext";
import { flintAndSteelCLick } from "../sounds/sounds";

const Cube = ({ position, texture }) => {
  const [textures, setTextures] = useState([]);
  const [rotational, setRotational] = useState(false);
  const { pos, active, inNether, setInNether, allBlocks, setIsPortalLit } =
    useGameContext();
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube, cubes] = useStore((state) => [
    state.addCube,
    state.removeCube,
    state.cubes,
  ]);

  useEffect(() => {
    const { right, left, top, bottom, front, back, rotational } =
      allBlocks[texture];

    setTextures([right, left, top, bottom, front, back]);
    setRotational(rotational);
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
        console.log(e);
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        const block = [x, y, z];
        console.log(block);
        const distance = calculateDistance(block, pos.current);
        const filteredArray = cubes.filter((obj) => {
          return obj.pos[0] === x && obj.pos[1] === y && obj.pos[2] === z;
        });
        if (distance < 6) {
          if (
            filteredArray[0].texture === "obsidian" &&
            active === "flint_and_steel"
          ) {
            setInNether(!inNether);
            // console.log(inNether);
            setIsPortalLit(true);

            const audio = new Audio(flintAndSteelCLick);
            audio.play();
            setInterval(() => {
              window.open(inNether ? "/loading" : "/nether-loading", "_self");
            }, 1500);
          } else {
            if (e.ctrlKey && rotational) {
              //add rotate logic here
              const last = textures.pop();
              const secondlast = textures.pop();
              const newTextures = [secondlast, last, ...textures];
              setTextures(newTextures);
            } else if (e.altKey) {
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
        }
      }}
    >
      <boxGeometry attach="geometry" />

      {textures?.map((t, index) => (
        <meshStandardMaterial
          key={index}
          transparent={true}
          map={t}
          attach={`material-${index}`}
        />
      ))}
    </mesh>
  );
};

export default Cube;
