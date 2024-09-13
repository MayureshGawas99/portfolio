import React from "react";
import { useGameContext } from "../../context/GameContext";
import buttonSound from "../../assets/sounds/minecraft_click.mp3";
import { useNavigate } from "react-router-dom";
import useMenu from "../hooks/useMenu";
import useStore from "../hooks/useStore";
import { netherWorld } from "../worlds/nether";
import { world } from "../worlds/world";

const GameMenu = () => {
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  const navigate = useNavigate();
  const { inNether } = useGameContext();
  const [actions, setActions] = useMenu();
  const [cubes, setCubes] = useStore((state) => [state.cubes, state.setCubes]);

  const getLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem(key));
    }
  };

  const setLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return (
    <>
      {actions.openMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="h-screen bg-black/50 absolute top-0 w-screen z-10 flex justify-center items-center"
        >
          <div className=" w-[35rem] h-[20rem] flex flex-col gap-5">
            <button type="button" className="minecraft-btn w-full text-white">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  playButtonSound();
                  setActions({ openMenu: false });
                }}
                className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center"
              >
                <span>Back to Game</span>
              </div>
            </button>
            <div className="flex flex-row gap-5">
              <button
                onClick={(e) => {
                  try {
                    e.stopPropagation();
                    playButtonSound();
                    if (inNether) {
                      setLocalStorage("nether", cubes);
                    } else {
                      setLocalStorage("overworld", cubes);
                    }
                  } catch (error) {
                    console.log(error);
                  }
                  setActions({ openMenu: false });
                }}
                type="button"
                className="minecraft-btn w-full text-white"
              >
                <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
                  <span>Save Game</span>
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playButtonSound();
                  if (inNether) {
                    const savedCubes = getLocalStorage("nether") || netherWorld;
                    setCubes(true, savedCubes);
                  } else {
                    const savedCubes = getLocalStorage("overworld") || world;
                    setCubes(false, savedCubes);
                  }
                  setActions({ openMenu: false });
                }}
                type="button"
                className="minecraft-btn w-full text-white"
              >
                <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
                  <span>Load Game</span>
                </div>
              </button>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                playButtonSound();
                navigate("/controls");
              }}
              type="button"
              className="minecraft-btn w-full text-white"
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
              className="minecraft-btn w-full text-white"
            >
              <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
                <span>Quit to Title</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GameMenu;
