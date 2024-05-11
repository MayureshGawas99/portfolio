import React from "react";
import icon from "../assets/pan1.png";
import { useNavigate } from "react-router-dom";
import buttonSound from "../assets/sounds/minecraft_click.mp3";

const ControlsPage = () => {
  const navigate = useNavigate();
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
        <p className=" mt-5 text-center text-xl text-font  text-yellow-300">
          Movements
        </p>
        <div className="mx-32  grid grid-cols-12 gap-5 mt-5">
          {/* 1  */}

          <p className="col-span-8 text-lg text-font  text-white">
            Forward Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-gray-300  py-2 flex justify-center"
          >
            <span>W</span>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Backward Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-gray-300  py-2 flex justify-center"
          >
            <span>S</span>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Left Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-gray-300  py-2 flex justify-center"
          >
            <span>A</span>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Right Movement
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-gray-300  py-2 flex justify-center"
          >
            <span>D</span>
          </div>
        </div>
        <p className=" mt-5 text-center text-xl text-font  text-yellow-300">
          Blocks
        </p>
        <div className="mx-32  grid grid-cols-12 gap-5 mt-5">
          {/* 1  */}

          <p className="col-span-8 text-lg text-font  text-white">
            Place Block
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-gray-300  py-2 flex justify-center"
          >
            <span>Click</span>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Destroy Block
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-gray-300  py-2 flex justify-center"
          >
            <span>Alt + Click</span>
          </div>
          <p className="col-span-8 text-lg text-font  text-white">
            Change Block
          </p>
          <div
            onClick={playButtonSound}
            className=" col-span-4 minecraft-btn text-gray-300  py-2 flex justify-center"
          >
            <span> 1 - 5 Digits</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row gap-2 ">
        <button
          onClick={() => {
            playButtonSound();
            navigate("/play");
          }}
          type="button"
          className="minecraft-btn w-[10rem] py-1 text-gray-300"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ControlsPage;
