import { CERTIFICATIONS } from "../../assets/data";
import Certification from "./Certification/Certification";
import "./Certifications.scss";

const Certifications = () => {
  return (
    <div className="certification app-padding">
      <div className="app-title">04. What certifications I achieved 📃</div>
      <div className="app-content">
        {CERTIFICATIONS.map((certification) => {
          return (
            <Certification
              certificationData={certification}
              key={certification.name}
            />
          );
        })}
      </div>
    </div>
  );
};

Certification;

export default Certifications;
