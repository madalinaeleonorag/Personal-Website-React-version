import { useEffect, useState } from "react";
import getSVG from "../../helpers/svg-generator";

const SVGImage = ({ image }) => {
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    switch (image) {
      case 1:
        return setImageName("first-place");
      case 2:
        return setImageName("second-place");
      default:
        return setImageName(image);
    }
  });

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: getSVG(imageName),
      }}
    ></div>
  );
};

export default SVGImage;
