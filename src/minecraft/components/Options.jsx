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
        className="minecraft-btn w-[10rem] text-white"
      >
        <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
          <span>Controls</span>
        </div>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          playButtonSound();
          navigate("/");
        }}
        type="button"
        className="minecraft-btn w-[10rem] text-white"
      >
        <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
          <span>Quit</span>
        </div>
      </button>
    </div>
  );
};

export default Options;
