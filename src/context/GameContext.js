// Custom hook to use the context
import React, { createContext, useContext, useRef, useState } from "react";
export const useGameContext = () => useContext(GameContext);

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [active, setActive] = useState("dirt");
  const [keyActionMap, setkeyActonMap] = useState({
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
  });

  return (
    <GameContext.Provider
      value={{
        keyActionMap,
        setkeyActonMap,
        active,
        setActive,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
