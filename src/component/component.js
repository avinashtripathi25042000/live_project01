import { render } from "@testing-library/react";
import React, { Component } from "react";
export const Fruit =(props)=>{
    return(
        <div className="furits">
            <h1>list of Fruits</h1>
            <p>Name:{props.fruits.name}</p>
            <p>Color:{props.fruits.color}</p>
        </div>

    )
}

export class Car extends Component{
    constructor(){
        super()
        this.state={
            car:'NEXON'
        }
    }

    changeMessage(){
        this.setState({car:'SAFARI'})
    }

 render()
 {
    return(
        <div className="App">
            <h1>{this.state.car}</h1>
            <button style={buttonStyle} onClick={()=>this.changeMessage()}>Conversion</button>
        </div>
    )
 }

}
const buttonStyle = {
    backgroundColor: "blue",
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
   
    
  };
  
