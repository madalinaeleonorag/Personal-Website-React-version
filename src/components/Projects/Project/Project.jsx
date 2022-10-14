import { useEffect, useState } from "react";
import checkImageURL from "../../../helpers/image-url-validation";
import IMAGE_NOT_FOUND from "../../../assets/images/image-not-found.png";
import "./Project.scss";
import sliceText from "../../../helpers/slice-text";

const Project = ({ projectData }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const main = checkImageURL(
      `https://raw.githubusercontent.com/${projectData.full_name}/main/demo.png`
    );
    const master = checkImageURL(
      `https://raw.githubusercontent.com/${projectData.full_name}/master/demo.png`
    );

    Promise.all([main, master])
      .then((results) => {
        const filteredResult = results.find((item) => item.ok);
        filteredResult
          ? setImageUrl(`url(${filteredResult.url})`)
          : setImageUrl(`url(${IMAGE_NOT_FOUND})`);
        // TODO
        // console.clear();
      })
      .catch((err) => setImageUrl(`url(${IMAGE_NOT_FOUND})`));
  }, []);

  return (
    <div className="project app-card">
      <div
        className="project-image"
        style={{
          backgroundImage: imageUrl,
        }}
      ></div>
      <div className="project-content">
        <div className="project-content-name">{projectData.name}</div>
        <div className="project-content-description">
          {projectData.description
            ? sliceText(projectData.description, 70)
            : ""}
        </div>
        {/* <div className="project-content-languages">{projectData.language}</div> */}
        <a href={projectData.html_url} target="_blank" className="app-button">
          See on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
