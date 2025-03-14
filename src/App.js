import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import LoadingPage from "./pages/LoadingPage";
import AudioModal from "./pages/AudioModal";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./minecraft/Home";
import audioPath from "./assets/sounds/Haggstrom.mp3";
import ControlsPage from "./pages/ControlsPage";
import NetherLoading from "./pages/NetherLoading";
import Nether from "./minecraft/Nether";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import AcheivementsPage from "./pages/AcheivementsPage";
import WorldPage from "./pages/WorldPage";
import SkillsPage from "./pages/SkillsPage";
import { ToastContainer } from "react-toastify";

function App() {
  const { isPlaying } = useContext(AppContext);
  // const audio = new Audio(audioPath);
  const [audio] = useState(new Audio(audioPath));

  useEffect(() => {
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    // eslint-disable-next-line
  }, [isPlaying]);

  return (
    <div className="h-screen App">
      <AudioModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/world" element={<WorldPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/overworld" element={<Home />} />
        <Route path="/controls" element={<ControlsPage />} />
        <Route path="/nether-loading" element={<NetherLoading />} />
        <Route path="/nether" element={<Nether />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route path="/advancements" element={<AcheivementsPage />} />
      </Routes>
      <ToastContainer
        toastClassName="bg-[#292929] border-4 border-[#595959] outline outline-black outline-2 rounded-lg shadow-lg"
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        theme="light"
      />
    </div>
  );
}

export default App;
