import "./Recommendation.scss";

const Recommendation = ({ recommendationData }) => {
  return (
    <div className="recommendation">
      <div
        className="recommendation-content"
        dangerouslySetInnerHTML={{ __html: recommendationData.text }}
      ></div>
      <div className="recommendation-author">
        {`${recommendationData.author}, ${recommendationData.role} in ${recommendationData.from} (${recommendationData.date})`}
      </div>
    </div>
  );
};

export default Recommendation;
