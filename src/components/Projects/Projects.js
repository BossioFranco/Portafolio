import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>

      <div className="ProjectWrapper" id="projects" style={{marginTop:150}}>
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
