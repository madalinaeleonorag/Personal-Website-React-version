import Skill from "../UI/Skill/Skill";
import { BASE_SKILLS, WORK_EXPERIENCE } from "../../assets/data";
import "./Skills.scss";

const Skills = () => {
  const getOthersSKills = () => {
    let technologies = [];
    let baseTechnologiesKeys = BASE_SKILLS.map(({ name }) => name);

    WORK_EXPERIENCE.forEach((experience) => {
      experience.projects?.forEach((project) =>
        technologies.push(...project.technologies)
      );
    });

    return [...new Set(technologies)].filter(
      (skill) => baseTechnologiesKeys.indexOf(skill) < 0
    );
  };
  return (
    <div className="skills app-padding" id="skills">
      <div className="app-title">01. What I worked with the most 🌟</div>
      <div className="app-content">
        {BASE_SKILLS.map((skill) => {
          return (
            <Skill skillData={skill} key={skill.name} showProgress={true} />
          );
        })}
      </div>
      <div className="app-title">and more...</div>
      <div className="app-content skills-other">
        {getOthersSKills().map((skill) => {
          return <Skill skillData={skill} key={skill} showProgress={false} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
