import React, { useEffect } from "react";
import { AppContext, useAppContext } from "../context/AppContext";
import { useDrop } from "react-dnd";

const DropComponent = ({ index, item }) => {
  const { currentRecipe, setCurrentRecipe } = useAppContext(AppContext);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      setCurrentRecipe((prevRecipe) => {
        const newRecipe = [...prevRecipe]; // Clone the array
        newRecipe[index] = item; // Update the specific slot
        return newRecipe;
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addItemToRecipe = (item) => {
    const newRecipe = [...currentRecipe];
    newRecipe[index] = item;
    setCurrentRecipe(newRecipe);
  };
  return (
    <>
      {item ? (
        <div ref={drop}>
          <img src={currentRecipe[index].icon} className="w-10 h-10" alt="" />
        </div>
      ) : (
        <div className="w-10 h-10" ref={drop}></div>
      )}
    </>
  );
};

export default DropComponent;
