class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

export default Counter;
