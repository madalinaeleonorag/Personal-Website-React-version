import { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./Experience-Dialog.scss";
import Skill from "../../../UI/Skill/Skill";

const ExperienceDialog = ({ onClose, selectedValue, open }) => {
  const [imageUrl, setImageUrl] = useState("");
  console.log(selectedValue);

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
      </div>
    </Dialog>
  );
};

export default ExperienceDialog;
