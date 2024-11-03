// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   resetCount = () => {
//     this.setState({ count: 0 });
//   };
//   render() {
//     return (
//       <div className="counter">
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.incrementCount}>Increment</button>
//         <button onClick={this.resetCount}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Counter;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  let handleIncreament = () => {
    setCount(count + 1);
    console.log(count, "count");
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={handleIncreament}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
