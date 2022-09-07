import Skill from "./Skill/Skill";
import "./Skills.scss";

const Skills = () => {
  const SKILLS = [
    { name: "HTML5", level: 70, color: "#E85D25", logo: "HTML5" },
    { name: "CSS3", level: 40, color: "#249CDA", logo: "CSS3" },
    { name: "Sass", level: 40, color: "#C96195", logo: "Sass" },
    { name: "Bootstrap", level: 40, color: "#533B78", logo: "Bootstrap" },
    { name: "Javascript", level: 70, color: "#EFD81D", logo: "Javascript" },
    { name: "Vue.js", level: 70, color: "#3FB27F", logo: "Vuejs" },
    { name: "Vuex", level: 70, color: "#33475B", logo: "Vuex" },
    { name: "Angular", level: 70, color: "#BD002E", logo: "Angular" },
    { name: "Node.js", level: 10, color: "#539e43", logo: "nodejs" },
    { name: "JQuery", level: 20, color: "#0864A7", logo: "JQuery" },
    { name: "Postman", level: 40, color: "#ff6c37", logo: "Postman" },
    { name: "Ionic", level: 40, color: "#367CF7", logo: "Ionic" },
    { name: "React.js", level: 10, color: "#50BBD7", logo: "Reactjs" },
    { name: "Wordpress", level: 20, color: "#207196", logo: "Wordpress" },
    { name: "Git", level: 70, color: "#E84E31", logo: "Git" },
    { name: "Typescript", level: 40, color: "#2D79C7", logo: "Typescript" },
    { name: "Java", level: 10, color: "#E88A32", logo: "Java" },
    { name: "NoSQL", level: 40, color: "#F7C52B", logo: "NoSQL" },
    { name: "Photoshop", level: 40, color: "#001D34", logo: "Photoshop" },
    { name: "Jira", level: 20, color: "#1A80FF", logo: "Jira" },
    { name: "AWS", level: 10, color: "#FF8E04", logo: "AWS" },
    { name: "C#", level: 20, color: "#953DAC", logo: "CSharp" },
  ];

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
