import BurgerCard from "../burgerCard/burgerCard.js";
import "./burgerMaxi.css";

function BurgerMaxi({ count, setCount }) {
  return (
    <div className="MaxiBurger">
      <p className="ourMenu">Наше меню</p>
      <div className="BurgerPart">
        {" "}
        <BurgerCard
          recommended
          titleBurger="Гамбургер макси"
          text="Максимально толстый слой мяса"
          button="ЗАКАЗАТЬ"
          number="420"
          count={count}
          setCount={setCount}
        ></BurgerCard>
        <BurgerCard
          titleBurger="Гамбургер мини"
          text="Максимально толстый слой мяса"
          button="ЗАКАЗАТЬ"
          number="460"
          count={count}
          setCount={setCount}
        ></BurgerCard>
        <BurgerCard
          titleBurger="Гамбургер дабл"
          text="Максимально толстый слой мяса"
          button="ЗАКАЗАТЬ"
          number="530"
          count={count}
          setCount={setCount}
        ></BurgerCard>
      </div>
    </div>
  );
}

export default BurgerMaxi;
