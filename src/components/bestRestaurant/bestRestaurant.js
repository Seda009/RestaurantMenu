import "./bestRestaurant.css";

function BestRestaurant() {
  return (
    <div className="orderDiv">
      <div className="orderPart">
        <div className="popularRest">
          <p>Отпразднуйте в одном из самых лучших ресторанов.</p>
        </div>
        <div className="sale">
          <p>Только в этом месяце бизнес-ланч от 250 ₽</p>
        </div>
      </div>
      <div className="orderButton">
        <button>ЗАКАЗ СТОЛИКА</button>
      </div>
    </div>
  );
}

export default BestRestaurant;
