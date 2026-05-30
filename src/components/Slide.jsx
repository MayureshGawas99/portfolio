import React, { useContext, useEffect, useState } from "react";
import ModelViewer from "./ModelViewer";
import { AppContext } from "../context/AppContext";

const Slide = ({ data, size, hide }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const { text, model, position } = data;
  const { currentSlide, setCurrentSlide } = useContext(AppContext);

  useEffect(() => {
    setDisplayedText(""); // Reset text
    setIndex(0); // Reset index
  }, [text]); // Runs when text changes

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 25); // Adjust speed here
      return () => clearTimeout(timeout);
    }
  }, [index, text]); // Depend on both index and text

  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <ModelViewer model={model} position={position} />
      </div>
      {!hide && (
        <div
          id="tutorial-world-slide-info"
          className="absolute w-screen px-6 text-xs md:text-base bottom-8 text-font "
        >
          <div className="px-5 py-2  bg-[#fffaef] text-justify border-4 border-[#6D2D1B] rounded-xl">
            <div className="flex items-center justify-end gap-2 mb-2 text-gray-500">
              <p>
                page {currentSlide + 1} of {size}
              </p>
            </div>
            <div>{displayedText}</div>
            <div className="flex justify-between mt-2">
              <p
                id="tutorial-world-prev"
                className={`mb-2 text-right ${currentSlide === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-500 cursor-pointer hover:text-black"}`}
                aria-disabled={currentSlide === 0}
                onClick={() => {
                  if (currentSlide > 0) {
                    setCurrentSlide(currentSlide - 1);
                  }
                }}
              >
                {"< Prev"}
              </p>
              <p
                id="tutorial-world-next"
                className={`mb-2 text-right ${currentSlide === size - 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-500 cursor-pointer hover:text-black"}`}
                aria-disabled={currentSlide === size - 1}
                onClick={() => {
                  if (currentSlide < size - 1) {
                    setCurrentSlide(currentSlide + 1);
                  }
                }}
              >
                {"Next >"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slide;
