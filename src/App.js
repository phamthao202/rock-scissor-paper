import React, { useState } from "react";
import "./App.css";
import Box from "./Components/Box";
import Button from "./Components/Button";
import History from "./Components/History";
import "bootstrap/dist/css/bootstrap.min.css";

const choices = {
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  },
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
  },
};

let itemGlobal = "";

function App() {
  let [results, setResult] = useState("");
  let [userChoice, setUserChoice] = useState("rock");
  let [computerChoice, setComputerChoice] = useState("rock");
  let [gamePrompt, setGamePrompt] = useState("");
  const [gameHistory, setGameHistory] = useState([]);
  const getRandomChoice = () => {
    let choiceNames = Object.keys(choices); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
    let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
    let choiceName = choiceNames[randomIndex];
    return choices[choiceName];
  };

  let randomComputerChoice;
  let result;

  const selectItem = (clickedItem) => {
    setUserChoice(clickedItem);
    itemGlobal = clickedItem;

    console.log("You chon cai gi", itemGlobal);

    randomComputerChoice = getRandomChoice().name;

    setComputerChoice(randomComputerChoice);

    console.log("Comp chon cai gi?", randomComputerChoice);
    if (clickedItem === "rock") {
      result = randomComputerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (clickedItem === "paper") {
      result = randomComputerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (clickedItem === "scissors") {
      result = randomComputerChoice === "paper" ? "Victory!" : "Defeat!";
    }

    if (clickedItem === randomComputerChoice) result = "Tie game";
    console.log("ket qua la gi", result);
    // TAI SAO lai Return??
    setResult(result);
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory([...gameHistory]);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 themed-grid-col bentrai">
            <Box
              item={userChoice}
              title="You"
              result={results}
              imgURL={choices[userChoice].url}
            />
            <Button selectItems={selectItem} />
            <Box
              item={computerChoice}
              title="Computer"
              result={results}
              imgURL={choices[computerChoice].url}
            />
          </div>
          <History array={gameHistory} />
        </div>
      </div>
    </div>
  );
}

export default App;
