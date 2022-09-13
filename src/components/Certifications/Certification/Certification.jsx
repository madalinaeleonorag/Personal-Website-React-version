import { useEffect, useState } from "react";
import "./Certification.scss";

const Certification = ({ certificationData }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    import(
      `../../../assets/icons/certifications/${certificationData.logo}.png`
    ).then((image) => {
      setImageUrl(image.default);
    });
  }, []);

  return (
    <div className="certification">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default Certification;
