import React from "react";

import ProjectCards from "./projectcard";
import BgTitle from "../bgtitle";

const Project = () => {
  return (
    <div className="flex mt-25 font-dmSans flex-col gap-5">
      <BgTitle bgtitle="PROJECTS" maintitle="My Projects" />

      <ProjectCards />
    </div>
  );
};

export default Project;
