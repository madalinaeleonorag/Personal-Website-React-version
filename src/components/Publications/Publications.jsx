import { useEffect, useState } from "react";
import { MEDIUM_URL } from "../../assets/environments";
import Publication from "./Publication/Publication";
import "./Publications.scss";

const Publications = () => {
  const [publicationsData, setPublicationsData] = useState([]);

  useEffect(() => {
    fetch(MEDIUM_URL)
      .then((response) => {
        return response.json();
      })
      .then((publications) => {
        if (publications.items) {
          let articlesToShow = [];

          switch (true) {
            case publications.items.length > 6:
              articlesToShow = [...publications.items.slice(0, 6)];
              break;
            default:
              articlesToShow = [...publications.items];
              break;
          }

          setPublicationsData(articlesToShow);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="publications app-padding">
      <div className="app-title">07. I like to write, sometimes ✏️</div>
      <div className="app-content">
        {publicationsData.map((publication) => {
          return (
            <Publication
              publicationData={publication}
              key={publication.title}
            />
          );
        })}
      </div>
      <a
        href="https://madalinaeleonorag.medium.com/"
        target="_blank"
        className="app-button"
      >
        See more on Medium
      </a>
    </div>
  );
};

export default Publications;
