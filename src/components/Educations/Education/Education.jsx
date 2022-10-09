import { useEffect, useState } from "react";
import "./Education.scss";

const Education = ({ educationData }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    import(`../../../assets/icons/${educationData.logo}.png`).then((image) => {
      setImageUrl(image.default);
    });
  }, []);

  return (
    <div className="education app-card">
      <img src={imageUrl} alt="" />
      <div className="education-school">{educationData.school}</div>
      <div className="education-degree">
        {educationData.degree} ({educationData.grade})
      </div>
      <div className="education-field">{educationData.fieldOfStudy}</div>
      <div className="education-date">
        <div className="education-date-start">{educationData.startYear}</div>-
        <div className="education-date-end">{educationData.endYear}</div>
      </div>
    </div>
  );
};

export default Education;
