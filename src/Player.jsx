import { useState } from "react";

const Player = ({ name, symbol, isSelected, onPlayerNameChange }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleEditClick = () => {
    if (isEdit) {
      console.log(onPlayerNameChange);
      onPlayerNameChange(symbol, playerName);
    }
    setIsEdit((isEdit) => {
      return !isEdit;
    });
  };

  return (
    <li className={isSelected ? "active" : ""}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => handleNameChange(e)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
