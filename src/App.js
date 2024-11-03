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

function App() {
  return (
    <div className="App">
      {" "}
      <Welcome></Welcome>
      <OurHistory></OurHistory>
      <BestRestaurant></BestRestaurant>
      <Dishes></Dishes>
      <BurgerMaxi></BurgerMaxi>
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
