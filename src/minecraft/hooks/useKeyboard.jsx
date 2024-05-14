import { useCallback, useEffect, useState } from "react";
import { useGameContext } from "../../context/GameContext";

const useKeyboard = () => {
  const { keyActionMap } = useGameContext();
  function actionByKey(key) {
    return keyActionMap[key];
  }

  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    openInventory: false,
    Digit1: false,
    Digit2: false,
    Digit3: false,
    Digit4: false,
    Digit5: false,
    Digit6: false,
    Digit7: false,
    Digit8: false,
    Digit9: false,
  });

  const handleKeyDown = useCallback((e) => {
    // console.log(e.code);
    if (e.code === "KeyE") {
      const action = actionByKey(e.code);
      if (action) {
        setActions((prev) => {
          console.log(prev.openInventory, "openInventory");
          return {
            ...prev,
            [action]: !prev.openInventory,
          };
        });
      }
    } else {
      const movement = ["KeyW", "KeyA", "KeyS", "KeyD", "Space"];
      if (movement.includes(e.code)) {
        const action = actionByKey(e.code);
        if (action) {
          setActions((prev) => {
            return {
              ...prev,
              [action]: true,
            };
          });
        }
      } else {
        const action = actionByKey(e.code);
        if (action) {
          setActions((prev) => {
            return {
              ...prev,
              [e.code]: true,
            };
          });
        }
      }
    }
  }, []);
  const handleKeyUp = useCallback((e) => {
    if (e.code !== "KeyE") {
      const movement = ["KeyW", "KeyA", "KeyS", "KeyD", "Space"];
      if (movement.includes(e.code)) {
        const action = actionByKey(e.code);
        if (action) {
          setActions((prev) => {
            return {
              ...prev,
              [action]: false,
            };
          });
        }
      } else {
        const action = actionByKey(e.code);
        if (action) {
          setActions((prev) => {
            return {
              ...prev,
              [e.code]: false,
            };
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp, handleKeyDown]);

  return actions;
};

export default useKeyboard;
