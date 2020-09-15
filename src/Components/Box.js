import React from "react";
export default function Box(props) {

  let showResult = props.result;
  let promt;
  let className;
  if (showResult === "Victory!"){
        if (props.title === "You"){
          promt = "Win"
          className = "winner"
        } 
        else {
          promt = "Lose"
          className="loser"
        }
  } 
  if (showResult === "Defeat!"){
    if (props.title === "You"){
      promt = "Lose"
      className = "loser"
    }
    else{
      promt = "Win"
      className = "winner"
    } }
  if (showResult === "Tie game"){
      promt="Tie game"
    }
  
    
    
  return (
      <div className = {`box-style ${className}`} >
      <h1> {props.title}</h1>
      <img src={props.imgURL} />
      <h3>{promt}</h3>
    
    </div>
  );
}

// import React, { Component } from "react";
// export default class Box extends Component {
//     //can not let any thing here
//   render() {
//     return (
//       <div className={`box-style ${this.props.color} ${this.props.winner ? "winner" : "loser"} `}>
       
//         <h1>{this.props.title}</h1>
//         <img src={this.props.imgURL}/>
//         <h3>{this.props.winner ? "Won" : "Loss"}</h3>
//       </div>
//     );
//   }
// }