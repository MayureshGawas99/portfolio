import React, { useRef } from "react";
import { AppContext, useAppContext } from "../context/AppContext";
import { useDrop, useDrag } from "react-dnd";

const DropComponent = ({ index, item }) => {
  const { currentRecipe, setCurrentRecipe } = useAppContext(AppContext);
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "image",
      item: {
        item,
        source: "grid",
        index,
      },
      canDrag: !!item,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [item, index],
  );

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "image",
      drop: (dragged) => {
        setCurrentRecipe((prevRecipe) => {
          const newRecipe = [...prevRecipe];
          if (dragged.source === "grid" && dragged.index !== index) {
            const draggedItem = newRecipe[dragged.index];
            newRecipe[dragged.index] = newRecipe[index];
            newRecipe[index] = draggedItem;
          } else {
            newRecipe[index] = dragged.item || dragged;
          }
          return newRecipe;
        });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [index],
  );

  drag(drop(ref));

  return (
    <>
      {item ? (
        <div ref={ref}>
          <img
            src={currentRecipe[index].icon}
            className={`w-10 h-10 ${isDragging ? "opacity-50" : ""}`}
            alt=""
          />
        </div>
      ) : (
        <div
          className={`w-10 h-10 ${isOver ? "border border-yellow-300" : ""}`}
          ref={ref}
        ></div>
      )}
    </>
  );
};

export default DropComponent;
