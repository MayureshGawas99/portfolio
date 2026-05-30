import React, { useContext } from "react";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { AppContext } from "../context/AppContext";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { MdQuestionMark } from "react-icons/md";

const AudioPlayer = ({}) => {
  const {
    isPlaying,
    setIsPlaying,
    isJoyrideRunning,
    setIsJoyrideRunning,
    startJoyride,
  } = useContext(AppContext);

  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  const toggleAudio = () => {
    playButtonSound();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute z-20 flex flex-row gap-2 right-2 top-2">
      <div
        onClick={startJoyride}
        className="text-xl text-white cursor-pointer text-font minecraft-btn"
      >
        <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full p-2 h-full flex justify-center">
          <MdQuestionMark />
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleAudio();
        }}
        className="text-xl text-white cursor-pointer text-font minecraft-btn"
      >
        <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full p-2 h-full flex justify-center">
          <span>{isPlaying ? <VscUnmute /> : <VscMute />}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
