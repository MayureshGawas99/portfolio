// Custom hook to use the context
import React, { createContext, useContext, useState } from "react";
export const useAppContext = () => useContext(AppContext);

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
