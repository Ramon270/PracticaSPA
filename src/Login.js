import React, { Component } from "react";
import "./Login.css";

const people =[{nombre: "pepito", contra:"00012"}]
 
class Login extends Component {
  
  constructor(prop){
    super(prop);

    this.state = {
      userValidationMessage: "", passwordValidationMessage: "", isValid: false
    }
}
  onFormSubmit = (e) =>
  {
    e.preventDefault();

    const form = e.target;
    const inputUsername = form.elements["username"]
    const inputPassword = form.elements["password"]


    if(inputUsername.value.trim() === "")
    {
      this.setState({
        userValidationMessage: "Usuario requerido" 
      })
    }

    if(inputPassword.value.trim() === "")
    {
      this.setState({
        passwordValidationMessage: "Contraseña requerida" 
      })
    }

 
    if(inputUsername.value.trim() == people[0].nombre && inputPassword.value.trim() == people[0].contra)
    {
      this.setState({
        isValid: true 
      })
    }
    

  }
  
  render() {
    return (
    <div className="container">
        <form method="post" id="login-form" onSubmit={this.onFormSubmit}>
            <label>Usuario</label>
            <input type="text" name="username"/>
            {this.state.userValidationMessage !== '' ? (<div className="error">{this.state.userValidationMessage}</div>) : null}
            <label>Contraseña</label>
            <input type="password" name="password"/>
            {this.state.passwordValidationMessage !== '' ? (<div className="error">{this.state.passwordValidationMessage}</div>) : null}
            <button id="btnLog" type="submit">Logear</button>
            {this.state.isValid == true ? (<div className="correct">Logeado</div>) : null } 
        </form>
    </div>
    );
  }
}
 
export default Login;