import React, { useState } from "react";
import DODAS from "../assets/DODAS.png";
import DB from "../assets/DB.png";
import { useNavigate } from "react-router-dom";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import icon from "../assets/pan1.png";
import icon2 from "../assets/pan2.png";
import icon3 from "../assets/pan3.png";
import { MdOpenInNew } from "react-icons/md";
import ProjectCard from "../minecraft/components/ProjectCard";

const DodasProjects = [
  {
    title: "ERC-404 Indexer",
    description:
      "The ERC404 Indexer by DODAS is a multichain platform that enhances token liquidity by merging ERC-20 and ERC-721 standards, offering comprehensive asset exploration, API integration, and real-time notifications.",
    image: icon,
    techstack: "MongoDB, Express, React, NodeJS, Tailwind",
    url: "https://drive.google.com/file/d/1ToZJsgXx4E-20iCelQ3-WTkRIRU-N-Kf/view?usp=sharing",
  },
  {
    title: "CryptoReports",
    description:
      "Crypto Reports is a platform that acts as an interface for web3 enthusiasts to find the latest and all time research reports in one place.",
    image: icon2,
    techstack: "MongoDB, Express, React, NodeJS, Tailwind",
    url: "https://drive.google.com/file/d/13LP5g2dKJCBVDg_FK2jYu2teut6jgCDP/view?usp=sharing",
  },
  {
    title: "Ordinals Indexer",
    description:
      "Your one-stop destination for exploring the Runes, Bitcoin ordinals and beyond.",
    image: icon3,
    techstack: "MongoDB, Express, React, NodeJS, Tailwind, ThreeJS",
    url: "https://drive.google.com/file/d/1jC18HUraVF4HoRDYuaYGEkIfQbzy6L9r/view?usp=sharing",
  },
  {
    title: "Donbit Website",
    description:
      "DONBIT is a Decentralized Oracle Network designed for Bitcoin and Bitcoin L2. DONBIT has a Hyperfocus on Bitcoin Ecosystem.",
    image: icon,
    techstack: "React, Tailwind",
    url: "https://drive.google.com/file/d/1pd_kl2w_GMOLE8CwhVFS0BQ0IZdQq3gP/view?usp=sharing",
  },
  {
    title: "BTC-fi",
    description:
      "It is a platform where users can tract the information related to bitcoin, L2-projects and daily transactions.",
    image: icon2,
    techstack: "MongoDB, Express, React, NodeJS, Tailwind, ApexCharts",
    url: "https://drive.google.com/file/d/1T35r8wRInZWX8a8x3IJXslARI0neghXo/view?usp=sharing",
  },
  {
    title: "DODAS Website",
    description:
      "It is a landing page for DODAS that highlights its vision, mission, features, architecture and tools.",
    image: icon3,
    techstack: "React, Tailwind",
    url: "https://drive.google.com/file/d/1H7KidtqYz6zGPmnA-JyGDGpTnI88vxsr/view?usp=sharing",
  },
];

const WorkExperiencePage = () => {
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-col h-screen gap-5 py-6 bg-dirt">
      <div>
        <p className="text-xl text-center text-white text-font">
          Work Experience
        </p>
      </div>
      <div className="flex flex-col flex-grow gap-5 mx-6 overflow-auto md:grid md:grid-cols-12 ">
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
              <p className="text-sm text-gray-500">Internship (6 months) </p>
              <p className="text-sm text-yellow-300 ">
                8 Jan 2024 - 28 Jun 2024
              </p>
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
              <p>Deutsche Bank</p>
              <p className="text-gray-500">Full Time </p>
              <p className="text-sm text-yellow-300 ">15 Jul 2024 - Present</p>
            </div>
          </div>
        </div>
        <div className="p-2 md:col-span-8 lg:col-span-9 bg-black/50">
          {tab === 0 && (
            <div>
              <img src={DODAS} alt="" className="w-[6rem]" />
              <div className="mt-2">
                <p className="flex items-center gap-1 text-xl text-yellow-300 text-font">
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
                <p className="mt-2 text-gray-500 text-font">
                  <span className="text-white">Role: </span>Full Stack Developer
                </p>
                <p className="mt-2 text-gray-500 text-font">
                  <span className="text-white">Duration: </span>6 Months (Jan 8
                  2024 - June 28 2024)
                </p>
                <p className="mt-2 text-white text-font">Responsibilities :</p>
                <ul className="mx-6 text-gray-500 text-font">
                  <li>1. Design and Develop Web Apps</li>{" "}
                  <li>2. Optimize app wrt speed and scalability</li>{" "}
                  <li>3. Participate in Code Reviews</li>
                  <li>4. Communicate the Progress with team</li>
                  <li>5. Approach Problems with brainstorming solutions</li>
                  <li>
                    6. Contribute to development of technical documentation
                  </li>
                </ul>
                <p className="mt-2 text-white text-font">Projects:</p>
                <ul className="mt-2 text-gray-500 text-font">
                  {DodasProjects.map((project, index) => (
                    <li>
                      <ProjectCard project={project} key={index} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {tab === 1 && (
            <div>
              <img src={DB} alt="" className="w-[6rem]" />
              <div className="mt-2">
                <p className="text-xl text-yellow-300 text-font ">
                  Deutsche Bank (DB)
                </p>
                <p className="mt-2 text-gray-500 text-font">
                  <span className="text-white">Role: </span>Graduate Analyst
                </p>
                <p className="mt-2 text-white text-font">Responsibilities :</p>
                <ul className="mx-6 text-gray-500 text-font">
                  <li>
                    1. Set up and configure TeamCity agents for CI/CD pipelines.
                  </li>
                  <li>
                    2. Migrate existing build and deployment jobs to the newly
                    configured agents.
                  </li>
                  <li>
                    3. Redesign and optimize the current UI of the ltb-dd
                    project.
                  </li>
                  <li>
                    4. Implement backend optimizations and integrate
                    authorization mechanisms.
                  </li>
                  <li>
                    5. Set up and manage SSL certificates on remote machines.
                  </li>
                  <li>
                    6. Write scripts to automate manual and repetitive tasks.
                  </li>
                  <li>
                    7. Redesign the entire user interface of the project to
                    improve usability and performance.
                  </li>
                  <li>
                    7. Develop a service manager to handle and monitor all
                    backend services effectively.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 ">
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
