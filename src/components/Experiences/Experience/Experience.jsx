import { useEffect, useState } from "react";
import "./Experience.scss";

const Experience = ({ experienceData }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    import(`../../../assets/icons/${experienceData.companyLogo}.png`).then(
      (image) => {
        setImageUrl(image.default);
      }
    );
  }, []);
  return (
    <div className="experience">
      <img src={imageUrl} alt="" />
      <div className="experience-role">{experienceData.role}</div>
      <div className="experience-date">
        <div className="experience-date-start">{experienceData.dateStart}</div>-
        <div className="experience-date-end">{experienceData.dateEnd}</div>
      </div>
    </div>
  );
};

export default Experience;
