import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Models from "../components/Models";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

const AboutPage = () => {
  const navigate = useNavigate();
  const python = 100;
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  return (
    <div className="h-screen bg-dirt ">
      <div className="flex flex-row h-full mx-6 md:mx-2 lg:mx-32 gap-15">
        <div className="relative h-[40rem] w-[20rem] cursor-pointer hidden md:block ">
          <Canvas
            camera={{
              position: [8, 5, 0],
              fov: 80,
            }}
          >
            <Models />
          </Canvas>
          <p className="px-2 py-1 text-white position-abs text-font bg-gray-300/30 ">
            Narayan Gawas
          </p>
        </div>
        <div className="flex flex-col flex-grow gap-5 my-10 overflow-x-auto">
          <div className="flex flex-col flex-grow w-full gap-2 p-6 black-glassmorphism">
            <div>
              <p className="text-base text-yellow-300 text-font md:text-xl">
                Full Stack Web Devloper
              </p>
              <p className="text-sm text-justify text-white text-font md:text-base">
                Hey there! I'm Narayan Gawas, a full-stack web developer with a
                passion for building digital worlds inspired by creativity of
                Minecraft. From crafting pixel-perfect designs to coding
                redstone-like functionality, I thrive on turning ideas into
                immersive web experiences. Let's embark on a digital adventure
                together!
              </p>
            </div>
            <div>
              <p className="text-base text-center text-yellow-300 text-font md:text-xl">
                Languages
              </p>
              <div className="grid grid-cols-2 gap-4 mx-0 mt-2 md:mx-10">
                {/* 1  */}
                <Slider label={"Python"} defaultValue={100} />
                {/* 2  */}
                <Slider label={"Java"} defaultValue={80} />
                {/* 3  */}
                <Slider label={"C"} defaultValue={65} />
                {/* 4  */}
                <Slider label={"Javascript"} defaultValue={90} />
                {/* 5 */}
                <Slider label={"HTML"} defaultValue={100} />
                {/* 6 */}
                <Slider label={"CSS"} defaultValue={90} />
              </div>
            </div>
            <div>
              <p className="text-base text-center text-yellow-300 text-font md:text-xl">
                Socials
              </p>
              <div className="grid grid-cols-2 gap-4 mx-0 mt-2 md:mx-10">
                {/* 1  */}
                <a
                  href="https://www.linkedin.com/in/narayan-gawas-5746b0179"
                  target="blank"
                  onClick={playButtonSound}
                  className="flex justify-center text-white minecraft-btn"
                >
                  <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2  h-full flex justify-center items-center">
                    <span>LinkedIn</span>
                  </div>
                </a>
                {/* 2  */}
                <a
                  href="https://github.com/MayureshGawas99"
                  target="blank"
                  onClick={playButtonSound}
                  className="flex justify-center text-white minecraft-btn"
                >
                  <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2  h-full flex justify-center items-center">
                    <span>Github</span>
                  </div>
                </a>
                {/* 3  */}
                <a
                  href="https://www.geeksforgeeks.org/user/narayan01000111/"
                  target="blank"
                  onClick={playButtonSound}
                  className="flex justify-center text-white minecraft-btn"
                >
                  {" "}
                  <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2  h-full flex justify-center items-center">
                    <span>GeeksforGeeks</span>
                  </div>
                </a>
                {/* 4  */}
                <a
                  href="https://www.codechef.com/users/narayan_gawas"
                  target="blank"
                  onClick={playButtonSound}
                  className="flex justify-center text-white minecraft-btn"
                >
                  <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-2  h-full flex justify-center items-center">
                    <span>Codechef</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-2 ">
            <button
              onClick={() => {
                playButtonSound();
                console.log(process.env.REACT_APP_RESUME_URL);
                window.open(process.env.REACT_APP_RESUME_URL, "_blank");
              }}
              type="button"
              className="minecraft-btn w-[10rem]  text-white"
            >
              <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1  h-full flex justify-center items-center">
                <span>See Resume</span>
              </div>
            </button>
            <button
              onClick={() => {
                playButtonSound();
                navigate("/");
              }}
              type="button"
              className="minecraft-btn w-[10rem]  text-white"
            >
              <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1  h-full flex justify-center items-center">
                <span>Back</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
