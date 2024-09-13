import React, { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import { useGameContext } from "../../context/GameContext";
import { flintAndSteel } from "../images/images";

const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const { keyActionMap, active, setActive, allBlocks, inNether } =
    useGameContext();
  const actions = useKeyboard();

  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  useEffect(() => {
    if (actions.openInventory) {
      setTexture(keyActionMap["Digit1"]);
      setActive(keyActionMap["Digit1"]);
    }
    // eslint-disable-next-line
  }, [actions.openInventory]);

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
    Digit0,
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
      Digit0,
    };

    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      setTexture(keyActionMap[pressedTexture[0]]);
      setActive(keyActionMap[pressedTexture[0]]);
    }
    // eslint-disable-next-line
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
    Digit0,
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
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-1 ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ind) => {
                return (
                  <div
                    key={ind}
                    className={`${
                      active === keyActionMap["Digit" + ind.toString()]
                        ? "border-white border-4"
                        : ""
                    }   w-14 h-14 bg-black/50 relative flex justify-center items-center`}
                  >
                    <img
                      src={
                        allBlocks[keyActionMap["Digit" + ind.toString()]]?.image
                      }
                      alt=""
                      className="w-10 "
                    />
                    <p
                      className={`text-font text-white absolute bottom-0 right-0 ${
                        inNether ? "text-yellow-300" : "text-white"
                      }`}
                    >
                      {ind}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row gap-1 ">
              <div
                className={`${
                  active === keyActionMap["Digit0"]
                    ? "border-white border-4"
                    : ""
                }  w-14 h-14 bg-black/50 relative flex justify-center items-center`}
              >
                <img src={flintAndSteel} alt="" className="w-10 " />
                <p
                  className={`text-font text-white absolute bottom-0 right-0 ${
                    inNether ? "text-yellow-300" : "text-white"
                  }`}
                >
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextureSelector;
