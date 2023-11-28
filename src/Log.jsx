const Log = ({ turns }) => {
  if (turns.length == 0) {
    return "";
  }

  return (
    <ol id="log">
      {turns.map((turn) => {
        const { player, square } = turn;
        return (
          <li key={`${square.row}_${square.column}`}>{`${player} selected ${
            square.row + 1
          } , ${square.column + 1}`}</li>
        );
      })}
    </ol>
  );
};

export default Log;
