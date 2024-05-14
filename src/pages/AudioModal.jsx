import React, { useContext } from "react";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { AppContext } from "../context/AppContext";

const AudioModal = () => {
  const { modalOpen, setModalOpen, setIsPlaying } = useContext(AppContext);

  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-dirt bg-opacity-50 flex justify-center z-50 items-center">
          <div className=" p-6">
            <p className="text-white mb-5 text-font text-xl">
              Enable Chrome to play music for a great experience.
            </p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  playButtonSound();
                  setIsPlaying(true);
                  closeModal();
                }}
                type="button"
                className="minecraft-btn px-2 py-1 text-gray-300"
              >
                Allow
              </button>
              <button
                onClick={() => {
                  playButtonSound();
                  closeModal();
                }}
                type="button"
                className="minecraft-btn px-2 py-1 text-gray-300"
              >
                Block
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioModal;
