import React, { useEffect } from "react";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { FaLock, FaLongArrowAltRight } from "react-icons/fa";
import { items } from "../context/CraftItems";
import DragComponent from "../components/DragComponent";
import { AppContext, useAppContext } from "../context/AppContext";
import DropComponent from "../components/DropComponent";
import { MdDelete } from "react-icons/md";
import { reactLogo } from "../minecraft/images/skillsLogo";
import { diamondChest } from "../assets/icons/iconImages";

const SkillsPage = () => {
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  const { currentRecipe, setCurrentRecipe } = useAppContext(AppContext);

  useEffect(() => {
    console.log(currentRecipe);
  }, [currentRecipe]);

  return (
    <div className="flex flex-col h-screen overflow-y-auto bg-dirt">
      <div className="flex justify-end mx-6 my-6 mb-4">
        <button
          onClick={() => {
            playButtonSound();
            navigate("/");
          }}
          type="button"
          className="minecraft-btn w-[6rem] text-white "
        >
          <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 px-2 h-full flex justify-center items-center">
            <span>Back</span>
          </div>
        </button>
      </div>
      {/* Mobile Screen  */}
      <div className="">
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-center">
            <div className="w-fit flex bg-[#c9c7c8] rounded-lg border-2 border-black flex-shrink-0  ">
              <div className="p-4 border-4 border-t-white border-l-white border-b-[#555555] border-r-[#555555] rounded-lg ">
                <div className="flex flex-col items-center mb-2">
                  <div className="w-fit">
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-xl text-gray-600 text-font">
                        Crafting
                      </p>
                      <MdDelete
                        size={20}
                        className="text-gray-600 transition-all duration-150 ease-in-out cursor-pointer hover:scale-125"
                        onClick={() => {
                          setCurrentRecipe([
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                          ]);
                        }}
                      />
                    </div>

                    <div className="flex flex-row items-center justify-center mb-2 md:gap-5">
                      <div className="grid grid-cols-3 w-fit">
                        {Array.from({ length: 9 }, (_, i) => i).map((ind) => (
                          <div
                            className={` border-[3px] border-t-[#313131] border-l-[#313131] bg-[#919191] p-1 cursor-pointer`}
                            key={ind}
                          >
                            <DropComponent
                              index={ind}
                              item={currentRecipe[ind]}
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <FaLongArrowAltRight
                          size={50}
                          className="text-[#919191]"
                        />
                      </div>
                      <div
                        className={` border-[3px] border-t-[#313131] border-l-[#313131] bg-[#919191] p-1  cursor-pointer`}
                      >
                        <div className="w-10 h-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl text-gray-600 text-font">Inventory</p>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-5 w-fit ">
                      {Array.from({ length: 20 }, (_, i) => i).map((ind) => (
                        <div
                          className={` border-[3px] h-fit w-fit border-t-[#313131] border-l-[#313131] bg-[#919191] p-1 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer`}
                          key={ind}
                        >
                          {ind < items.length ? (
                            <a
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={items[
                                ind
                              ].name.toUpperCase()}
                              className="text-font"
                              href="#"
                            >
                              <DragComponent item={items[ind]} />
                            </a>
                          ) : (
                            <div className="w-10 h-10"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-6 mx-6 black-glassmorphism">
            <div className="flex flex-col mb-4 md:items-center md:justify-between md:flex-row">
              <p className="text-base text-yellow-300 text-font md:text-xl">
                Unlock My Skills by Crafting
              </p>
              <p className="text-sm text-white text-font md:text-base">
                Skills unlocked: 0/10
              </p>
            </div>
            <a
              href="https://blogsite-mg.netlify.app/"
              target="blank"
              className="flex flex-row items-center justify-between mx-2 mb-5 opacity-50 cursor-pointer hover:border"
            >
              <div className="flex flex-row gap-2">
                <img src={reactLogo} alt="" className=" w-[5rem] h-[5rem]" />

                <div>
                  <p className="text-sm text-white text-font">React</p>

                  <p className="text-xs text-yellow-300 text-font ">
                    Unlock by crafting diamond chestplate
                  </p>
                </div>
              </div>
              <div className="relative flex-shrink-0 hidden md:block">
                <img src={diamondChest} alt="" className=" w-[5rem] h-[5rem]" />

                <FaLock
                  size={30}
                  className="absolute text-white -translate-x-1/2 -translate-y-1/2 opacity-100 top-1/2 left-1/2"
                />
              </div>
            </a>
          </div>
        </div>
        <Tooltip id="my-tooltip" noArrow={true} className="custom-tooltip" />
      </div>
      {/* Desktop Screen  */}
    </div>
  );
};

export default SkillsPage;
