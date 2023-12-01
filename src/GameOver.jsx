const GameOver = ({ winner, onRematchClick }) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRematchClick}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
