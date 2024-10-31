import "./dishes.css";
import MiniHums from "../miniHamburgers/miniHamburgers.js";

function Dishes() {
  return (
    <div className="ourDishes">
      <p className="title">
        Наши <span>Блюда</span>
      </p>
      <div className="dishImgs">
        <div className="pizzaImg">
          <img src="https://s3-alpha-sig.figma.com/img/eec3/2571/057ff3665c346c8148ff94f69519f217?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6rGZD99yOYTOA6tAf~2XPHrHAzmoiJjy332KGxRDkqm7OKjY~qo6KhI9A5KlpcmrXQq4j20bZWUtRDG~j8EtN3AMiJEG2~oRd13XC1PEv415XygzEg187f7FIOeTLnRbrgexgyKsLqRhw5zvyH2q29bPdL9poxlcK21qUcXcnRWO8larF5RJTe1OkOYAoxqwrrbPii~RrJWFWA~blG6S1VBD1pCPVvCt0Rl5rQG5aV1eRLu7Pp2rf7N0XE0DfSuX6E~1rZ6hybyPRO1h6Q-PLDomDhRHqRmcw9HzKB12afoBOeQg69AuJSBnczECONUIgi82B2cyv74SL6oAC9mvQ__"></img>
        </div>
        <div className="miniHums">
          <div>
            {" "}
            <MiniHums title="Гамбургер мини" price="220₽"></MiniHums>
          </div>
          <div>
            {" "}
            <MiniHums title="Гамбургер макси" price="300₽"></MiniHums>
          </div>
          <div>
            {" "}
            <MiniHums title="Гамбургер дабл" price="480₽"></MiniHums>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
