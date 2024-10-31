import "./ourhistory.css";
import AboutHistory from "../aboutHistory/aboutHistory.js";
import PositionImages from "../positionImages/positionImages.js";

function OurHistory() {
  return (
    <div className="historyPart">
      <div>
        {" "}
        <AboutHistory></AboutHistory>
      </div>
      <div>
        <PositionImages></PositionImages>
      </div>
    </div>
  );
}

export default OurHistory;
