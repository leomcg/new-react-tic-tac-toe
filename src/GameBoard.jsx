const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = (props) => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, columnId) => {
                return (
                  <li key={columnId}>
                    <button>{playerSymbol}</button>
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
