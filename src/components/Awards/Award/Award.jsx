import SVGImage from "../../UI/SVGImage";
import "./Award.scss";

const Award = ({ awardData }) => {
  return (
    <div className="award">
      <SVGImage image={awardData.place} />
      <div className="award-name">{awardData.name}</div>
      <div className="award-date">{awardData.date}</div>
    </div>
  );
};

export default Award;
