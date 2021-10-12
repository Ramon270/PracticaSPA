import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Contador from "./Contador";
import Calculadora from "./Calculadora";
import Login from "./Login";
import Galeria from "./Galeria";

 
class Main extends Component {
  render() {
    return (

      <HashRouter>
        <div>
          <h1>SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Calculadora">Calculadora</NavLink></li>
            <li><NavLink to="/Contador">Contador</NavLink></li>
            <li><NavLink to="/Galeria">Galería</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Calculadora" component={Calculadora}/>
            <Route path="/Contador" component={Contador}/>
            <Route path="/Galeria" component={Galeria}/>
            <Route path="/Login" component={Login}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;