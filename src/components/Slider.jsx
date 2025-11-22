import React, { useState } from "react";
import buttonSound from "../assets/sounds/minecraft_click.mp3";

const Slider = ({ label, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMouseDown = () => {
    playButtonSound();
  };
  const handleMouseUp = () => {
    // Gradually update the value to the default after user stops sliding
    setValue(defaultValue);
  };

  const handleTouchEnd = () => {
    // Gradually update the value to the default after user stops sliding
    setValue(defaultValue);
    playButtonSound();
  };
  return (
    <div className="relative h-[40px] bg-btn ">
      <div className="flex items-center justify-center w-full h-full">
        <p
          htmlFor="default-range"
          className="z-10 text-xs font-medium text-center text-white  md:text-sm"
        >
          {label}: {value}
        </p>
      </div>
      <input
        id="default-range"
        type="range"
        value={value}
        onChange={handleChange}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleTouchEnd}
        className="absolute top-0 w-full h-full cursor-pointer bg-black/50 slider "
      />
    </div>
  );
};

export default Slider;
