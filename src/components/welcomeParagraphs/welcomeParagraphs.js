import "./welcomeParagraphs.css";

function WelcomeParagraphs() {
  return (
    <div className="welcomeParagraphs">
      <div className="welcomeText">
        <p>Добро пожаловать в</p>
      </div>
      <div className="restaurantText">
        <p>Наш ресторан</p>
      </div>
      <div className="foodHouse">
        <div className="border"></div>
        <span className="bestrestaurantText">ДОМ ЛУЧШЕЙ ЕДЫ</span>
        <div className="border"></div>
      </div>
      <div className="buttonView">
        <button>VIEW MENU</button>
      </div>
    </div>
  );
}

export default WelcomeParagraphs;
