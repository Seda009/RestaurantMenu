import BurgerCard from "../burgerCard/burgerCard.js";
import "./burgerMaxi.css";

function BurgerMaxi({
  count,
  setCount,
  burgerCardData,
  setBurgerCardData,
  selected,
  setSelected,
  img,
}) {
  return (
    <div className="MaxiBurger">
      <p className="ourMenu">Наше меню</p>
      <div className="BurgerPart">
        {" "}
        {burgerCardData.map((item) => {
          return (
            <BurgerCard
              item={item}
              img={item.img}
              titleBurger={item.title}
              price={item.price}
              selected={selected}
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
