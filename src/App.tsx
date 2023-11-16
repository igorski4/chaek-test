import { useState } from "react";
import MainPage from "./components/MainPage";
import GamePage from "./components/GamePage";

const App = () => {
  const [gameState, setGameState] = useState<number>(0);

  return (
    <>
      {!gameState && <MainPage setGameState={setGameState} />}
      {gameState === 1 && <GamePage setGameState={setGameState} />}
      {gameState === 2 && <MainPage setGameState={setGameState} />}
    </>
  );
};

export default App;
