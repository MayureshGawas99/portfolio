import { nanoid } from "nanoid";
import { create } from "zustand";
import { blocks } from "../blocks/blocks";
import { skillBlocks } from "../blocks/skills";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const useStore = create((set) => {
  return {
    texture: "dirt",
    nether: false,
    cubes: [],
    setCubes: (nether, cubes) => {
      set((prev) => {
        return {
          cubes: cubes || [],
          // cubes: [],
          nether,
          texture: nether ? "react" : "dirt",
        };
      });
    },
    addCube: (x, y, z, rotation) => {
      set((prev) => {
        const block = prev.nether
          ? skillBlocks[prev.texture]
          : blocks[prev.texture];
        const ind = getRandomIntInclusive(0, block?.placed?.length - 1);
        const audio = new Audio(block?.placed[ind]);
        audio.play();
        if (prev.texture !== "flint_and_steel") {
          return {
            cubes: [
              ...prev.cubes,
              {
                key: nanoid(),
                pos: [x, y, z],
                texture: prev.texture,
                rotation: rotation,
              },
            ],
          };
        }
        return {
          cubes: [...prev.cubes],
        };
      });
    },
    removeCube: (x, y, z) => {
      set((prev) => {
        const { removed } = prev.cubes.reduce(
          (acc, cube) => {
            const [X, Y, Z] = cube.pos;
            if (X !== x || Y !== y || Z !== z) {
              acc.remaining.push(cube);
            } else {
              acc.removed.push(cube);
            }
            return acc;
          },
          { removed: [], remaining: [] }
        );
        const block = prev.nether
          ? skillBlocks[removed[0].texture]
          : blocks[removed[0].texture];
        const ind = getRandomIntInclusive(0, block?.breaks?.length - 1);
        const audio = new Audio(block?.breaks[ind]);
        audio.play();

        return {
          cubes: prev.cubes.filter((cube) => {
            const [X, Y, Z] = cube.pos;
            return X !== x || Y !== y || Z !== z;
          }),
        };
      });
    },
    setTexture: (texture) => {
      set(() => ({
        texture,
      }));
    },
  };
});

export default useStore;
