import { RECOMMENDATIONS } from "../../assets/data";
import Recommendation from "./Recommendation/Recommendation";
import "./Recommendations.scss";

const Recommendations = () => {
  return (
    <div className="recommendations app-padding">
      <div className="app-title">09. Recommendations</div>
      <div className="app-content">
        {RECOMMENDATIONS.slice(0, 5).map((recommendation) => {
          return (
            <Recommendation
              recommendationData={recommendation}
              key={recommendation.date + recommendation.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
