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
          placement: "auto",
        },
        {
          target: "#tutorial-home-storymode",
          content:
            "Open Story Mode to explore the immersive world and see how navigation works.",
          placement: "auto",
        },
        {
          target: "#tutorial-home-about",
          content:
            "Learn more about the developer, their journey, and background.",
          placement: "auto",
        },
        {
          target: "#tutorial-home-projects",
          content:
            "Browse featured projects and discover the technologies used to build them.",
          placement: "auto",
        },
        {
          target: "#tutorial-home-work",
          content: "Explore professional experience and career progression.",
          placement: "auto",
        },
        {
          target: "#tutorial-home-advancements",
          content:
            "View achievements and milestones unlocked during the journey.",
          placement: "auto",
        },
      ],

      "/skills": [
        {
          target: "#tutorial-skill-inventory",
          content: "This inventory contains all available crafting materials.",
          placement: "auto",
        },
        {
          target: "#tutorial-skill-crafting-grid",
          content:
            "Drag materials from the inventory into the crafting grid to discover recipes.",
          placement: "auto",
        },
        {
          target: "#tutorial-skill-output",
          content: "Successfully crafted skills appear in the output slot.",
          placement: "auto",
        },
        {
          target:
            window.innerWidth < 768
              ? "#tutorial-skill-recipe-sm"
              : "#tutorial-skill-recipe",
          content:
            "Craft these items to unlock new skills in the portfolio. unlock all skills to complete the skills section!",
          placement: "auto",
        },
      ],

      "/about": [
        {
          target: "#tutorial-about-main",
          content:
            "Meet Narayan and learn about his full-stack web development background.",
          placement: "auto",
        },
        {
          target: "#tutorial-about-languages",
          content:
            "Discover the programming languages mastered, each with its own proficiency level.",
          placement: "auto",
        },
        {
          target: "#tutorial-about-socials",
          content:
            "Connect on LinkedIn, GitHub, LeetCode, and other developer platforms.",
          placement: "auto",
        },
        {
          target: "#tutorial-about-resume",
          content:
            "Open the resume from the configured environment link to see full experience details.",
          placement: "auto",
        },
      ],

      "/world": [
        {
          target: "#tutorial-world-slide-info",
          content:
            "Read the build description here and navigate between slides with Prev/Next.",
          placement: "auto",
        },
        {
          target: "#tutorial-slide-hide",
          content:
            "Toggle the visibility of this information panel to explore the builds without distractions.",
          placement: "auto",
        },
        {
          target: "#tutorial-world-prev",
          content:
            "Use this button to move back to the previous build in the tour.",
          placement: "auto",
        },
        {
          target: "#tutorial-world-next",
          content:
            "Use this button to move forward to the next build in the tour.",
          placement: "auto",
        },
      ],

      "/projects": [
        {
          target: "#tutorial-project-0",
          content:
            "Browse projects to learn about features, architecture, and implementation details.",
          placement: "auto",
        },
      ],

      "/work-experience": [
        {
          target: "#tutorial-work-tabs",
          content: "Switch between different roles to explore work experience.",
          placement: "auto",
        },
        {
          target: "#tutorial-work-details",
          content:
            "View the selected role's responsibilities, achievements, and related projects here.",
          placement: "auto",
        },
      ],

      "/advancements": [
        {
          target: "#tutorial-advancements-tab",
          content:
            "click on these tabs to view different categories of achievements and milestones unlocked during the journey.",
          placement: "auto",
        },
        {
          target: "#Minecraft",
          content:
            "click on these nodes to view details about each achievement, including how it was unlocked and its significance in the journey.",
          placement: "auto",
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
      options={{ skipBeacon: true }}
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
