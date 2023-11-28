import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";

function getCurrentPlayer(turns) {
  let currentPlayer = "X";
  if (turns.length && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = getCurrentPlayer(gameTurns);

  const handleSquareClick = (rowIndex, columnIndex) => {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = getCurrentPlayer(prevGameTurns);

      const updatedGameTurns = [
        {
          square: { row: rowIndex, column: columnIndex },
          player: currentPlayer,
        },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isSelected={currentPlayer === "X" ? true : false}
            name={"Player 1"}
            symbol={"X"}
          />
          <Player
            isSelected={currentPlayer === "O" ? true : false}
            name={"Player 2"}
            symbol={"O"}
          />
        </ol>
        <GameBoard onSquareClick={handleSquareClick} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
