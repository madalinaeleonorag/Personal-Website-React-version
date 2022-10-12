import Skill from "../UI/Skill/Skill";
import { SKILLS } from "../../assets/data";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills app-padding">
      <div className="app-title">01. What i know 🌟</div>
      <div className="app-content">
        {SKILLS.map((skill) => {
          return (
            <Skill skillData={skill} key={skill.name} showProgress={true} />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
