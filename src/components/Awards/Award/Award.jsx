import "./Award.scss";

const Award = ({ awardData }) => {
  return (
    <div className="skill">
      {/* TODO add custom component for svgs/pngs
      <img src={imageUrl} alt="" /> */}
      <div className="award-name">{awardData.name}</div>
      <div className="award-date">{awardData.date}</div>
    </div>
  );
};

export default Award;
