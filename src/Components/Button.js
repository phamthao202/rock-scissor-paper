import React from "react";
export default function Button(props) {
  return (
    <div className="b-t-n">
      <button className="btn btn-success" onClick={() => props.selectItems("rock")}>
        Rock
      </button>
      <button
        className="btn btn-success"
        onClick={() => props.selectItems("scissors")}
      >
        Scissors
      </button>
      <button className="btn btn-success" onClick={() => props.selectItems("paper")}>
        Paper
      </button>
    </div>
  );
}
