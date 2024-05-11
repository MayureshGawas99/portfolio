import React, { useContext, useEffect, useState } from "react";
import loading from "../assets/loading/loading.mp4";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LoadingPage = ({ redirect }) => {
  const navigate = useNavigate();
  const { setIsPlaying } = useContext(AppContext);
  const handleVideoEnd = () => {
    // Navigate to the desired route ("/" in this case)
    navigate("/play");
  };

  useEffect(() => {
    setIsPlaying(false);
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
