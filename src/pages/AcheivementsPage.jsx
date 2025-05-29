import { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { book_quill, bookshelf, redstone } from "../assets/icons/iconImages";
import { useNavigate } from "react-router-dom";
import DiagramComponent from "../components/DiagramComponent";
import {
  overWorldInitialEdges,
  overWorldInitialNodes,
} from "../components/nodes/overWorldNodes";
import {
  netherInitialEdges,
  netherInitialNodes,
} from "../components/nodes/netherNodes";
import { endInitialEdges, endInitialNodes } from "../components/nodes/endNodes";

const AcheivementsPage = () => {
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 bg-dirt text-font">
      <Tabs className="w-[80%]">
        <TabList className={"w-fit flex flex-row gap-2"}>
          <Tab
            className={` bg-[#c9c7c8] border border-b-0 border-black rounded-t-md ${
              tab === 1 ? "translate-y-[5px]" : "bg-[#8B8B8B]"
            }`}
            onClick={() => {
              playButtonSound();
              setTab(1);
            }}
          >
            <div className="p-2 border-4 border-t-white border-l-white border-b-0 border-r-[#555555] rounded-t-md">
              <img src={bookshelf} className="w-8 h-8" alt="" />
            </div>
          </Tab>
          <Tab
            className={` bg-[#c9c7c8] border border-b-0 border-black rounded-t-md ${
              tab === 2 ? "translate-y-[5px]" : "bg-[#8B8B8B]"
            }`}
            onClick={() => {
              playButtonSound();
              setTab(2);
            }}
          >
            <div className="p-2 border-4 border-t-white border-l-white border-b-0 border-r-[#555555] rounded-t-md">
              <img src={redstone} className="w-8 h-8" alt="" />
            </div>
          </Tab>
          <Tab
            className={` bg-[#c9c7c8] border border-b-0 border-black rounded-t-md ${
              tab === 3 ? "translate-y-[5px]" : "bg-[#8B8B8B]"
            }`}
            onClick={() => {
              playButtonSound();
              setTab(3);
            }}
          >
            <div className="p-2 border-4 border-t-white border-l-white border-b-0 border-r-[#555555] rounded-t-md">
              <img src={book_quill} className="w-8 h-8" alt="" />
            </div>
          </Tab>
        </TabList>
        <div className="border border-black h-[25rem] bg-[#c9c7c8] ">
          <div className=" border-4 h-full border-t-white border-l-white border-b-[#555555] border-r-[#555555]">
            {tab === 1 && (
              <div className={"h-full p-2 flex flex-col gap-2"}>
                <h2 className="text-base md:text-lg lg:text-xl ">
                  Academic Advancements
                </h2>
                <div className="flex-grow bg-stone">
                  <DiagramComponent
                    initialEdges={overWorldInitialEdges}
                    initialNodes={overWorldInitialNodes}
                  />
                </div>
              </div>
            )}
            {tab === 2 && (
              <div className={"h-full p-2 flex flex-col gap-2"}>
                <h2 className="text-base md:text-lg lg:text-xl ">
                  Coding Advancements
                </h2>
                <div className="flex-grow bg-netherrack">
                  <DiagramComponent
                    initialEdges={netherInitialEdges}
                    initialNodes={netherInitialNodes}
                  />
                </div>
              </div>
            )}
            {tab === 3 && (
              <div className={"h-full p-2 flex flex-col gap-2"}>
                <h2 className="text-base md:text-lg lg:text-xl ">
                  Corporate Advancements
                </h2>
                <div className="flex-grow bg-end ">
                  <DiagramComponent
                    initialEdges={endInitialEdges}
                    initialNodes={endInitialNodes}
                  />
                </div>
              </div>
            )}
            {/* <TabPanel className={"h-full p-2 flex flex-col gap-2"}>
              <h2 className="text-base md:text-lg lg:text-xl ">Advancements</h2>
              <div className="flex-grow ">
                <StoneDiagramComponent backgroundImage={"stone"} />
              </div>
            </TabPanel>
            <TabPanel className={"h-full p-2 flex flex-col gap-2"}>
              <h2 className="text-base md:text-lg lg:text-xl ">Advancements</h2>
              <div className="flex-grow ">
                <StoneDiagramComponent backgroundImage={"stone"} />
              </div>
            </TabPanel> */}
          </div>
        </div>
      </Tabs>
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
  );
};

export default AcheivementsPage;
