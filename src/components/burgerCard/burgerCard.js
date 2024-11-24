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
}) {
  const [localCounter, setlocalCounter] = useState(0);

  let handleIncreament = () => {
    setlocalCounter(localCounter + 1);
    // console.log(count, "count");
  };

  let countDawn = () => {
    if (localCounter == 0) {
      setlocalCounter(0);
    } else {
      setlocalCounter(localCounter - 1);
    }
  };

  let add = () => {
    // console.log(count, "count");
    // setSelected((prev) => [...prev, item]);
    // console.log(selected);
    setCount((prev) => prev + localCounter);
    // setburgerTitle((prev) => [...prev, { burgerName: titleBurger }]);
    // setburgerPrice((prev) => [...prev, { burgerNum: number }]);
    // console.log(burgerTitle);
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
        <img src="https://s3-alpha-sig.figma.com/img/b809/7ea6/cc3a738cc3c595dce4f51cc20347632d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhZr-xTzizjgS9Ng3NeBSL1ouSH0ieXxH0NJLbFP56aPW7VhcQbFaieSHZTbEF1zM8E0uX~aNSMYrTHhxKNcHNDIivWQrFcWaaP3EFPTOlgC8dqN9l5zYnE0T5C2TGtcnCxPh40iyUrmAcXfuK0a8py5zDOtYjDdTjMqJ9-sRZlDOzsLDFkMMSDtFIZGy4XMrcN9yGtVuCNPyTYnmjUH3QtGVLKDg4LHFQHxnsi1e54CWZgEDEzPs1E9La5VcDpuiAhu5hFp1TS04wjA~ukC5U-q2HrKlyna5d-JV0ZQ-VhIcKpoaims2gs5wcjkRZESfqLykpvxQ4e8giAQE-jqqw__"></img>
      </div>
      <div className="numCircle">{price}</div>
      <div className="titleBurger">
        <p>{titleBurger}</p>
      </div>
      <div className="text">
        <p>Text</p>
      </div>
      <div className="order">
        <button>Order</button>
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
