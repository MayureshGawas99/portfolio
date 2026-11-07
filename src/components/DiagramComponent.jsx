import { useEffect, useRef, useState } from "react";
import ReactFlow, { Handle, Position } from "react-flow-renderer";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

// Custom node component to display an image
const CustomNode = ({ data }) => {
  return (
    <div id={data.title} className="w-full h-full bg-[#AA7E0F] border-black border-2 rounded-md">
      <a
        data-tooltip-id="acheivement-tooltip"
        data-tooltip-content="2"
        data-title={data.title}
        data-description={data.description}
        data-img={data.img}
      >
        <div
          className=" border-t-[#DBA213] border-l-[#DBA213] border-b-[#423105] border-r-[#423105] border-2 rounded-md"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={data.img} alt={data.title} style={{ height: "32px" }} />{" "}
          {/* Adjust size as needed */}
          {data?.handle === "vertical" ? (
            <>
              <Handle
                style={{ background: "transparent", border: "none" }}
                type="target"
                position={Position.Top}
              />
              <Handle
                style={{ background: "transparent", border: "none" }}
                type="source"
                position={Position.Bottom}
              />
            </>
          ) : (
            <>
              <Handle
                style={{ background: "transparent", border: "none" }}
                type="target"
                position={Position.Left}
              />
              <Handle
                style={{ background: "transparent", border: "none" }}
                type="source"
                position={Position.Right}
              />
            </>
          )}
        </div>
      </a>
    </div>
  );
};

const DiagramComponent = ({ initialEdges, initialNodes }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const diagramRef = useRef(null);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialEdges, initialNodes]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = document.fullscreenElement === diagramRef.current;
      setIsFullscreen(fullscreen);

      if (!fullscreen && diagramRef.current) {
        diagramRef.current.style.background = "";
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenEnabled) {
      toast.error("Fullscreen is not supported by this browser.");
      return;
    }

    try {
      if (document.fullscreenElement === diagramRef.current) {
        await document.exitFullscreen();
      } else {
        const parentBackground = window.getComputedStyle(
          diagramRef.current.parentElement,
        ).background;
        diagramRef.current.style.background = parentBackground;
        await diagramRef.current.requestFullscreen();
      }
    } catch (error) {
      diagramRef.current.style.background = "";
      toast.error("Unable to change fullscreen mode.");
      console.error("Unable to change diagram fullscreen mode:", error);
    }
  };

  return (
    <div
      ref={diagramRef}
      className={`relative h-full w-full ${isFullscreen ? "fixed inset-0 z-[1100] h-screen w-screen bg-[#c9c7c8]" : ""}`}
    >
      <button
        type="button"
        onClick={toggleFullscreen}
        className="absolute right-2 top-2 z-10 border-2 border-b-[#585858] border-r-[#585858] border-t-[#a8a8a8] border-l-[#a8a8a8] bg-[#292929] p-1 text-2xl text-white hover:bg-[#454545]"
        aria-label={isFullscreen ? "Exit fullscreen" : "View diagram fullscreen"}
        title={isFullscreen ? "Exit fullscreen" : "View diagram fullscreen"}
      >
        {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: CustomNode }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Tooltip
        id="acheivement-tooltip"
        className="p-0 m-0"
        noArrow={true}
        render={({ content, activeAnchor }) => (
          <div className="w-full h-full p-0 m-0">
            <div className="bg-[#B98F2C] border-2 border-black border-b-[#493606] w-full  text-xl  minecraft-shadow rounded-t-lg">
              <div className=" flex flex-row gap-2 items-center p-2 border-4 border-b-[#493606] border-r-[#493606] border-l-[#DBA213] border-t-[#DBA213] rounded-t-lg">
                <img
                  src={activeAnchor?.getAttribute("data-img")}
                  className="h-[32px]"
                  alt=""
                />
                <span>
                  {activeAnchor?.getAttribute("data-title") || "not set"}
                </span>
              </div>
            </div>
            <div className="text-[#54FC54] w-full rounded-b-lg bg-[#212121] border-2 border-black ">
              <div className="p-2 border-4 border-b-[#555555] border-r-[#555555] border-l-[#555555] border-t-0 rounded-b-lg">
                {activeAnchor?.getAttribute("data-description") || "not set"}
              </div>
            </div>
          </div>
        )}
      ></Tooltip>
    </div>
  );
};

export default DiagramComponent;
