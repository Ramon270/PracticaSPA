import React, { Component } from "react";
import "./Contador.css";
 
class Contador extends Component {

  constructor(prop){
      super(prop);

      this.state = {
        counter : 0
      }
  }

  onButtonClick = () =>
  {
    this.setState({
      counter: this.state.counter + 1
    })
  };

  render() {
    return (
        <div className="contador">
        <div className="button-container"><button onClick={this.onButtonClick} id="btn-click">Click</button></div>
        <div className="text-container"><p id="number">{this.state.counter}</p></div>
        </div>
    );
  }
}
 
export default Contador;