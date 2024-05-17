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
        <div className="fixed top-0 left-0  w-full h-full bg-dirt bg-opacity-50 flex justify-center z-50 items-center">
          <div className=" p-6">
            <p className="text-white mb-5 text-font text-xl">
              Enable Chrome to play music for a great experience.
            </p>
            <div className="flex justify-center gap-5">
              <button
                onClick={() => {
                  playButtonSound();
                  setIsPlaying(true);
                  closeModal();
                }}
                type="button"
                className=" cursor-pointer text-font   minecraft-btn text-white w-[7rem]"
              >
                <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 px-2 h-full flex justify-center items-center">
                  <span>Allow</span>
                </div>
              </button>
              <button
                onClick={() => {
                  playButtonSound();
                  closeModal();
                }}
                type="button"
                className=" cursor-pointer  text-font   minecraft-btn text-white w-[7rem]"
              >
                <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 px-2 h-full flex justify-center items-center">
                  <span>Reject</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioModal;
