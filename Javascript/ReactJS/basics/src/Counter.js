import React from "react";
import CounterChild from "./CounterChild";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
        <CounterChild countValue={this.state.count} />
      </div>
    );
  }
}

export default Counter;
