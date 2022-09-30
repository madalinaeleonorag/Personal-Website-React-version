import sliceText from "../../../helpers/slice-text";
import "./Recommendation.scss";

const Recommendation = ({ recommendationData }) => {
  return (
    <div className="recommendation">
      <div className="recommendation-content">
        {sliceText(recommendationData.text, 300)}
      </div>
      <div className="recommendation-author">
        {`${recommendationData.author}, ${recommendationData.role} in ${recommendationData.from} (${recommendationData.date})`}
      </div>
    </div>
  );
};

export default Recommendation;
