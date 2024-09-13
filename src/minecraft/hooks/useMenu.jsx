import { useCallback, useEffect, useState } from "react";

const useMenu = () => {
  const [keyActionMap] = useState({
    Escape: "openMenu",
  });
  function actionByKey(key) {
    return keyActionMap[key];
  }

  const [actions, setActions] = useState({
    openMenu: false,
  });
  const handleKeyDown = useCallback((e) => {
    if (e.code === "Escape") {
      const action = actionByKey(e.code);
      if (action) {
        setActions((prev) => {
          return {
            ...prev,
            [action]: !prev.openMenu,
          };
        });
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [handleKeyDown]);

  return [actions, setActions];
};

export default useMenu;
