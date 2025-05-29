import React from "react";
import loading from "../assets/loading/loading.mp4";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  const handleVideoEnd = () => {
    navigate("/overworld");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-dirt">
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
