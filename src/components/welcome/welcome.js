import "./welcome.css";
import MenuBar from "../menu/menu.js";
import WelcomeParagraphs from "../welcomeParagraphs/welcomeParagraphs.js";
import Card from "../card/card.js";

function Welcome({ count }) {
  return (
    <div className="welcomePart">
      <MenuBar count={count}></MenuBar>
      <WelcomeParagraphs></WelcomeParagraphs>
      <div className="featuresCard">
        <Card
          header1="Магическая"
          header2=" Атмосфера"
          title="В нашем заведении царит магическая атмосфера наполненная вкусными ароматами"
        ></Card>
        <Card
          header1="Лучшее качество"
          header2=" Еды"
          title="Качество нашей"
          title2=" Еды - отменное!"
        ></Card>
        <Card
          header1="Недорогая"
          header2=" Еда"
          title="Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!"
        ></Card>
      </div>
    </div>
  );
}

export default Welcome;
