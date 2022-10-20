import { AWARDS } from "../../assets/data";
import Award from "./Award/Award";
import "./Awards.scss";

const Awards = () => {
  return (
    <div className="awards app-padding" id="awards">
      <div className="app-title">06. Awards 🏆</div>
      <div className="app-content">
        {AWARDS.map((award) => {
          return <Award awardData={award} key={award.name} />;
        })}
      </div>
    </div>
  );
};

export default Awards;
