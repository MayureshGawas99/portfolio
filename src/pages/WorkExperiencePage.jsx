import React, { useState } from "react";
import DODAS from "../assets/DODAS.png";
import DB from "../assets/DB.png";
import { useNavigate } from "react-router-dom";
import buttonSound from "../assets/sounds/minecraft_click.mp3";

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
      <div className="mx-6 flex flex-col flex-grow md:grid md:grid-cols-12 gap-5 overflow-auto">
        <div className=" md:col-span-5 lg:col-span-3 bg-black/50">
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
        <div className="md:col-span-7 lg:col-span-9 bg-black/50 p-2">
          {tab === 0 && (
            <div>
              <img src={DODAS} alt="" className="w-[6rem]" />
              <div className="mt-2">
                <p className="text-font text-white text-xl">
                  DODAS (Acknoledger)
                </p>
                <p className="text-font text-gray-500">
                  Role: Full Stack Developer
                </p>
                <p className="text-font text-gray-500">
                  Duration: 6 Months (Jan 8 2024 - June 28 2024)
                </p>
                <p className="text-font text-gray-500">Responsibilities :</p>
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
              </div>
            </div>
          )}
          {tab === 1 && (
            <div>
              <img src={DB} alt="" className="w-[6rem]" />
              <div className="mt-2">
                <p className="text-font text-white text-xl">
                  Deustche Bank (DB)
                </p>
                <p className="text-font text-gray-500">
                  Role: Graduate Analyst
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
