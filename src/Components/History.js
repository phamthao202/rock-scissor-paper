import React from "react";
export default function History(props) {
  return (


<div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <ul>
              {props.array.map((result) => {
                return <li>{result}</li>;
              })}
            </ul>
          </div>
  )}