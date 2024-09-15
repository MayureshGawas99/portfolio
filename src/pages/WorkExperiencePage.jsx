import React, { useState } from "react";
import DODAS from "../assets/DODAS.png";
import DB from "../assets/DB.png";
import { useNavigate } from "react-router-dom";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import icon from "../assets/pan1.png";
import icon2 from "../assets/pan2.png";
import icon3 from "../assets/pan3.png";
import { MdOpenInNew } from "react-icons/md";

const WorkExperiencePage = () => {
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  const [tab, setTab] = useState(0);
  return (
    <div className="bg-dirt h-screen py-6 flex flex-col gap-5">
      <div>
        <p className="  text-center text-xl text-font  text-white">
          Work Experience
        </p>
      </div>
      <div className="mx-6 flex flex-col flex-grow md:grid md:grid-cols-12 gap-5 overflow-auto minecraft-scrollbar">
        <div className=" md:col-span-4 lg:col-span-3 bg-black/50">
          <div
            onClick={() => setTab(0)}
            className={`${
              tab === 0 && "border border-white"
            } text-white text-font p-2 flex flex-row gap-2 `}
          >
            <img src={DODAS} alt="" className="h-16" />
            <div>
              <p>DODAS (Acknoledger)</p>
              <p className="text-gray-500">Internship (6 months) </p>
            </div>
          </div>
          <div
            onClick={() => setTab(1)}
            className={`${
              tab === 1 && "border border-white"
            } text-white text-font p-2 flex flex-row gap-2 `}
          >
            <img src={DB} alt="" className="h-16" />
            <div>
              <p>Duestche Bank</p>
              <p className="text-gray-500">Full Time </p>
            </div>
          </div>
        </div>
        <div className=" md:col-span-8 lg:col-span-9 bg-black/50 p-2">
          {tab === 0 && (
            <div>
              <img src={DODAS} alt="" className="w-[6rem]" />
              <div className="mt-2">
                <p className="text-font flex gap-1 items-center text-yellow-300 text-xl">
                  DODAS (Acknoledger){" "}
                  <MdOpenInNew
                    className="cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1zwkUyeDlkCxGfFJtC5ZlTVn65eMw_rAT/view?usp=sharing",
                        "_blank"
                      )
                    }
                  />
                </p>
                <p className="text-font text-gray-500 mt-2">
                  <span className="text-white">Role: </span>Full Stack Developer
                </p>
                <p className="text-font text-gray-500 mt-2">
                  <span className="text-white">Duration: </span>6 Months (Jan 8
                  2024 - June 28 2024)
                </p>
                <p className="text-font text-white mt-2">Responsibilities :</p>
                <ul className="text-font text-gray-500 mx-6">
                  <li>1. Design and Develop Web Apps</li>{" "}
                  <li>2. Optimize app wrt speed and scalability</li>{" "}
                  <li>3. Participate in Code Reviews</li>
                  <li>4. Communicate the Progress with team</li>
                  <li>5. Approach Problems with brainstorming solutions</li>
                  <li>
                    6. Contribute to development of technical documentation
                  </li>
                </ul>
                <p className="text-font text-white mt-2">Projects:</p>
                <ul className="text-font text-gray-500 mx-2 md:mx-6 mt-2 ">
                  <li>
                    <a
                      href="https://erc404.dodas.xyz/"
                      target="blank"
                      className="md:mx-auto max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
                    >
                      <img
                        src={icon}
                        alt=""
                        className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
                      />
                      <div>
                        <p className="text-font  text-white md:mb-1 md:text-xl text-sm">
                          ERC-404 Indexer
                        </p>
                        <p className="text-font text-gray-500 md:text-base text-xs md:text-justify line-clamp-3">
                          The ERC404 Indexer by DODAS is a multichain platform
                          that enhances token liquidity by merging ERC-20 and
                          ERC-721 standards, offering comprehensive asset
                          exploration, API integration, and real-time
                          notifications.
                        </p>
                        <p className="text-font   text-yellow-300 md:text-base text-xs">
                          MongoDB, Express, React, NodeJS, Tailwind
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cryptoreports.co/"
                      target="blank"
                      className="md:mx-auto max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
                    >
                      <img
                        src={icon2}
                        alt=""
                        className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
                      />
                      <div>
                        <p className="text-font  text-white md:mb-1 md:text-xl text-sm">
                          CryptoReports
                        </p>
                        <p className="text-font text-gray-500 md:text-base text-xs md:text-justify line-clamp-3">
                          Crypto Reports is a platform that acts as an interface
                          for web3 enthusiasts to find the latest and all time
                          research reports in one place.
                        </p>
                        <p className="text-font   text-yellow-300 md:text-base text-xs">
                          MongoDB, Express, React, NodeJS, Tailwind
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://runes.dodas.xyz/"
                      target="blank"
                      className="md:mx-auto max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
                    >
                      <img
                        src={icon3}
                        alt=""
                        className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
                      />
                      <div>
                        <p className="text-font  text-white md:mb-1 md:text-xl text-sm">
                          Ordinals Indexer
                        </p>
                        <p className="text-font text-gray-500 md:text-base text-xs md:text-justify line-clamp-3">
                          Your one-stop destination for exploring the Runes,
                          Bitcoin ordinals and beyond.
                        </p>
                        <p className="text-font   text-yellow-300 md:text-base text-xs">
                          MongoDB, Express, React, NodeJS, Tailwind, ThreeJS
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://donbit.org/"
                      target="blank"
                      className="md:mx-auto max-w-3xl hover:border  mb-5 flex flex-row gap-2 cursor-pointer"
                    >
                      <img
                        src={icon}
                        alt=""
                        className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
                      />
                      <div>
                        <p className="text-font  text-white md:mb-1 md:text-xl text-sm">
                          Donbit Website
                        </p>
                        <p className="text-font text-gray-500 md:text-base text-xs md:text-justify line-clamp-3">
                          DONBIT is a Decentralized Oracle Network designed for
                          Bitcoin and Bitcoin L2. DONBIT has a Hyperfocus on
                          Bitcoin Ecosystem.
                        </p>
                        <p className="text-font   text-yellow-300 md:text-base text-xs">
                          React, Tailwind
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {tab === 1 && (
            <div>
              <img src={DB} alt="" className="w-[6rem]" />
              <div className="mt-2">
                <p className="text-font text-xl text-yellow-300 ">
                  Deustche Bank (DB)
                </p>
                <p className="text-font text-gray-500 mt-2">
                  <span className="text-white">Role: </span>Graduate Analyst
                </p>
                {/* <p className="text-font text-gray-500">Duration: 6 Months</p> */}
                {/* <p className="text-font text-gray-500">Responsibilities :</p> */}
                {/* <ul className="text-font text-gray-500 mx-6">
                  <li>1. Design and Develop Web Apps</li>{" "}
                  <li>2. Optimize app wrt speed and scalability</li>{" "}
                  <li>3. Participate in Code Reviews</li>
                  <li>
                    4. Communicate the Progress with team Approach Problems with
                  </li>
                  <li>
                    5. brainstorming solutions Contribute to development of
                    technical documentation
                  </li>
                </ul> */}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center flex-row gap-2 ">
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

export default WorkExperiencePage;
