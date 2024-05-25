import React from "react";
import { useNavigate } from "react-router-dom";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { useGameContext } from "../context/GameContext";

const ControlsPage = () => {
  const navigate = useNavigate();
  const { inNether } = useGameContext();

  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  return (
    <div className="bg-dirt h-screen py-6 flex flex-col gap-5">
      <div className=" ">
        <p className="  text-center text-xl text-font  text-white">Controls</p>
      </div>
      <div className="flex-grow   bg-black/50">
        <p className=" mt-2 text-center text-xl text-font  text-yellow-300">
          Movements
        </p>
        <div className="mx-32  grid grid-cols-12 gap-5 mt-2">
          {/* 1  */}

          <p className="col-span-8 text-lg text-font  text-white">
            Forward Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span>W</span>
            </div>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Backward Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span>S</span>
            </div>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Left Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span>A</span>
            </div>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Right Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span>D</span>
            </div>
          </div>
        </div>
        <p className=" mt-2 text-center text-xl text-font  text-yellow-300">
          Blocks
        </p>
        <div className="mx-32  grid grid-cols-12 gap-5 mt-2">
          {/* 1  */}

          <p className="col-span-8 text-lg text-font  text-white">
            Place Block
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span>Right Click</span>
            </div>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Destroy Block
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span>Left Click</span>
            </div>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Change Block
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span> 0 - 9 Digits</span>
            </div>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">Inventory</p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-white  flex justify-center"
          >
            <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
              <span> E</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row gap-2 ">
        <button
          onClick={() => {
            playButtonSound();

            navigate(inNether ? "/nether" : "/overworld");
          }}
          type="button"
          className="minecraft-btn w-[10rem]  text-white"
        >
          <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1.5 h-full flex justify-center">
            <span> Done</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ControlsPage;
