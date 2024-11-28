import Button from "../Elements/Button";
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor...");
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log("componenDidMount...");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex justify-center items-center mb-5">
        <Button onClick={() => this.setState({ count: this.state.count - 1 })}>-</Button>
        <h1 className="m-5">{this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>+</Button>
        {console.log("Render...")}
      </div>
    );
  }
}

export default Counter;
