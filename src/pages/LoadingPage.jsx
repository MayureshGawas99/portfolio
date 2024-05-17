import React, { useContext, useEffect } from "react";
import loading from "../assets/loading/loading.mp4";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LoadingPage = () => {
  const navigate = useNavigate();
  const { setIsPlaying } = useContext(AppContext);
  const handleVideoEnd = () => {
    // Navigate to the desired route ("/" in this case)
    navigate("/overworld");
  };

  useEffect(() => {
    setIsPlaying(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-dirt h-screen flex justify-center items-center">
      <video
        src={loading}
        loop={false}
        autoPlay={true}
        muted={true}
        onEnded={handleVideoEnd}
      ></video>
    </div>
  );
};

export default LoadingPage;
