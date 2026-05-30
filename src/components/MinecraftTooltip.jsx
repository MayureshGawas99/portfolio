import React from "react";

const MinecraftTooltip = ({
  index,
  size,
  step,
  backProps,
  primaryProps,
  skipProps,
  tooltipProps,
}) => {
  return (
    <div
      {...tooltipProps}
      className="w-[90vw] max-w-[400px] overflow-hidden bg-[#1E1E1E] border-4 border-[#000] shadow-[8px_8px_0px_rgba(0,0,0,0.7)]"
    >
      {/* Header */}
      <div className="bg-[#2D2D2D] border-b-2 border-black px-3 py-2 md:px-4 md:py-3 flex justify-between items-center">
        <span
          className="text-base text-white md:text-lg text-font"
          style={{ textShadow: "2px 2px #000" }}
        >
          Tutorial Book
        </span>

        <span
          className="text-xs text-[#AAAAAA] md:text-sm text-font"
          style={{ textShadow: "1px 1px #000" }}
        >
          {index + 1}/{size}
        </span>
      </div>

      {/* Content */}
      <div className="px-3 py-3 md:px-5 md:py-4">
        <p
          className="text-sm leading-relaxed text-white md:text-base text-font"
          style={{ textShadow: "2px 2px #000" }}
        >
          {step.content}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-[#3A3A3A] p-3 md:p-4 flex flex-row gap-3  justify-between items-center">
        <button
          {...skipProps}
          className="px-3 py-2 text-sm text-white md:text-base minecraft-btn"
        >
          Skip
        </button>

        <div className="flex justify-end gap-2 md:gap-3">
          {index > 0 && (
            <button
              {...backProps}
              className="px-3 py-2 text-sm text-white md:text-base minecraft-btn"
            >
              Back
            </button>
          )}

          <button
            {...primaryProps}
            className="px-3 py-2 text-sm text-white md:text-base minecraft-btn"
          >
            {index === size - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinecraftTooltip;
