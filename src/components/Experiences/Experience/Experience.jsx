import { useEffect, useState } from "react";
import ExperienceDialog from "./Experience-Dialog/Experience-Dialog";
import "./Experience.scss";

const Experience = ({ experienceData }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    import(`../../../assets/icons/${experienceData.companyLogo}.png`).then(
      (image) => {
        setImageUrl(`url(${image.default})`);
      }
    );
  }, []);

  return (
    <div className="experience app-card" onClick={() => !open && setOpen(true)}>
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
      <ExperienceDialog
        selectedValue={experienceData}
        open={open}
        onClose={() => open && setOpen(false)}
      />
    </div>
  );
};

export default Experience;
