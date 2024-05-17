import React from "react";
// import useStore from "../hooks/useStore";
import Slab from "./Slab";

const Slabs = () => {
  // const [cubes] = useStore((state) => [state.cubes]);
  // console.log(cubes);
  //   return cubes.map(({ key, pos, texture }) => {
  return <Slab position={[-1, 0, 5]} texture={"stone"} />;
  //   });
};

export default Slabs;
