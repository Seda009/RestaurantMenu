import "./burgerCard.css";
import React from "react";
import { useState } from "react";

function BurgerCard({
  count,
  setCount,
  text,
  number,
  titleBurger,
  recommended,
  button,
  burgerTitle,
  setburgerTitle,
  price,
  setburgerPrice,
  setSelected,
  selected,
  item,
  img,
}) {
  const [localCounter, setlocalCounter] = useState(0);

  console.log(selected, "selectedInBurgerCard");
  let handleIncreament = () => {
    setlocalCounter(localCounter + 1);
  };

  let countDawn = () => {
    if (localCounter == 0) {
      setlocalCounter(0);
    } else {
      setlocalCounter(localCounter - 1);
    }
  };

  let add = () => {
    setCount((prev) => prev + localCounter);
    setSelected((prev) => [...prev, item]);
  };
  return (
    <div className="burgerCard">
      <div className="recommendedDiv">
        {/* {props.recommended  ? (
          <button className="recommended">RECOMMENDED</button>
        ) : null} */}
        {recommended && <button className="recommended">RECOMMENDED</button>}
      </div>

      <div className="burgerImg">
        <img src={img}></img>
      </div>
      <div className="numCircle">{price}</div>
      <div className="titleBurger">
        <p>{titleBurger}</p>
      </div>
      <div className="text">
        <p>Максимально толстый слой мяса</p>
      </div>
      <div className="order">
        <button>ЗАКАЗАТЬ</button>
      </div>
      <div className="orderCount">
        <button className="plusButton" onClick={countDawn}>
          -
        </button>
        <span>{localCounter}</span>
        <button className="plusButton" onClick={handleIncreament}>
          +
        </button>
        <button className="addButton" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}

export default BurgerCard;
