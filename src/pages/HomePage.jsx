import React, { useContext, useEffect } from "react";
import Panorama from "../components/Panorama";
import minecraftLogo from "../assets/minecraftLogo.png";
import AudioPlayer from "../components/AudioPlayer";
import bgSound from "../assets/sounds/Haggstrom.mp3";
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
  useEffect(() => {
    if (!isPlaying) {
      setModalOpen(true);
    }
  }, []);
  return (
    <div className="relative">
      <Panorama />
      <div className="relative  z-10 flex justify-center items-center">
        <div className="relative">
          <img src={minecraftLogo} alt="" className="w-[35rem] " />
          <p className="text-font text-yellow-300 text-2xl grow-shrink">
            Made by Narayan!
          </p>

          <div
            onClick={() => {
              playButtonSound();
              navigate("/projects");
            }}
            className=" cursor-pointer mx-16  py-2 mt-5 text-font text-xl flex justify-center minecraft-btn text-gray-300"
          >
            <span>Singleplayer</span>
          </div>
          <div
            onClick={() => {
              playButtonSound();
              navigate("/about");
            }}
            className=" cursor-pointer mx-16  py-2 mt-5 text-font text-xl flex justify-center minecraft-btn text-gray-300"
          >
            <span>About me</span>
          </div>

          <AudioPlayer />
        </div>
        <div className=" absolute top-[11rem]">
          <h1 className="title text-3xl text-[#d3c7c5] text-border ">
            PORTFOLIO EDITION
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
