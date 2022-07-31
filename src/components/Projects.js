import React, { useState, useEffect } from "react";
import ProjCards from "./ProjCards";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState({ projects: [] });
  const [show, setShow] = useState(true)

  useEffect(() => {
    const fetchProjects = () => {
      axios
        .get("https://ak.iocoder.in/open/public/projects", {})
        .then((res) => {
          setShow(false);
          setProjects(res.data);
          console.log(projects.projects);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchProjects();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container m-auto md:my-10 px-8 md:px-16 py-8 shadow-2xl flex flex-col justify-around">
      <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
        Open-Source Projects
      </font>
      <div className="flex flex-row flex-wrap w-full justify-around mt-10">
        {show && <p>Loading...</p>}
        {projects.projects?.map((item) => (
          <ProjCards
            key={item.id}
            title={item.name}
            description={item.description}
            link={item.project_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
