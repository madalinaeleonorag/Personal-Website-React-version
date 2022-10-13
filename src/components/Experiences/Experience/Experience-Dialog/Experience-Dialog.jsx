import { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./Experience-Dialog.scss";
import Skill from "../../../UI/Skill/Skill";

const ExperienceDialog = ({ onClose, selectedValue, open }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleClose = () => {
    onClose(selectedValue);
  };

  useEffect(() => {
    import(`../../../../assets/icons/${selectedValue.companyLogo}.png`).then(
      (image) => {
        setImageUrl(image.default);
      }
    );
  }, []);

  return (
    <Dialog onClose={handleClose} open={open} className="experience-dialog">
      <DialogTitle className="experience-dialog-title">
        <img src={imageUrl} alt="" className="experience-dialog-title-logo" />
        <div className="experience-dialog-title-details">
          <div>
            <span>{selectedValue.role}</span>&nbsp;at {selectedValue.company}
          </div>
          <div className="experience-dialog-title-details-date">
            {selectedValue.dateStart} - {selectedValue.dateEnd}
          </div>
          <div className="experience-dialog-title-details-location">
            {selectedValue.location}
          </div>
        </div>
      </DialogTitle>
      <div className="experience-dialog-details">
        <div className="app-title">Overall technologies</div>
        <div className="experience-dialog-details-technologies">
          {selectedValue.technologies.map((skill) => {
            return <Skill skillData={skill} key={skill} showProgress={false} />;
          })}
        </div>
        <div className="app-title">Assignments</div>
        {selectedValue.projects.map((project) => {
          return (
            <div className="assignment">
              <div className="assignment-title">
                💼 {project.name} - {project.country}
              </div>
              <div className="assignment-date">
                🗓️ {project.startDate} - {project.endDate}
              </div>
              <div className="assignment-industry">
                🏦 Industry:{" "}
                {project.industry.map((industry) => (
                  <span>{industry} </span>
                ))}
              </div>
              <div className="assignment-technologies">
                💻 Technologies:{" "}
                {project.technologies.map((technology) => (
                  <Skill
                    skillData={technology}
                    key={technology}
                    showProgress={false}
                  />
                ))}
              </div>
              <div className="assignment-contribution">
                Noticeable features delivered:
              </div>
              {project.contribution.map((contribution) => (
                <div className="assignment-contribution">★ {contribution}</div>
              ))}
            </div>
          );
        })}
      </div>
    </Dialog>
  );
};

export default ExperienceDialog;
