import { nanoid } from "nanoid";
import React from "react";
import { create } from "zustand";
import { house } from "../worlds/house";
import dirtPlaceSound from "../../assets/sounds/dirtPlace.mp3";
import dirtBreakSound from "../../assets/sounds/dirtBreak.mp3";
import woodPlaceSound from "../../assets/sounds/woodPlace.mp3";
import woodBreakSound from "../../assets/sounds/woodBreak.mp3";
import glassPlaceSound from "../../assets/sounds/glassPlace.mp3";
import glassBreakSound from "../../assets/sounds/glassBreak.mp3";

const useStore = create((set) => ({
  texture: "dirt",
  cubes: house,
  addCube: (x, y, z) => {
    set((prev) => {
      if (prev.texture === "dirt" || prev.texture === "grass") {
        const Sound = new Audio(dirtPlaceSound);
        Sound.play();
      } else if (prev.texture === "wood" || prev.texture === "log") {
        const Sound = new Audio(woodPlaceSound);
        Sound.play();
      } else if (prev.texture === "glass") {
        const Sound = new Audio(glassPlaceSound);
        Sound.play();
      }
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
      if (removed[0].texture === "dirt" || removed[0].texture === "grass") {
        const Sound = new Audio(dirtBreakSound);
        Sound.play();
      } else if (
        removed[0].texture === "wood" ||
        removed[0].texture === "log"
      ) {
        const Sound = new Audio(woodBreakSound);
        Sound.play();
      } else if (removed[0].texture === "glass") {
        const Sound = new Audio(glassBreakSound);
        Sound.play();
      }
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
