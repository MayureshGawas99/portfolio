import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { GameContextProvider } from "./context/GameContext";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchTransition } from "dnd-multi-backend";
import { MultiBackend } from "react-dnd-multi-backend";

const backendOptions = {
  backends: [
    {
      backend: HTML5Backend,
      preview: true,
      transition: TouchTransition,
    },
    {
      backend: TouchBackend,
      options: { enableMouseEvents: true }, // Allow both touch & mouse
    },
  ],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <GameContextProvider>
      <BrowserRouter>
        <DndProvider backend={MultiBackend} options={backendOptions}>
          <App />
        </DndProvider>
      </BrowserRouter>
    </GameContextProvider>
  </AppContextProvider>
);
