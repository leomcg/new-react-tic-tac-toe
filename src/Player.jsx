import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleEditClick = () => {
    setIsEdit((isEdit) => {
      return !isEdit;
    });
  };

  return (
    <li>
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
