import { Canvas, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
// import Steve from "../../public/models/steve/Steve";
import Models from "../components/Models";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const gridRef = useRef();
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  return (
    <div className="bg-dirt h-screen">
      <div className=" mx-32 flex flex-row gap-15 h-full ">
        <div className="relative h-[40rem] w-[20rem] cursor-pointer ">
          <Canvas
            camera={{
              position: [8, 5, 0],
              fov: 80,
            }}
          >
            <Models />
            {/* <gridHelper
          ref={gridRef}
          args={[50, 50]} // You can adjust the size of the grid as needed
        /> */}
          </Canvas>
          <p className="position-abs text-font bg-gray-300/30 text-white px-2 py-1 ">
            Narayan Gawas
          </p>
        </div>
        <div className="flex flex-col gap-5 flex-grow my-10">
          <div className="black-glassmorphism w-full flex-grow p-6 flex flex-col gap-5">
            <div>
              <p className="text-font text-yellow-300 text-xl">
                Full Stack Web Devloper
              </p>
              <p className="text-font text-white text-justify">
                Hey there! I'm Narayan Gawas, a full-stack web developer with a
                passion for building digital worlds inspired by the creativity
                of Minecraft. From crafting pixel-perfect designs to coding
                redstone-like functionality, I thrive on turning ideas into
                immersive web experiences. Let's embark on a digital adventure
                together!
              </p>
            </div>
            <div>
              <p className="text-font text-white text-center text-xl">
                Languages
              </p>
              <div className="mx-10  grid grid-cols-2 gap-5 mt-5">
                {/* 1  */}
                <div className="relative bg-btn text-gray-300 ">
                  <div className=" bg-black/50  py-2 flex justify-center">
                    <span>Python: 100</span>
                  </div>
                  <div className="absolute top-0 right-0 w-[1.5rem] h-full border-2 border-black bg-btn"></div>
                </div>
                {/* 2  */}
                <div className="relative bg-btn text-gray-300 ">
                  <div className=" bg-black/50  py-2 flex justify-center">
                    <span>Java: 80</span>
                  </div>
                  <div className="absolute top-0 right-[20%] w-[1.5rem] h-full border-2 border-black bg-btn"></div>
                </div>
                {/* 3  */}
                <div className="relative bg-btn text-gray-300 ">
                  <div className=" bg-black/50  py-2 flex justify-center">
                    <span>Javascript: 90</span>
                  </div>
                  <div className="absolute top-0 right-[10%] w-[1.5rem] h-full border-2 border-black bg-btn"></div>
                </div>
                {/* 4  */}
                <div className="relative bg-btn text-gray-300 ">
                  <div className=" bg-black/50  py-2 flex justify-center">
                    <span>C: 40</span>
                  </div>
                  <div className="absolute top-0 right-[60%] w-[1.5rem] h-full border-2 border-black bg-btn"></div>
                </div>
                {/* 5 */}
                <div className="relative bg-btn text-gray-300 ">
                  <div className=" bg-black/50  py-2 flex justify-center">
                    <span>HTML: 100</span>
                  </div>
                  <div className="absolute top-0 right-0 w-[1.5rem] h-full border-2 border-black bg-btn"></div>
                </div>
                {/* 6 */}
                <div className="relative bg-btn text-gray-300 ">
                  <div className=" bg-black/50  py-2 flex justify-center">
                    <span>CSS: 90</span>
                  </div>
                  <div className="absolute top-0 right-[10%] w-[1.5rem] h-full border-2 border-black bg-btn"></div>
                </div>
              </div>
            </div>
            {/* <div>
              <div>
                <p className="text-font text-gray-300">GeeksforGeeks</p>
                <a href="" className="ml-5 text-font text-white">
                  www.gfg.com
                </a>
              </div>
              <div>
                <p className="text-font text-gray-300">Codechef</p>
                <a href="" className="ml-5 text-font text-white">
                  www.gfg.com
                </a>
              </div>
              <div>
                <p className="text-font text-gray-300">HackerRank</p>
                <a href="" className="ml-5 text-font text-white">
                  www.gfg.com
                </a>
              </div>
            </div> */}
            <div>
              <p className="text-font text-white text-center text-xl">
                Socials
              </p>
              <div className="mx-10  grid grid-cols-2 gap-5 mt-5">
                {/* 1  */}
                <a
                  href="https://www.linkedin.com/in/narayan-gawas-5746b0179"
                  target="blank"
                  onClick={playButtonSound}
                  className=" minecraft-btn text-gray-300  py-2 flex justify-center"
                >
                  <span>LinkedIn</span>
                </a>
                {/* 2  */}
                <a
                  href="https://github.com/MayureshGawas99"
                  target="blank"
                  onClick={playButtonSound}
                  className=" minecraft-btn text-gray-300  py-2 flex justify-center"
                >
                  <span>Github</span>
                </a>
                {/* 3  */}
                <a
                  href="https://www.geeksforgeeks.org/user/narayan01000111/"
                  target="blank"
                  onClick={playButtonSound}
                  className=" minecraft-btn text-gray-300  py-2 flex justify-center"
                >
                  <span>GeeksforGeeks</span>
                </a>
                {/* 4  */}
                <a
                  href="https://www.codechef.com/users/spt2021201070"
                  target="blank"
                  onClick={playButtonSound}
                  className=" minecraft-btn text-gray-300  py-2 flex justify-center"
                >
                  <span>Codechef</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-row gap-2 ">
            <button
              onClick={() => {
                playButtonSound();
                window.open(
                  "https://drive.google.com/file/d/1w8khIE1RgZFkH92ELXeaJYZW33hdu-ah/view?usp=sharing",
                  "_blank"
                );
              }}
              type="button"
              className="minecraft-btn w-[10rem] py-1 text-gray-300"
              // className="w-fit cursor-pointer px-4 bg-stone py-2  text-font text-xl  text-gray-200 border-[3px] border-black hover:border-white"
            >
              See Resume
            </button>
            <button
              onClick={() => {
                playButtonSound();
                navigate("/");
              }}
              type="button"
              className="minecraft-btn w-[10rem] py-1 text-gray-300"
              // className="w-fit cursor-pointer px-4 bg-stone py-2  text-font text-xl  text-gray-200 border-[3px] border-black hover:border-white"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
