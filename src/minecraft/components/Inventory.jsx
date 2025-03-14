import React from "react";
import { useGameContext } from "../../context/GameContext";
import useStore from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import { Tooltip } from "react-tooltip";

const Inventory = () => {
  const slots = 36;
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
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 z-10 flex items-center justify-center w-screen h-screen bg-black/50"
        >
          <div className=" w-[35rem] h-[20rem] flex bg-[#c9c7c8] rounded-lg border-2 border-black  ">
            <div className="p-4 border-4 border-t-white border-l-white border-b-[#555555] border-r-[#555555] rounded-lg flex-grow ">
              <div className="mb-2">
                <p className="text-xl text-gray-900 text-font">Inventory</p>
              </div>
              <div className="flex flex-row flex-wrap w-[100%] h-[10rem] overflow-y-auto minecraft-scrollbar">
                {Array.from(
                  { length: Math.max(allCubes.length, slots) },
                  (_, i) => i
                ).map((ind) => (
                  <div
                    className={` border-[3px] border-t-[#313131] border-l-[#313131] bg-[#919191] p-1 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer`}
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
              <div className="flex flex-row items-center mt-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ind) => (
                  <div
                    className={`${
                      active === keyActionMap["Digit" + ind.toString()]
                        ? "border-[#666666] border-[4px] z-50"
                        : "border-[3px] border-t-[#313131] border-l-[#313131]"
                    }   bg-[#919191] p-1 h-fit `}
                    key={ind}
                    onClick={() => {
                      setActive(keyActionMap["Digit" + ind.toString()]);
                      setTexture(keyActionMap["Digit" + ind.toString()]);
                    }}
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
                          allBlocks[keyActionMap["Digit" + ind.toString()]]
                            ?.image
                        }
                        className="w-10 h-10"
                        alt=""
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Tooltip id="my-tooltip" noArrow={true} className="custom-tooltip" />
        </div>
      )}
    </>
  );
};

export default Inventory;
