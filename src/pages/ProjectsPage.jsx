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
    <div className="flex flex-col h-screen gap-5 py-6 bg-dirt">
      <div className="">
        <p className="text-xl text-center text-white text-font">
          Select Personal Project
        </p>
      </div>
      <div className="flex-grow p-1 overflow-x-auto bg-black/50">
        <div
          onClick={() => navigate("/loading")}
          className="flex-row hidden max-w-3xl gap-2 mx-2 my-5 cursor-pointer lg:flex md:mx-auto hover:border"
        >
          <img
            src={icon}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
          />
          <div>
            <p className="text-sm text-white text-font md:mb-1 md:text-xl">
              MineCraft World
            </p>
            <p className="text-xs text-gray-500 text-font md:text-base md:text-justify line-clamp-3">
              Creative, Version 1.20.1
            </p>
            <p className="text-xs text-yellow-300 text-font md:text-base">
              React, Tailwind, ThreeJS
            </p>
          </div>
        </div>
        <a
          href="https://blogsite-mg.netlify.app/"
          target="blank"
          className="flex flex-row max-w-3xl gap-2 mx-2 mt-5 mb-5 cursor-pointer lg:mt-0 md:mx-auto hover:border"
        >
          <img
            src={icon3}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
          />
          <div>
            <p className="text-sm text-white text-font md:mb-1 md:text-xl">
              BlogSite (AI Blog Writing)
            </p>
            <p className="text-xs text-gray-500 text-font md:text-base md:text-justify line-clamp-3">
              A technology-focused platform delivering insightful and engaging
              content for tech enthusiasts and professionals
            </p>
            <p className="text-xs text-yellow-300 text-font md:text-base">
              MERN Stack, Tailwind, Google Gemini
            </p>
          </div>
        </a>
        <a
          href="https://project-sahyog.netlify.app/"
          target="blank"
          className="flex flex-row max-w-3xl gap-2 mx-2 mb-5 cursor-pointer md:mx-auto hover:border"
        >
          <img
            src={icon3}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
          />
          <div>
            <p className="text-sm text-white text-font md:mb-1 md:text-xl">
              Project Sahyog
            </p>
            <p className="text-xs text-gray-500 text-font md:text-base md:text-justify line-clamp-3">
              Project Sahyog is an online platform for sharing & discovering
              student projects in Indian universities/colleges to promote
              innovation & collaboration.
            </p>
            <p className="text-xs text-yellow-300 text-font md:text-base">
              MongoDB, Express, React, Node.js, Bootstrap
            </p>
          </div>
        </a>
        <a
          href="https://mg-ecomapp.netlify.app/"
          target="blank"
          className="flex flex-row max-w-3xl gap-2 mx-2 mb-5 cursor-pointer md:mx-auto hover:border"
        >
          <img
            src={icon2}
            alt=""
            className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
          />
          <div>
            <p className="text-sm text-white text-font md:mb-1 md:text-xl">
              Ecom Website
            </p>
            <p className="text-xs text-gray-500 text-font md:text-base md:text-justify line-clamp-3">
              The e-commerce website project aims to create an online platform
              that enables users to browse, search, & purchase products from
              various categories.
            </p>
            <p className="text-xs text-yellow-300 text-font md:text-base">
              MongoDB, Express, React, Node.js
            </p>
          </div>
        </a>
      </div>
      <div className="flex flex-row justify-center gap-5 ">
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
