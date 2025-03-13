import { useEffect, useState } from "react";
import ReactFlow, { Handle, Position } from "react-flow-renderer";

import { Tooltip } from "react-tooltip";

// Custom node component to display an image
const CustomNode = ({ data }) => {
  return (
    <div className="w-full h-full bg-[#AA7E0F] border-black border-2 rounded-md">
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
          <img src={data.img} alt={data.label} style={{ height: "32px" }} />{" "}
          {/* Adjust size as needed */}
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
        </div>
      </a>
    </div>
  );
};

const DiagramComponent = ({ initialEdges, initialNodes }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: CustomNode }}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></ReactFlow>
      <Tooltip
        id="acheivement-tooltip"
        className="p-0 m-0"
        noArrow={true}
        render={({ content, activeAnchor }) => (
          <div className="p-0 m-0 w-full h-full">
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
    </>
  );
};

export default DiagramComponent;
