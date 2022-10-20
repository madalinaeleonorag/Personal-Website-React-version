import { useState } from "react";
import { RECOMMENDATIONS } from "../../assets/data";
import Recommendation from "./Recommendation/Recommendation";
import "./Recommendations.scss";

const Recommendations = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="recommendations app-padding" id="recommendations">
      <div className="app-title">09. Recommendations 💬</div>
      <div className="app-content">
        {RECOMMENDATIONS.slice(0, 6).map((recommendation) => {
          return (
            <Recommendation
              recommendationData={recommendation}
              key={recommendation.date + recommendation.author}
            />
          );
        })}
      </div>
      {more ? (
        <div className="app-content more">
          {RECOMMENDATIONS.slice(7).map((recommendation) => {
            return (
              <Recommendation
                recommendationData={recommendation}
                key={recommendation.date + recommendation.author}
              />
            );
          })}
        </div>
      ) : null}
      <a
        onClick={() => {
          setMore(!more);
        }}
        className="app-button"
      >
        See {more ? "less" : "more"}
      </a>
    </div>
  );
};

export default Recommendations;
