import React from "react";
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      now: new Date().toLocaleTimeString(),
    };
  }

  componentWillMount() {
    console.log("will Mount");
  }

  componentDidMount() {
      console.log("didmount")
    setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  }

  shouldComponentUpdate() {
    console.log("should update");
    return true;
  }

  componentDidUpdate() {
    console.log("Did Update");
  }

  render() {
    return (
      <div>
        <h3>{this.state.now}</h3>
      </div>
    );
  }
}

export default Clock;
