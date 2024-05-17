import React from "react";
import { useNavigate } from "react-router-dom";
import buttonSound from "../../assets/sounds/minecraft_click.mp3";

const Options = () => {
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  // const { inNether } = useGameContext();

  return (
    <div className=" absolute bottom-10 left-5 flex flex-col gap-2 z-20">
      <button
        onClick={(e) => {
          e.stopPropagation();
          playButtonSound();
          navigate("/controls");
          // navigate(inNether ? "/loading" : "/nether-loading");
        }}
        type="button"
        className="minecraft-btn w-[10rem] py-1 text-gray-300"
      >
        Controls
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          playButtonSound();
          navigate("/");
        }}
        type="button"
        className="minecraft-btn w-[10rem] px-2 py-1 text-gray-300"
      >
        Quit
      </button>
    </div>
  );
};

export default Options;
