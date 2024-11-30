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
      img: "https://s3-alpha-sig.figma.com/img/b809/7ea6/cc3a738cc3c595dce4f51cc20347632d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhZr-xTzizjgS9Ng3NeBSL1ouSH0ieXxH0NJLbFP56aPW7VhcQbFaieSHZTbEF1zM8E0uX~aNSMYrTHhxKNcHNDIivWQrFcWaaP3EFPTOlgC8dqN9l5zYnE0T5C2TGtcnCxPh40iyUrmAcXfuK0a8py5zDOtYjDdTjMqJ9-sRZlDOzsLDFkMMSDtFIZGy4XMrcN9yGtVuCNPyTYnmjUH3QtGVLKDg4LHFQHxnsi1e54CWZgEDEzPs1E9La5VcDpuiAhu5hFp1TS04wjA~ukC5U-q2HrKlyna5d-JV0ZQ-VhIcKpoaims2gs5wcjkRZESfqLykpvxQ4e8giAQE-jqqw__",
    },
    {
      title: "Гамбургер мини",
      price: 460,
      recommended: false,
      img: "https://s3-alpha-sig.figma.com/img/b809/7ea6/cc3a738cc3c595dce4f51cc20347632d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhZr-xTzizjgS9Ng3NeBSL1ouSH0ieXxH0NJLbFP56aPW7VhcQbFaieSHZTbEF1zM8E0uX~aNSMYrTHhxKNcHNDIivWQrFcWaaP3EFPTOlgC8dqN9l5zYnE0T5C2TGtcnCxPh40iyUrmAcXfuK0a8py5zDOtYjDdTjMqJ9-sRZlDOzsLDFkMMSDtFIZGy4XMrcN9yGtVuCNPyTYnmjUH3QtGVLKDg4LHFQHxnsi1e54CWZgEDEzPs1E9La5VcDpuiAhu5hFp1TS04wjA~ukC5U-q2HrKlyna5d-JV0ZQ-VhIcKpoaims2gs5wcjkRZESfqLykpvxQ4e8giAQE-jqqw__",
    },
    {
      title: "Гамбургер дабл",
      price: 530,
      recommended: false,
      img: "https://s3-alpha-sig.figma.com/img/b809/7ea6/cc3a738cc3c595dce4f51cc20347632d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhZr-xTzizjgS9Ng3NeBSL1ouSH0ieXxH0NJLbFP56aPW7VhcQbFaieSHZTbEF1zM8E0uX~aNSMYrTHhxKNcHNDIivWQrFcWaaP3EFPTOlgC8dqN9l5zYnE0T5C2TGtcnCxPh40iyUrmAcXfuK0a8py5zDOtYjDdTjMqJ9-sRZlDOzsLDFkMMSDtFIZGy4XMrcN9yGtVuCNPyTYnmjUH3QtGVLKDg4LHFQHxnsi1e54CWZgEDEzPs1E9La5VcDpuiAhu5hFp1TS04wjA~ukC5U-q2HrKlyna5d-JV0ZQ-VhIcKpoaims2gs5wcjkRZESfqLykpvxQ4e8giAQE-jqqw__",
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

  console.log(selected, "selectedinApp");

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
