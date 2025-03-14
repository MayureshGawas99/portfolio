import React, { useContext, useEffect } from "react";
import Panorama from "../components/Panorama";
import minecraftLogo from "../assets/minecraftLogo.png";
import AudioPlayer from "../components/AudioPlayer";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const { setModalOpen, isPlaying } = useContext(AppContext);
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  // useEffect(() => {
  //   if (!isPlaying) {
  //     setModalOpen(true);
  //   }
  //   // eslint-disable-next-line
  // }, []);
  return (
    <div className="relative w-screen h-screen ">
      <Panorama />
      <AudioPlayer />
      <div className="relative z-10 flex items-center justify-center ">
        <div className="relative flex flex-col items-center md:block">
          <img
            src={minecraftLogo}
            alt=""
            className="md:w-[35rem] w-[18rem] mt-24 md:mt-0 "
          />
          <p className="text-font text-yellow-300 md:text-2xl text-xs grow-shrink absolute top-[11.5rem] right-[-2rem]  md:top-[10rem] md:right-[-7rem]">
            Made by Narayan!
          </p>

          <div
            onClick={() => {
              playButtonSound();
              navigate("/projects");
            }}
            className="w-full mx-0 mt-5 text-xl text-white cursor-pointer md:w-auto md:mx-16 text-font minecraft-btn"
          >
            <div className="text-base md:text-xl border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2 h-full flex justify-center">
              <span>Singleplayer</span>
            </div>
          </div>
          <div
            onClick={() => {
              playButtonSound();
              navigate("/world");
            }}
            className="w-full mx-0 mt-5 text-xl text-white cursor-pointer md:w-auto md:mx-16 text-font minecraft-btn"
          >
            <div className="text-base md:text-xl border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2 h-full flex justify-center">
              <span>Story Mode</span>
            </div>
          </div>
          <div
            onClick={() => {
              playButtonSound();
              navigate("/about");
            }}
            className="w-full mx-0 mt-5 text-xl text-white cursor-pointer md:w-auto md:mx-16 text-font minecraft-btn"
          >
            <div className="text-base md:text-xl border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2 h-full flex justify-center">
              <span>About Me</span>
            </div>
          </div>
          <div
            onClick={() => {
              playButtonSound();
              navigate("/work-experience");
            }}
            className="w-full mx-0 mt-5 text-xl text-white cursor-pointer md:w-auto md:mx-16 text-font minecraft-btn"
          >
            <div className="text-base md:text-xl border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2 h-full flex justify-center">
              <span>Work Experience</span>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-5 md:w-auto md:mx-16">
            <div
              onClick={() => {
                playButtonSound();
                navigate("/advancements");
              }}
              className="mx-0 mt-5 text-xl text-white cursor-pointer text-font minecraft-btn"
            >
              <div className="text-base md:text-xl border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2 h-full flex justify-center">
                <span>Advancements</span>
              </div>
            </div>

            <div
              onClick={() => {
                playButtonSound();
                navigate("/skills");
              }}
              className="mx-0 mt-5 text-xl text-white cursor-pointer text-font minecraft-btn"
            >
              <div className="text-base md:text-xl border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2 h-full flex justify-center">
                <span>Skills</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute top-[11.5rem] md:top-[11rem]">
          <h1 className="title md:text-3xl text-lg text-[#d3c7c5] text-border ">
            PORTFOLIO EDITION
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
