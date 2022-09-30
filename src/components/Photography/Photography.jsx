import { PHOTOS } from "../../assets/data";
import Photo from "./Photo/Photo";
import "./Photography.scss";

const Photography = () => {
  return (
    <div className="photography app-padding">
      <div className="app-title">08. I have a passion 📸</div>
      <div className="app-content">
        {PHOTOS.map((photo) => {
          return <Photo photoData={photo} key={photo.live} />;
        })}
      </div>
      <a
        href="https://500px.com/p/madalinaeleonorag?view=galleries"
        target="_blank"
        className="app-button"
      >
        See more on 500px
      </a>
    </div>
  );
};

export default Photography;
