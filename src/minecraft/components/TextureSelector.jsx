import React, { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import { useGameContext } from "../../context/GameContext";
import { blocks } from "../blocks/blocks";

const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const { keyActionMap, active, setActive } = useGameContext();
  const actions = useKeyboard();
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const {
    Digit1,
    Digit2,
    Digit3,
    Digit4,
    Digit5,
    Digit6,
    Digit7,
    Digit8,
    Digit9,
  } = useKeyboard();

  useEffect(() => {
    const textures = {
      Digit1,
      Digit2,
      Digit3,
      Digit4,
      Digit5,
      Digit6,
      Digit7,
      Digit8,
      Digit9,
    };

    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      console.log("preesed", pressedTexture);
      setTexture(keyActionMap[pressedTexture[0]]);
      setActive(keyActionMap[pressedTexture[0]]);
    }
  }, [
    setTexture,
    Digit1,
    Digit2,
    Digit3,
    Digit4,
    Digit5,
    Digit6,
    Digit7,
    Digit8,
    Digit9,
  ]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    <>
      {!actions.openInventory && (
        <div className="bottom-align ">
          {visible && (
            <p className="text-font text-white text-center">
              {active.toUpperCase()}
            </p>
          )}
          <div className="flex flex-row gap-1 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ind) => {
              // console.log(keyActionMap["Digit" + ind.toString()]);
              // console.log("Digit" + ind.toString());
              return (
                <div
                  key={ind}
                  className={`${
                    active === keyActionMap["Digit" + ind.toString()]
                      ? "border-white border-4"
                      : ""
                  }  w-14 h-14 bg-black/50 relative flex justify-center items-center`}
                >
                  <img
                    src={blocks[keyActionMap["Digit" + ind.toString()]]?.image}
                    alt=""
                    className="w-10 "
                  />
                  <p className="text-font text-white absolute bottom-0 right-0">
                    {ind}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TextureSelector;
