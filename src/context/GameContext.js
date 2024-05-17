// Custom hook to use the context
import React, { createContext, useContext, useRef, useState } from "react";
import { blocks } from "../minecraft/blocks/blocks";
import { skillBlocks } from "../minecraft/blocks/skills";
export const useGameContext = () => useContext(GameContext);

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [inNether, setInNether] = useState(false);
  const [isPortalLit, setIsPortalLit] = useState(false);
  const [active, setActive] = useState(inNether ? "react" : "dirt");
  const [allBlocks, setAllBlocks] = useState(inNether ? blocks : skillBlocks);
  const pos = useRef([0, 0, 0]);
  const [keyActionMap, setKeyActionMap] = useState(
    inNether
      ? {
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
        }
      : {
          KeyW: "moveForward",
          KeyS: "moveBackward",
          KeyA: "moveLeft",
          KeyD: "moveRight",
          KeyE: "openInventory",
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
        }
  );

  return (
    <GameContext.Provider
      value={{
        pos,
        keyActionMap,
        setKeyActionMap,
        active,
        setActive,
        inNether,
        setInNether,
        allBlocks,
        setAllBlocks,
        isPortalLit,
        setIsPortalLit,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
