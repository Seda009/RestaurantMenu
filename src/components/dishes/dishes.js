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
          <img src="https://s3-alpha-sig.figma.com/img/eec3/2571/057ff3665c346c8148ff94f69519f217?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cG7JhnMyZLtHXplG3BnMLwlEnd3Rjl1AsMiGslR7APuJE8HFvYepjiY1QsI9UcxYKIKjtEKWIpzL4ij00cCoFYI6sTLB2PI4Vdt0JDQLhbccmAUdTbh3UAMiUckQ5pj3hWdcRaxYIfs2C9oQXYmkvU6ydpqtpXHkLHCxl6DgLiY7MoWhb6LyqAxMcm-cF8UQiKsw5ZemlLVoFi3LnVg2fL6F07HVTB2viw~h4sAb1OQsbXKBLwsDXg1A3Me9NnRGvcz8qhYJYYa3euFfsAOg-s0iVgyVPCGe0OLVP6fqUmxNSxqfsfTP0eYaN4Mt~KnUvYz2o1vZyUldi7289ckw3Q__"></img>
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
