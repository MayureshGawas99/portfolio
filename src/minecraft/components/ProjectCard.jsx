import React from "react";

const ProjectCard = ({ project, key }) => {
  const { title, description, image, techstack, url } = project;
  return (
    <a
      key={key}
      href={url}
      target="blank"
      className="flex flex-row max-w-3xl gap-2 mx-2 mt-5 mb-5 cursor-pointer lg:mt-0 md:mx-auto hover:border"
    >
      <img
        src={image}
        alt=""
        className="lg:w-[10rem] lg:h-[10rem] md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"
      />
      <div>
        <p className="text-sm text-white text-font md:mb-1 md:text-xl">
          {title}
        </p>
        <p className="text-xs text-gray-500 text-font md:text-base md:text-justify line-clamp-3">
          {description}
        </p>
        <p className="text-xs text-yellow-300 text-font md:text-base line-clamp-1">
          {techstack}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
