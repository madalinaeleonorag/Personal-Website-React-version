import { CONTACT } from "../../assets/data";
import SVGImage from "../UI/SVGImage";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner app-padding background-primary-gradient">
      <div className="banner-content">
        <div className="banner-content-subtitle">I am</div>
        <div className="banner-content-title">MADALINA-ELEONORA</div>
        <div className="banner-content-subtitle">
          and I gathered my passions in Web Development
        </div>
        <div className="banner-content-social-links">
          {CONTACT.map((recommendation) => {
            return (
              <a href={recommendation.link} key={recommendation.website}>
                <SVGImage image={recommendation.website} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="banner-image"></div>
    </div>
  );
};

export default Banner;
