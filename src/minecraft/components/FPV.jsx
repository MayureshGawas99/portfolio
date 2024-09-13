import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import useKeyboard from "../hooks/useKeyboard";

const FPV = () => {
  const controlsRef = useRef();
  const [isLocked, setIsLocked] = useState(false); // State to track lock status
  const { openInventory } = useKeyboard();
  const { camera, gl } = useThree();

  useEffect(() => {
    if (isLocked) {
      if (openInventory) {
        controlsRef?.current?.unlock();
        // setIsLocked(false); // Unlocking, so set lock state to false
      } else {
        controlsRef?.current?.lock();
        // setIsLocked(true); // Locking, so set lock state to true
      }
    }
    // eslint-disable-next-line
  }, [openInventory]);

  // Function to toggle lock state when clicked
  const handleClick = () => {
    controlsRef?.current?.lock();
    setIsLocked(true);
  };

  // Event listener to toggle lock state when clicked
  useEffect(() => {
    const domElement = gl?.domElement;
    domElement?.addEventListener("click", handleClick);

    return () => {
      domElement?.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <PointerLockControls ref={controlsRef} args={[camera, gl?.domElement]} />
  );
};

export default FPV;
