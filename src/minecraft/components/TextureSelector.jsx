import React, { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../images/images";

import useKeyboard from "../hooks/useKeyboard";

const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("dirt");
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const textures = { dirt, grass, glass, wood, log };

    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      console.log("preesed", pressedTexture);
      setTexture(pressedTexture[0]);
      setActive(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);

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
    <div className="bottom-align ">
      {visible && (
        <p className="text-font text-white text-center">
          {active.toUpperCase()}
        </p>
      )}
      <div className="flex flex-row">
        <div
          className={`${
            active === "dirt" ? "border-white" : "border-gray-500"
          } border-4 p-2`}
        >
          <img src={dirtImg} alt="" className="w-10" />
        </div>
        <div
          className={`${
            active === "grass" ? "border-white" : "border-gray-500"
          } border-4 p-2`}
        >
          <img src={grassImg} alt="" className="w-10" />
        </div>
        <div
          className={`${
            active === "glass" ? "border-white" : "border-gray-500"
          } border-4 p-2`}
        >
          <img src={glassImg} alt="" className="w-10" />
        </div>
        <div
          className={`${
            active === "wood" ? "border-white" : "border-gray-500"
          } border-4 p-2`}
        >
          <img src={woodImg} alt="" className="w-10" />
        </div>
        <div
          className={`${
            active === "log" ? "border-white" : "border-gray-500"
          } border-4 p-2`}
        >
          <img src={logImg} alt="" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default TextureSelector;
