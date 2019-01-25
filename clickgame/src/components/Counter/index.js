import React from "react";
import "./style.css";
class Counter extends React.Component {
state = {
    count: 0
}

handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

render () {
  return (
    <div>
        <h3>Score: {this.state.count}</h3>
    </div>
  );
}
}

export default Counter;
