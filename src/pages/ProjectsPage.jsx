import React, { useEffect } from "react";
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

  useEffect(() => {
    setTimeout(() => {
      alert(
        "Please note: All projects listed here are hosted on free instances, so they may take 1-2 minutes to fully load after being idle. We appreciate your patience!"
      );
    }, 500);
  }, []);

  return (
    <div className="bg-dirt h-screen py-6 flex flex-col gap-5">
      <div className=" ">
        <p className="  text-center text-xl text-font  text-white">
          Select Personal Project
        </p>
      </div>
      <div className="flex-grow bg-black/50 p-1  overflow-x-auto">
        <div
          onClick={() => navigate("/loading")}
          className=" hidden mx-auto max-w-3xl hover:border  my-5 md:flex flex-row gap-2 cursor-pointer"
        >
          <img
            src={icon}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] w-[7rem] h-[7rem]"
          />
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
          href="https://blogsite-mg.netlify.app/"
          target="blank"
          className="md:mx-auto mx-2 max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
        >
          <img
            src={icon3}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
          />
          <div>
            <p className="text-font  text-white md:mb-1 md:text-xl text-sm">
              BlogSite
            </p>
            <p className="text-font text-gray-500 md:text-base text-xs md:text-justify line-clamp-3">
              A technology-focused platform delivering insightful and engaging
              content for tech enthusiasts and professionals
            </p>
            <p className="text-font   text-yellow-300 md:text-base text-xs">
              MongoDB, Express, React, Node.js
            </p>
          </div>
        </a>
        <a
          href="https://mg-ecomapp.netlify.app/"
          target="blank"
          className="md:mx-auto mx-2 max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
        >
          <img
            src={icon2}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
          />
          <div>
            <p className="text-font  text-white md:mb-1 md:text-xl text-sm">
              Ecom Website
            </p>
            <p className="text-font text-gray-500 md:text-base text-xs md:text-justify line-clamp-3">
              The e-commerce website project aims to create an online platform
              that enables users to browse, search, & purchase products from
              various categories.
            </p>
            <p className="text-font  text-yellow-300 md:text-base text-xs">
              MongoDB, Express, React, Node.js
            </p>
          </div>
        </a>
        <a
          href="https://project-sahyog.netlify.app/"
          target="blank"
          className="md:mx-auto mx-2 max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
        >
          <img
            src={icon3}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
          />
          <div>
            <p className="text-font  text-white md:mb-1 md:text-xl text-sm">
              Project Sahyog
            </p>
            <p className="text-font text-gray-500 md:text-base text-xs md:text-justify line-clamp-3">
              Project Sahyog is an online platform for sharing & discovering
              student projects in Indian universities/colleges to promote
              innovation & collaboration.
            </p>
            <p className="text-font  text-yellow-300 md:text-base text-xs">
              MongoDB, Express, React, Node.js, Bootstrap
            </p>
          </div>
        </a>
      </div>
      <div className="flex justify-center flex-row gap-5 ">
        <button
          onClick={() => {
            playButtonSound();
            navigate("/loading");
          }}
          type="button"
          className="minecraft-btn w-[10rem] text-white hidden md:block"
        >
          <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 px-2 h-full flex justify-center items-center">
            <span>Play World</span>
          </div>
        </button>

        <button
          onClick={() => {
            playButtonSound();
            navigate("/");
          }}
          type="button"
          className="minecraft-btn w-[10rem] text-white"
        >
          <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 px-2 h-full flex justify-center items-center">
            <span>Back</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
