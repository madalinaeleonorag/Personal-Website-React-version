import "./Publication.scss";

const Publication = ({ publicationData }) => {
  return (
    <div className="publication">
      <div
        className="publication-image"
        style={{
          backgroundImage: `url(${publicationData.thumbnail})`,
        }}
      ></div>
      <div className="publication-title">{publicationData.title}</div>
      <a href={publicationData.link} target="_blank">
        See on Medium
      </a>
    </div>
  );
};

export default Publication;
