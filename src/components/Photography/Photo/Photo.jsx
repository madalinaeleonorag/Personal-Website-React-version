import ArrowTooltip from "../../UI/ArrowTooltip";
import "./Photo.scss";

const Photo = ({ photoData }) => {
  return (
    <a href={photoData.live} target="_blank" className="photo">
      <ArrowTooltip text="Click to open">
        <div
          className="photo-image"
          style={{
            backgroundImage: `url(${photoData.logo})`,
          }}
        ></div>
      </ArrowTooltip>
    </a>
  );
};

export default Photo;
