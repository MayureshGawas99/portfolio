import React from "react";
import loading from "../assets/loading/nether_load.mp4";
import { useNavigate } from "react-router-dom";

const NetherLoading = () => {
  const navigate = useNavigate();
  const handleVideoEnd = () => {
    navigate("/nether");
  };

  return (
    <div className=" relative  h-screen flex justify-center items-center">
      <video
        src={loading}
        loop={false}
        autoPlay={true}
        muted={true}
        onEnded={handleVideoEnd}
        className="h-screen w-full object-cover"
      ></video>
      <div className="absolute">
        <p className="text-white text-font text-lg">Loading Skills ... </p>
        <p className="text-white text-font mt-2 text-lg">Building Skills ...</p>
      </div>
    </div>
  );
};

export default NetherLoading;
