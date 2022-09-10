import "./Experiences.scss";
import { WORK_EXPERIENCE } from "../../assets/data";
import Experience from "./Experience/Experience";

const Experiences = () => {
  return (
    <div className="experiences app-padding">
      <div className="app-title">02. Work experiences 📁</div>
      <div className="app-content">
        {WORK_EXPERIENCE.map((experience) => {
          return (
            <Experience experienceData={experience} key={experience.company} />
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
