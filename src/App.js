import "./App.css";
import Welcome from "./components/welcome/welcome.js";
import OurHistory from "./components/ourhistory/ourhistory.js";
import BestRestaurant from "./components/bestRestaurant/bestRestaurant.js";
import Dishes from "./components/dishes/dishes.js";
import BurgerMaxi from "./components/burgerMaxi/burgerMaxi.js";
import GreyPart from "./components/greyPart/greyPart.js";
import GalleryFood from "./components/foodGallery/foodGallery.js";
import Cookers from "./components/cookers/cookers.js";
import Counter from "./components/class.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const [burgerCardData, setBurgerCardData] = useState([
    {
      title: "Гамбургер макси",
      price: 420,
      recommended: true,
    },
    {
      title: "Гамбургер мини",
      price: 460,
      recommended: false,
    },
    {
      title: "Гамбургер дабл",
      price: 530,
      recommended: false,
    },
  ]);
  // [
  //   {
  //     burgerTitle: "Burgermaxi",
  //   },
  //   {
  //     burgerTitle: "Burgermini",
  //   },
  // ];

  return (
    <div className="App">
      {" "}
      <Welcome
        count={count}
        burgerCardData={burgerCardData}
        setBurgerCardData={setBurgerCardData}
        setSelected={setSelected}
        selected={selected}
      ></Welcome>
      <OurHistory></OurHistory>
      <BestRestaurant></BestRestaurant>
      <Dishes></Dishes>
      <BurgerMaxi
        count={count}
        setCount={setCount}
        burgerCardData={burgerCardData}
        setBurgerCardData={setBurgerCardData}
        setSelected={setSelected}
        selected={selected}
      ></BurgerMaxi>
      <GreyPart></GreyPart>
      <GalleryFood></GalleryFood>
      <Cookers></Cookers>
      <Counter></Counter>
    </div>
  );
}

export default App;

// import { Component } from 'react';
// import Counter from './components/Greeting';

// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <h1>Simple Counter App</h1>
//         <Counter />
//       </div>
//     );
//   }
// }

// export default App;
