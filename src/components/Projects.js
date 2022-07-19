import React from "react";
import ProjCards from "./ProjCards";

function Projects() {
  return (
    <div className="container m-auto md:my-10 px-8 md:px-16 py-8 shadow-2xl flex flex-col justify-around">
      <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
        Open-Source Projects
      </font>
      <div className="flex flex-row flex-wrap w-full justify-around mt-10">
        <ProjCards />
        <ProjCards />
        <ProjCards />
        <ProjCards />
        <ProjCards />
        <ProjCards />
      </div>
    </div>
  );
}

export default Projects;
