import "./card.css";
import dish from "../images/dish.png";

function Card(props) {
  return (
    <div className="cardDiv">
      <img src={dish}></img>
      <div className="forHeader">
        <span className="headerText">
          {props.header1}
          <span className="change"> {props.header2}</span>
        </span>
      </div>
      <div className="text">
        <p>
          {props.title}
          <br></br>
          {props.title2}
        </p>
      </div>
    </div>
  );
}

export default Card;
