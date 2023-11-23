import GameBoard from "./GameBoard";
import Player from "./Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"PLayer 1"} symbol={"X"} />
          <Player name={"PLayer 2"} symbol={"O"} />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
