import { useBox } from "@react-three/cannon";
import React, { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import { useGameContext } from "../../context/GameContext";
import { flintAndSteelCLick } from "../sounds/sounds";

const Cube = ({ position, texture, rotation, portal }) => {
  const [textures, setTextures] = useState([]);
  const [rotational, setRotational] = useState(false);

  const coordinatesExist = (coords, array) => {
    for (const obj of array) {
      // Check if the pos property of the object matches the coordinates
      if (
        obj.pos[0] === coords[0] &&
        obj.pos[1] === coords[1] &&
        obj.pos[2] === coords[2]
      ) {
        return true; // Coordinates exist in the array
      }
    }
    return false; // Coordinates do not exist in the array
  };

  const { pos, active, inNether, setInNether, allBlocks, setIsPortalLit } =
    useGameContext();
  const [ref, api] = useBox(() => ({
    type: "Static",
    position,
    rotation: [0, 0, 0],
  }));
  const [addCube, removeCube, cubes] = useStore((state) => [
    state.addCube,
    state.removeCube,
    state.cubes,
  ]);

  useEffect(() => {
    console.log(texture);
    const { right, left, top, bottom, front, back, rotational } =
      allBlocks[texture];
    setTextures([right, left, top, bottom, front, back]);
    setRotational(rotational);
    if (rotational) {
      api.rotation.set(...rotation);
    }
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
        const distance = calculateDistance(block, pos.current);
        const filteredArray = cubes.filter((obj) => {
          return obj.pos[0] === x && obj.pos[1] === y && obj.pos[2] === z;
        });
        const currentCube = filteredArray[0];
        if (distance < 6) {
          if (
            currentCube.texture === "obsidian" &&
            active === "flint_and_steel"
          ) {
            const audio = new Audio(flintAndSteelCLick);
            audio.play();
            if (coordinatesExist([x, y, z], portal)) {
              setInNether(!inNether);
              setIsPortalLit(true);
              setInterval(() => {
                window.open(inNether ? "/loading" : "/nether-loading", "_self");
              }, 1500);
            }
          } else {
            if (e.button === 0) {
              if (!coordinatesExist([x, y, z], portal)) {
                removeCube(x, y, z);
              }
              return;
            } else if (clickedFace === 0) {
              if (rotational) {
                if (currentCube.rotation[2] === Math.PI / 2) {
                  addCube(x, y + 1, z, [0, 0, 0]);
                } else {
                  addCube(x + 1, y, z, [0, 0, Math.PI / 2]);
                }
              } else {
                console.log("right");
                addCube(x + 1, y, z, [0, 0, Math.PI / 2]);
              }
              return;
            } else if (clickedFace === 1) {
              if (rotational) {
                if (currentCube.rotation[2] === Math.PI / 2) {
                  addCube(x, y - 1, z, [0, 0, 0]);
                } else {
                  addCube(x - 1, y, z, [0, 0, Math.PI / 2]);
                }
              } else {
                console.log("left");
                addCube(x - 1, y, z, [0, 0, Math.PI / 2]);
              }
              return;
            } else if (clickedFace === 2) {
              if (rotational) {
                if (currentCube.rotation[0] === Math.PI / 2) {
                  addCube(x, y, z + 1, [Math.PI / 2, 0, 0]);
                } else if (currentCube.rotation[2] === Math.PI / 2) {
                  addCube(x - 1, y, z, [0, 0, Math.PI / 2]);
                } else {
                  addCube(x, y + 1, z, [0, 0, 0]);
                }
              } else {
                addCube(x, y + 1, z, [0, 0, 0]);
              }
              console.log("top");
              return;
            } else if (clickedFace === 3) {
              if (rotational) {
                if (currentCube.rotation[0] === Math.PI / 2) {
                  addCube(x, y, z - 1, [Math.PI / 2, 0, 0]);
                } else if (currentCube.rotation[2] === Math.PI / 2) {
                  addCube(x + 1, y, z, [0, 0, Math.PI / 2]);
                } else {
                  addCube(x, y - 1, z, [0, 0, 0]);
                }
              } else {
                addCube(x, y - 1, z, [0, 0, 0]);
              }
              console.log("bottom");
              return;
            } else if (clickedFace === 4) {
              if (rotational) {
                if (currentCube.rotation[0] === Math.PI / 2) {
                  addCube(x, y - 1, z, [0, 0, 0]);
                } else {
                  addCube(x, y, z + 1, [Math.PI / 2, 0, 0]);
                }
              } else {
                addCube(x, y, z + 1, [Math.PI / 2, 0, 0]);
              }

              return;
            } else if (clickedFace === 5) {
              if (rotational) {
                if (currentCube.rotation[0] === Math.PI / 2) {
                  addCube(x, y + 1, z, [0, 0, 0]);
                } else {
                  addCube(x, y, z - 1, [Math.PI / 2, 0, 0]);
                }
              } else {
                addCube(x, y, z - 1, [Math.PI / 2, 0, 0]);
              }

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
