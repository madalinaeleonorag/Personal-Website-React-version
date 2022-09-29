import { useEffect, useState } from "react";
import checkImageURL from "../../../helpers/image-url-validation";
import IMAGE_NOT_FOUND from "../../../assets/images/image-not-found.png";
import "./Project.scss";

const Project = ({ projectData }) => {
  // TODO add photos to projects
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (
      checkImageURL(
        `https://raw.githubusercontent.com/${projectData.full_name}/main/demo.png`
      )
    ) {
      setImageUrl(
        `url('https://raw.githubusercontent.com/${projectData.full_name}/main/demo.png')`
      );
    } else if (
      checkImageURL(
        `https://raw.githubusercontent.com/${projectData.full_name}/master/demo.png`
      )
    ) {
      setImageUrl(
        `url('https://raw.githubusercontent.com/${projectData.full_name}/master/demo.png')`
      );
    } else {
      setImageUrl(`url(${IMAGE_NOT_FOUND})`);
    }

    // TODO
    // fetch(projectData.languages_url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((languages) => {
    //     setLanguagesData(languages);
    //     console.log(languagesData);
    //   });
  }, []);

  return (
    <div className="project">
      <div
        className="project-image"
        style={{
          backgroundImage: imageUrl,
        }}
      ></div>
      <div className="project-content">
        <div className="project-content-name">{projectData.name}</div>
        <a href={projectData.html_url} target="_blank">
          See on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
