import { useEffect, useState } from "react";
import "./Experience.scss";

const Experience = ({ experienceData }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    import(`../../../assets/icons/${experienceData.companyLogo}.png`).then(
      (image) => {
        setImageUrl(`url(${image.default})`);
      }
    );
  }, []);

  return (
    <div className="experience">
      <div
        className="experience-image"
        style={{
          backgroundImage: imageUrl,
        }}
      ></div>
      <div className="experience-content">
        <div className="experience-content-role">{experienceData.role}</div>
        <div className="experience-content-date">
          <div className="experience-content-date-start">
            {experienceData.dateStart}
          </div>
          -
          <div className="experience-content-date-end">
            {experienceData.dateEnd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
