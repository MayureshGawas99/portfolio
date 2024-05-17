import React, { useContext } from "react";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { AppContext } from "../context/AppContext";
import { VscMute, VscUnmute } from "react-icons/vsc";

const AudioPlayer = ({}) => {
  const { isPlaying, setIsPlaying } = useContext(AppContext);

  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  const toggleAudio = () => {
    playButtonSound();
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        toggleAudio();
      }}
      className="absolute top-0 right-0 cursor-pointer mr-2  mt-2 text-font text-xl  minecraft-btn text-white z-20"
    >
      <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full p-2 h-full flex justify-center">
        <span>{isPlaying ? <VscUnmute /> : <VscMute />}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
