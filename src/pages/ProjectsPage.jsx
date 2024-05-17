import React from "react";
import icon from "../assets/pan1.png";
import icon2 from "../assets/pan2.png";
import icon3 from "../assets/pan3.png";
import { useNavigate } from "react-router-dom";
import buttonSound from "../assets/sounds/minecraft_click.mp3";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  return (
    <div className="bg-dirt h-screen py-6 flex flex-col gap-5">
      <div className=" ">
        <p className="  text-center text-xl text-font  text-white">
          Select Project
        </p>
      </div>
      <div className="flex-grow bg-black/50">
        <div
          onClick={() => navigate("/loading")}
          className="mx-auto max-w-3xl hover:border  my-5 flex flex-row gap-2 cursor-pointer"
        >
          <img src={icon} alt="" className="w-[6rem]" />
          <div>
            <p className="text-font text-white mb-1 text-xl">MineCraft World</p>
            <p className="text-font text-gray-500 text-base">
              Creative, Version 1.20.1
            </p>
            <p className="text-font text-yellow-300 text-base">
              React, Tailwind, ThreeJS
            </p>
          </div>
        </div>
        <a
          href="https://mg-ecomapp.netlify.app/"
          target="blank"
          className="mx-auto max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
        >
          <img src={icon2} alt="" className="w-[6rem]" />
          <div>
            <p className="text-font text-white mb-1 text-xl">Ecom Website</p>
            <p className="text-font text-gray-500 text-base">
              The e-commerce website project aims to create an online platform
              that enables users to browse, search, and purchase products from
              various categories.
            </p>
            <p className="text-font text-yellow-300 text-base">
              MongoDB, Express, React, Node.js
            </p>
          </div>
        </a>
        <a
          href="https://project-sahyog.netlify.app/"
          target="blank"
          className="mx-auto max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
        >
          <img src={icon3} alt="" className="w-[6rem]" />
          <div>
            <p className="text-font text-white mb-1 text-xl">Project Sahyog</p>
            <p className="text-font text-gray-500 text-base">
              Project Sahyog is an online platform for sharing and discovering
              student projects in Indian universities/colleges to promote
              innovation and collaboration.
            </p>
            <p className="text-font text-yellow-300 text-base">
              MongoDB, Express, React, Node.js, Bootstrap
            </p>
          </div>
        </a>
      </div>
      <div className="flex justify-center flex-row gap-2 ">
        <button
          onClick={() => {
            playButtonSound();
            navigate("/loading");
          }}
          type="button"
          className="minecraft-btn w-[10rem] py-1 text-gray-300"
        >
          Play World
        </button>

        <button
          onClick={() => {
            playButtonSound();
            navigate("/");
          }}
          type="button"
          className="minecraft-btn w-[10rem] px-2 py-1 text-gray-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
