import React from "react";
import { useDrag } from "react-dnd";

const DragComponent = ({ item }) => {
  const { icon } = item;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return <img src={icon} ref={drag} className="w-10 h-10" alt="" />;
};

export default DragComponent;
