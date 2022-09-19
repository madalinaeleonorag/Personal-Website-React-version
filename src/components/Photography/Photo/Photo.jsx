import "./Photo.scss";

const Photo = ({ photoData }) => {
  return (
    <a href={photoData.live} target="_blank" className="photo">
      <div
        className="photo-image"
        style={{
          backgroundImage: `url(${photoData.logo})`,
        }}
      ></div>
    </a>
  );
};

export default Photo;
