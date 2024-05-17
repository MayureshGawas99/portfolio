import React from "react";
import { useGameContext } from "../../context/GameContext";
import useStore from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import { Tooltip } from "react-tooltip";

const Inventory = () => {
  const { keyActionMap, active, setActive, allBlocks } = useGameContext();
  const allCubes = Object.entries(allBlocks);
  const actions = useKeyboard();
  const [setTexture] = useStore((state) => [state.setTexture]);
  function findAttributeWithValue(obj, valueToCheck) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === valueToCheck) {
        return key; // Return the name of the attribute if its value matches
      }
    }
    return null; // Return null if no attribute has the value
  }

  const addToInventory = (selectedBlock) => {
    if (selectedBlock) {
      const isInInventory = findAttributeWithValue(
        keyActionMap,
        selectedBlock[0]
      );
      if (isInInventory) {
        setActive(selectedBlock[0]);
        setTexture(selectedBlock[0]);
      } else {
        const currentSlot = findAttributeWithValue(keyActionMap, active);

        setActive(selectedBlock[0]);
        setTexture(selectedBlock[0]);
        keyActionMap[currentSlot] = selectedBlock[0];
      }
    }
  };

  return (
    <>
      {actions.openInventory && (
        <div className="h-screen bg-black/50 absolute top-0 w-screen z-10 flex justify-center items-center">
          <div className=" w-[35rem] h-[20rem] bg-[#c9c7c8] rounded-lg border-2 border-black p-4 ">
            <div className="my-2">
              <p className="text-font text-xl text-gray-900">Blocks</p>
            </div>
            <div className="flex flex-row flex-wrap w-[100%] h-[10rem] overflow-y-auto minecraft-scrollbar">
              {Array.from(
                { length: Math.max(allCubes.length, 27) },
                (_, i) => i
              ).map((ind) => (
                <div
                  className={` border-[3px] border-t-[#313131] border-l-[#313131] bg-[#919191] p-1 `}
                  key={ind}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToInventory(allCubes[ind]);
                  }}
                >
                  {ind < allCubes.length ? (
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={allCubes[ind][0].toUpperCase()}
                      className="text-font"
                      href="#"
                    >
                      <img
                        src={allCubes[ind][1].image}
                        className="w-10 h-10"
                        alt=""
                      />
                    </a>
                  ) : (
                    <div className="w-10 h-10"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-row items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ind) => (
                <div
                  className={`${
                    active === keyActionMap["Digit" + ind.toString()]
                      ? "border-white border-[5px]"
                      : "border-[3px] border-t-[#313131] border-l-[#313131]"
                  }   bg-[#919191] p-1 h-fit `}
                  key={ind}
                >
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={keyActionMap[
                      "Digit" + ind.toString()
                    ].toUpperCase()}
                    className="text-font"
                  >
                    <img
                      src={
                        allBlocks[keyActionMap["Digit" + ind.toString()]]?.image
                      }
                      className="w-10 h-10"
                      alt=""
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <Tooltip id="my-tooltip" noArrow={true} className="custom-tooltip" />
        </div>
      )}
    </>
  );
};

export default Inventory;
