import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";
import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./data";
import GameOver from "./GameOver";

function getCurrentPlayer(turns) {
  let currentPlayer = "X";
  if (turns.length && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, column } = square;
    gameBoard[row][column] = player;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  let isDraw = gameTurns.length === 9 && !winner;

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

  const rematchClickHandler = () => {
    setGameTurns([]);
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
        <GameBoard onSquareClick={handleSquareClick} board={gameBoard} />
        {(winner || isDraw) && (
          <GameOver winner={winner} onRematchClick={rematchClickHandler} />
        )}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
