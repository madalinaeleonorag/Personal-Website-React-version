import { useEffect, useState } from "react";
import "./Skill.scss";

const Skill = ({ skillData }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    import(`../../../assets/icons/${skillData.logo}.png`).then((image) => {
      setImageUrl(image.default);
    });
  }, []);

  return (
    <div className="skill">
      <img src={imageUrl} alt="" />
      <div className="skill-progress-bar">
        <span
          className="skill-progress-bar-fill"
          style={{
            width: skillData.level + "%",
            backgroundColor: skillData.color,
          }}
        ></span>
      </div>
    </div>
  );
};

export default Skill;
