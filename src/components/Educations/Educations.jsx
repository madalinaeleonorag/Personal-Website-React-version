import { EDUCATIONS } from "../../assets/data";
import Education from "./Education/Education";
import "./Educations.scss";

const Educations = () => {
  return (
    <div className="educations app-padding" id="education">
      <div className="app-title">03. Education 📚</div>
      <div className="app-content">
        {EDUCATIONS.map((education) => {
          return (
            <Education educationData={education} key={education.startYear} />
          );
        })}
      </div>
    </div>
  );
};

export default Educations;
