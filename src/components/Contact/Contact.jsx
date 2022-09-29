import { CONTACT } from "../../assets/data";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact app-padding">
      <div className="app-title">Let's be internet BFFs</div>
      <div className="app-content">
        {CONTACT.map((recommendation) => {
          return (
            <a href={recommendation.link} key={recommendation.website}>
              {recommendation.website}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
