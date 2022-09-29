import "./Publication.scss";

const Publication = ({ publicationData }) => {
  console.log(publicationData);
  return (
    <div className="publication">
      <div
        className="publication-image"
        style={{
          backgroundImage: `url(${publicationData.thumbnail})`,
        }}
      ></div>
      <div className="publication-content">
        <div className="publication-content-title">{publicationData.title}</div>
        <a href={publicationData.link} target="_blank">
          See on Medium
        </a>
      </div>
    </div>
  );
};

export default Publication;
