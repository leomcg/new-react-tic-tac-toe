import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ playerSymbol, changeActivePlayer }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSquareClick = (rowIndex, columnIndex) => {
    setGameBoard((previousGameBoard) => {
      const updatedGameBoard = [
        ...previousGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][columnIndex] = playerSymbol;
      return updatedGameBoard;
    });
    changeActivePlayer();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, columnIndex) => {
                return (
                  <li key={columnIndex}>
                    <button
                      onClick={() => handleSquareClick(rowIndex, columnIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
