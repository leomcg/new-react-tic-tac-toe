import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";
import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./data";
import GameOver from "./GameOver";

function deriveCurrentPlayer(turns) {
  let currentPlayer = "X";
  if (turns.length && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

const deriveWinner = (gameBoard, players) => {
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
      winner = players[firstSquareSymbol].toUpperCase();
      console.log(players, firstSquareSymbol, winner);
    }
  }

  return winner;
};

const deriveGameBoard = (gameTurns) => {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, column } = square;
    gameBoard[row][column] = player;
  }
  return gameBoard;
};

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = deriveGameBoard(gameTurns);

  const currentPlayer = deriveCurrentPlayer(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const isDraw = gameTurns.length === 9 && !winner;

  const handleSquareClick = (rowIndex, columnIndex) => {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveCurrentPlayer(prevGameTurns);

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

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isSelected={currentPlayer === "X" ? true : false}
            name={players["X"]}
            symbol={"X"}
            onPlayerNameChange={handlePlayerNameChange}
          />
          <Player
            isSelected={currentPlayer === "O" ? true : false}
            name={players["O"]}
            symbol={"O"}
            onPlayerNameChange={handlePlayerNameChange}
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
