import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";

function App() {
  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X");

  const changeActivePlayer = () => {
    setCurrentPlayerSymbol((prevSymbol) => {
      return prevSymbol === "X" ? "O" : "X";
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isSelected={currentPlayerSymbol === "X" ? true : false}
            name={"Player 1"}
            symbol={"X"}
          />
          <Player
            isSelected={currentPlayerSymbol === "O" ? true : false}
            name={"Player 2"}
            symbol={"O"}
          />
        </ol>
        <GameBoard
          playerSymbol={currentPlayerSymbol}
          changeActivePlayer={changeActivePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
