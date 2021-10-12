import React, { Component } from "react";
import "./Galeria.css";
 
class Galeria extends Component {
  render() {
    return (
    <div id="container">
        <div className="image-container"><img src="Images/Image1.jpg" className="materialboxed"/></div>
        <div className="image-container"><img src="Images/Image2.jpg" className="materialboxed"/></div>
        <div className="image-container"><img src="Images/Image3.jpg" className="materialboxed"/></div>
        <div className="image-container"><img src="Images/Image4.jpg" className="materialboxed"/></div>
        <div className="image-container"><img src="Images/Image5.jpg" className="materialboxed"/></div>
        <div className="image-container"><img src="Images/Image6.jpg" className="materialboxed"/></div>
        <div className="image-container"><img src="Images/Image7.jpg" className="materialboxed"/></div>
        <div className="image-container"><img src="Images/Image8.jpg" className="materialboxed"/></div>
    </div>
    );
  }
}
 
export default Galeria;