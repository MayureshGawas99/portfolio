import React, { useMemo } from "react";
import { Joyride, STATUS } from "react-joyride";
import { useLocation } from "react-router-dom";
import MinecraftTooltip from "./MinecraftTooltip";

const TutorialJoyride = ({ run, onClose }) => {
  const location = useLocation();

  const steps = useMemo(() => {
    const pageSteps = {
      "/": [
        {
          target: "#tutorial-home-skills",
          content:
            "Welcome to the Minecraft Portfolio! Start by exploring the Skills section where crafting recipes unlock abilities.",
          placement: "bottom",
          disableBeacon: true,
        },
        {
          target: "#tutorial-home-storymode",
          content:
            "Open Story Mode to explore the immersive world and see how navigation works.",
          placement: "bottom",
          disableBeacon: true,
        },
        {
          target: "#tutorial-home-about",
          content:
            "Learn more about the developer, their journey, and background.",
          placement: "bottom",
          disableBeacon: true,
        },
        {
          target: "#tutorial-home-projects",
          content:
            "Browse featured projects and discover the technologies used to build them.",
          placement: "bottom",
          disableBeacon: true,
        },
        {
          target: "#tutorial-home-work",
          content: "Explore professional experience and career progression.",
          placement: "bottom",
          disableBeacon: true,
        },
        {
          target: "#tutorial-home-advancements",
          content:
            "View achievements and milestones unlocked during the journey.",
          placement: "bottom",
          disableBeacon: true,
        },
      ],

      "/skills": [
        {
          target: "#tutorial-skill-inventory",
          content: "This inventory contains all available crafting materials.",
          placement: "bottom",
          disableBeacon: true,
        },
        {
          target: "#tutorial-skill-crafting-grid",
          content:
            "Drag materials from the inventory into the crafting grid to discover recipes.",
          placement: "top",
          disableBeacon: true,
        },
        {
          target: "#tutorial-skill-output",
          content: "Successfully crafted skills appear in the output slot.",
          placement: "left",
          disableBeacon: true,
        },
        {
          target:
            window.innerWidth < 768
              ? "#tutorial-skill-recipe-sm"
              : "#tutorial-skill-recipe",
          content:
            "Craft these items to unlock new skills in the portfolio. unlock all skills to complete the skills section!",
          placement: "top",
          disableBeacon: true,
        },
      ],

      "/projects": [
        {
          target: "#tutorial-project-0",
          content:
            "Browse projects to learn about features, architecture, and implementation details.",
          placement: "auto",
          disableBeacon: true,
        },
      ],

      "/work-experience": [
        {
          target: "#tutorial-work-timeline",
          content:
            "Follow the timeline to explore professional experience and key milestones.",
          placement: "top",
          disableBeacon: true,
        },
      ],

      "/advancements": [
        {
          target: "#tutorial-advancements-list",
          content:
            "These are the achievements unlocked throughout the development journey.",
          placement: "top",
          disableBeacon: true,
        },
      ],
    };

    return pageSteps[location.pathname] || [];
  }, [location.pathname]);

  if (!steps.length) return null;

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      disableBeacon={true}
      showProgress={false}
      showSkipButton={false}
      scrollToFirstStep
      spotlightClicks
      disableScrolling={false}
      tooltipComponent={MinecraftTooltip}
      styles={{
        options: {
          zIndex: 10000,
          overlayColor: "rgba(0,0,0,0.85)",
          arrowColor: "#1E1E1E",
        },

        spotlight: {
          borderRadius: 0,
          border: "3px solid #FFFFFF",
        },
      }}
      locale={{
        back: "Back",
        close: "Close",
        last: "Finish",
        next: "Next",
        skip: "Skip",
      }}
      callback={(data) => {
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(data.status)) {
          onClose?.();
        }
      }}
    />
  );
};

export default TutorialJoyride;
