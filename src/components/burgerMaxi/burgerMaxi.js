import BurgerCard from "../burgerCard/burgerCard.js";
import "./burgerMaxi.css";

function BurgerMaxi({
  count,
  setCount,
  burgerCardData,
  setBurgerCardData,
  selected,
  setSelected,
}) {
  return (
    <div className="MaxiBurger">
      <p className="ourMenu">Наше меню</p>
      <div className="BurgerPart">
        {" "}
        {burgerCardData.map((item) => {
          // console.log(item);

          return (
            <BurgerCard
              selected={item}
              titleBurger={item.title}
              price={item.price}
              // console.log(item);
              count={count}
              setCount={setCount}
              setSelected={setSelected}
            ></BurgerCard>
          );
        })}
        {/* <BurgerCard

        //   titleBurger="Гамбургер дабл"
        //   text="Максимально толстый слой мяса"
        //   button="ЗАКАЗАТЬ"
        //   number="530"
        //   count={count}
        //   setCount={setCount}
        //   burgerCardData={burgerCardData}
        // setBurgerCardData={setBurgerCardData}
        ></BurgerCard> */}
      </div>
    </div>
  );
}

export default BurgerMaxi;
