import { useEffect, useState } from "react";
import { GITHUB_URL } from "../../assets/environments";
import Project from "./Project/Project";
import "./Projects.scss";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch(GITHUB_URL)
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
