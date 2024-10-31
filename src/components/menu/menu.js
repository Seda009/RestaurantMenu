import "./menu.css";
import logo from "../images/LOGO (1).png";
import icon from "../images/cart.png";
import phone from "../images/phone.png";

function MenuBar() {
  return (
    <div className="MenuPart">
      <div className="logoPart">
        <img src={logo}></img>
      </div>
      <div className="menuDiv">
        <div className="middlePart">
          <div className="spanMenu">
            <span>ГЛАВНАЯ</span>
          </div>
          <div className="spanMenu">
            <span>МЕНЮ</span>
          </div>
          <div className="spanMenu">
            <span>О НАС</span>
          </div>
          <div className="spanMenu">
            <span>БРОНЬ</span>
          </div>
          <div className="forcartLogo">
            <img src={icon}></img>
          </div>
        </div>

        <div className="borderLine"></div>
        <div className="contact">
          <div className="phone">
            <div>
              <img src={phone}></img>
            </div>
            <div>
              <span className="spanNum">+999-888-76-54</span>
            </div>
          </div>
          <div className="ContactUs">
            <span>
              Свяжитесь с нами для <br></br>бронирования
            </span>
          </div>
        </div>
        <div className="Button">
          <button>ЗАКАЗ СТОЛИКА</button>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
