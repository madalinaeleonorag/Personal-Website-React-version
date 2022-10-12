import { useEffect, useState } from "react";
import "./Skill.scss";

const Skill = ({ skillData, showProgress }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (showProgress) {
      import(`../../../assets/icons/${skillData.logo}.png`).then((image) => {
        setImageUrl(image.default);
      });
    } else {
      import(`../../../assets/icons/${skillData}.png`).then((image) => {
        setImageUrl(image.default);
      });
    }
  }, []);

  return (
    <div className="skill">
      <img src={imageUrl} alt="" />
      {showProgress && (
        <div className="skill-progress-bar">
          <span
            className="skill-progress-bar-fill"
            style={{
              width: skillData.level + "%",
              backgroundColor: skillData.color,
            }}
          ></span>
        </div>
      )}
    </div>
  );
};

export default Skill;
