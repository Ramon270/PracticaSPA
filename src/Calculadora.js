import React, { Component } from "react";
import "./Calculadora.css";
 
class Calculadora extends Component {

    constructor(prop){
        super(prop);
  
        this.state = {
          numero2: "", resultado: "", signo: ""
        }
    }

    clickNumero = (e) =>
    {
        this.setState({
            resultado: this.state.resultado + e.target.name,
        })
    };

    clickSigno = (e) =>
    {
        this.setState({
            numero2: this.state.resultado
        })

        this.setState({
            resultado:"", signo: e.target.name
        })
    };

    clickIgual = () =>
    {
        if(this.state.signo == "+")
        {
            this.setState({
                resultado: parseFloat(this.state.resultado) + parseFloat(this.state.numero2)
            })
        }
        else if(this.state.signo == "-")
        {
            this.setState({
                resultado: parseFloat(this.state.resultado) - parseFloat(this.state.numero2)
            })
        }
        else if(this.state.signo == "x")
        {
            this.setState({
                resultado: parseFloat(this.state.resultado) * parseFloat(this.state.numero2)
            })
        }
        else if(this.state.signo == "/")
        {
            this.setState({
                resultado: parseFloat(this.state.resultado) / parseFloat(this.state.numero2)
            })
        }
    };

    clickClear = () =>
    {
        this.setState({
            resultado: "", numero2: "", signo: ""
        })
    };


  render() {
    return (
    <div className="calculadora">
    <table>
        <tr>
             <td colSpan="4"> <span id="resultado">{this.state.resultado}</span> </td> 
        </tr>
        <tr>
            <td> <button onClick={this.clickNumero} name="7">7</button></td>
            <td> <button onClick={this.clickNumero} name="8">8</button></td>
            <td> <button onClick={this.clickNumero} name="9">9</button></td>
            <td> <button onClick={this.clickSigno} name="/">/</button></td>
        </tr>
        <tr>
            <td> <button onClick={this.clickNumero} name="4">4</button></td>
            <td> <button onClick={this.clickNumero} name="5">5</button></td>
            <td> <button onClick={this.clickNumero} name="6">6</button></td>
            <td> <button onClick={this.clickSigno} name="x">x</button></td>
        </tr>
        <tr>
            <td> <button onClick={this.clickNumero} name="1">1</button></td>
            <td> <button onClick={this.clickNumero} name="2">2</button></td>
            <td> <button onClick={this.clickNumero} name="3">3</button></td>
            <td> <button onClick={this.clickSigno} name="-">-</button></td>
        </tr>
        <tr>
            <td> <button onClick={this.clickIgual} name="=">=</button></td>
            <td> <button onClick={this.clickClear} name="clear">C</button></td>
            <td> <button onClick={this.clickNumero} name="0">0</button></td>
            <td> <button onClick={this.clickSigno} name="+">+</button></td>
        </tr>
    </table>
    </div>
    );
  }
}
 
export default Calculadora;