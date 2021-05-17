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

  display = () => {
    return "Display";
  };

  componentWillMount() {
    console.log("Will Mount");
  }

  componentDidMount() {
    console.log("Did Mount");
  }

  shouldComponentUpdate() {
    console.log("should update");
    return true;
  }

  componentDidUpdate() {
    console.log("Did Update");
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

        <p>{this.display()}</p>
      </div>
    );
  }
}

export default Counter;
