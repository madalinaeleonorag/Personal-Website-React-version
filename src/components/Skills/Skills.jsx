import Skill from "./Skill/Skill";
import "./Skills.scss";
import { SKILLS } from "../../assets/data";

const Skills = () => {
  return (
    <div className="skills app-padding">
      <div className="app-title">01. What i know 🌟</div>
      <div className="app-content">
        {SKILLS.map((skill) => {
          return <Skill skillData={skill} key={skill.name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
