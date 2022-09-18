import { useEffect, useState } from "react";
import Project from "./Project/Project";
import "./Projects.scss";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/madalinaeleonorag/repos?type=public&sort=pushed&per_page=6"
    )
      .then((response) => {
        return response.json();
      })
      .then((projects) => {
        if (projects) {
          setProjectsData(projects);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="projects app-padding">
      <div className="app-title">03. Education 📚</div>
      <div className="app-content">
        {projectsData.map((project) => {
          return <Project projectData={project} key={project.id} />;
        })}
      </div>
      <a href="https://github.com/madalinaeleonorag" target="_blank">
        See more on GitHub
      </a>
    </div>
  );
};

export default Projects;
