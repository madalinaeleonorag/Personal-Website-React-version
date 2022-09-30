import SVGImage from "../UI/SVGImage";
import Toggle from "./Toggle/Toggle";
import CV from "../../assets/CV.pdf";
import "./Header.scss";

const Header = () => {
  const LINKS = [
    {
      link: "https://madalinaeleonorag.medium.com/",
      name: "Medium",
    },
    {
      link: "https://github.com/madalinaeleonorag",
      name: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/madalinaeleonorag/",
      name: "LinkedIn",
    },
  ];

  return (
    <div className="header">
      <div className="title">
        Madalina<span>Eleonora</span>
      </div>
      <div className="right-items">
        {LINKS.map((recommendation) => {
          return (
            <a
              href={recommendation.link}
              key={recommendation.name}
              target="_blank"
            >
              <SVGImage image={recommendation.name} />
            </a>
          );
        })}
        <a href={CV} target="_blank" className="app-button">
          Resume
        </a>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
