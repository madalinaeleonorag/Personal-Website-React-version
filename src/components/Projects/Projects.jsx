import { useEffect, useState } from "react";
import { GITHUB_URL } from "../../assets/environments";
import Project from "./Project/Project";
import { PROJECTS_FALLBACK } from "../../assets/projects-fallback";
import "./Projects.scss";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filter, setFilter] = useState("latest");
  const FRONTEND_LANGUAGES = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vue",
    "Angular",
    "React",
  ];
  const BACKEND_LANGUAGES = ["C#", "JAVA", "C++", "PHP"];

  const filterData = () => {
    return projectsData && projectsData.length > 0
      ? projectsData.filter((project, index) => {
          switch (filter) {
            case "frontend":
              return FRONTEND_LANGUAGES.includes(project.language);
            case "backend":
              return BACKEND_LANGUAGES.includes(project.language);
            case "others":
              return (
                !BACKEND_LANGUAGES.includes(project.language) &&
                !FRONTEND_LANGUAGES.includes(project.language)
              );
            case "latest":
              return index < 6;
            default:
              return true;
          }
        })
      : [];
  };

  const changeFilter = (selection) => {
    setFilter(selection);
  };

  useEffect(() => {
    fetch(GITHUB_URL)
      .then((response) => {
        return response.json();
      })
      .then((projects) => {
        if (projects) {
          setProjectsData(projects);
        } else {
          setProjectsData(PROJECTS_FALLBACK);
        }
      })
      .catch((error) => {
        setProjectsData(PROJECTS_FALLBACK);
      });
  }, []);

  return (
    <div className="projects app-padding">
      <div className="app-title">03. Latest programming projects 💻</div>
      <div className="filters">
        <input
          type="radio"
          value="latest"
          name="filter"
          aria-label="latest"
          onChange={(e) => changeFilter(e.target.value)}
        />
        Latest
        <input
          type="radio"
          value=""
          name="filter"
          aria-label="all"
          onChange={(e) => changeFilter(e.target.value)}
        />
        All
        <input
          type="radio"
          value="frontend"
          name="filter"
          aria-label="frontend"
          onChange={(e) => changeFilter(e.target.value)}
        />
        Frontend
        <input
          type="radio"
          value="backend"
          name="filter"
          aria-label="backend"
          onChange={(e) => changeFilter(e.target.value)}
        />
        Backend
        <input
          type="radio"
          value="others"
          name="filter"
          aria-label="others"
          onChange={(e) => changeFilter(e.target.value)}
        />
        Others
      </div>
      <div className="app-content">
        {filterData().map((project) => {
          return <Project projectData={project} key={project.id} />;
        })}
      </div>
      <a
        href="https://github.com/madalinaeleonorag"
        target="_blank"
        className="app-button"
      >
        See more on GitHub
      </a>
    </div>
  );
};

export default Projects;
