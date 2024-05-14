import { nanoid } from "nanoid";
import { create } from "zustand";
import { blocks } from "../blocks/blocks";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) => {
    set((prev) => {
      const block = blocks[prev.texture];
      const ind = getRandomIntInclusive(0, block?.placed?.length - 1);
      const audio = new Audio(block?.placed[ind]);
      audio.play();

      return {
        cubes: [
          ...prev.cubes,
          {
            key: nanoid(),
            pos: [x, y, z],
            texture: prev.texture,
          },
        ],
      };
    });
  },
  removeCube: (x, y, z) => {
    set((prev) => {
      const { removed, remaining } = prev.cubes.reduce(
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
      const block = blocks[removed[0].texture];
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
  saveWorld: () => {},
  resetWorld: () => {},
}));

export default useStore;
