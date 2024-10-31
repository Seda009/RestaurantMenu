import "./aboutHistory.css";

function AboutHistory() {
  return (
    <div className="titleDiv">
      <div>
        <p className="HistoryText">
          Наша <span>История</span>
        </p>
      </div>
      <div className="textPart">
        <p className="mainText">
          Как и у любого другого самобытного места, у нас есть своя, особая
          история. Идея ресторана пришла основателям неожиданно. Во время
          прогулки по лесу создатель нашего ресторана застрял в сотнях
          километров от ближайшего населенного пункта. Вдали от цивилизации и
          связи им пришлось навремя обустровать себе нехитрый быт, добывать и
          готовить себе еду.
        </p>
      </div>
      <div className="nums">
        <div className="allNums">
          <div className="drinks">
            <div>
              {" "}
              <span className="number">93</span>
            </div>
            <div>
              <span className="drinkText">Напитки</span>
            </div>
          </div>
          <div className="drinks">
            <div>
              {" "}
              <span className="number">206</span>
            </div>
            <div>
              <span className="drinkText">Еда</span>
            </div>
          </div>
          <div className="drinks">
            <div>
              {" "}
              <span className="number">71</span>
            </div>
            <div>
              <span className="drinkText">Закуски</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHistory;
