import React, { useContext } from "react";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { AppContext } from "../context/AppContext";

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
      onClick={toggleAudio}
      className="cursor-pointer mx-16  py-2 mt-5 text-font text-xl flex justify-center minecraft-btn text-gray-300"
    >
      <span>{isPlaying ? "Pause Music" : "Play Music"}</span>
    </div>
  );
};

export default AudioPlayer;
