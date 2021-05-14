import React from "react";
class CounterChild extends React.Component {
  render() {
    return (
      <div>
        Count Value
        <p>{this.props.countValue}</p>
      </div>
    );
  }
}

export default CounterChild;
