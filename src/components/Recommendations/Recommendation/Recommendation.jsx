import { useState } from "react";
import sliceText from "../../../helpers/slice-text";
import RecommendationDialog from "./Recommendation-Dialog/Recommendation-Dialog";
import "./Recommendation.scss";

const Recommendation = ({ recommendationData }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="recommendation">
      <div
        className="recommendation-content app-card"
        onClick={handleClickOpen}
      >
        <span className="quotes">"&nbsp;</span>
        {sliceText(recommendationData.text, 150)}
        <span className="quotes">&nbsp;"&nbsp;</span>
      </div>
      <div className="recommendation-author">
        {`${recommendationData.author}, ${recommendationData.role} in ${recommendationData.from} (${recommendationData.date})`}
      </div>
      <RecommendationDialog
        selectedValue={recommendationData}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default Recommendation;
