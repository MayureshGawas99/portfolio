// Custom hook to use the context
import React, { createContext, useContext, useState } from "react";
export const useAppContext = () => useContext(AppContext);

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [craftedItem, setCraftedItem] = useState();
  const [skillsUnlocked, setSkillsUnlocked] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        modalOpen,
        setModalOpen,
        currentSlide,
        setCurrentSlide,
        currentRecipe,
        setCurrentRecipe,
        craftedItem,
        setCraftedItem,
        skillsUnlocked,
        setSkillsUnlocked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
