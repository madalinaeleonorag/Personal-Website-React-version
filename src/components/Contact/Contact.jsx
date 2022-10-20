import { CONTACT } from "../../assets/data";
import SVGImage from "../UI/SVGImage";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact app-padding" id="contact">
      <div className="app-title">10. Let's be internet BFFs 💌</div>
      <div className="app-content">
        {CONTACT.map((recommendation) => {
          return (
            <a href={recommendation.link} key={recommendation.website}>
              <SVGImage image={recommendation.website} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
