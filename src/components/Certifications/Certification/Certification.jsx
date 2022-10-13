import { useEffect, useState } from "react";
import ArrowTooltip from "../../UI/ArrowTooltip";
import "./Certification.scss";

const Certification = ({ certificationData }) => {
  const [imageUrl, setImageUrl] = useState("");

  const openCertification = () => {
    window.open(certificationData.url, "_blank").focus();
  };

  useEffect(() => {
    import(
      `../../../assets/icons/certifications/${certificationData.logo}.png`
    ).then((image) => {
      setImageUrl(image.default);
    });
  }, []);

  return (
    <div className="certification">
      <ArrowTooltip text="Click to open">
        <img src={imageUrl} alt="" onClick={() => openCertification()} />
      </ArrowTooltip>
    </div>
  );
};

export default Certification;
