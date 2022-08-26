import React from "react";

class CountPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count:0}
  }
  decrement = () => {
    this.setState({count:this.state.count -1})
  }
  increment = () => {
    this.setState({count:this.state.count + 1})
  }

  render() {
    return  (
      <div>
        <h1>Count page classes component {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default CountPage;