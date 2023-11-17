import { useState } from "react";
import MainPage from "./components/MainPage";
import GamePage from "./components/GamePage";
import FinalPage from "./components/FinalPage";

const App = () => {
  const [gameState, setGameState] = useState<number>(0);
  const [inputCitiesList, setInputCitiesList] = useState<string[]>([]);

  return (
    <>
      {!gameState && <MainPage setGameState={setGameState} />}
      {gameState === 1 && (
        <GamePage
          setGameState={setGameState}
          inputCitiesList={inputCitiesList}
          setInputCitiesList={setInputCitiesList}
        />
      )}
      {gameState === 2 && (
        <FinalPage
          setGameState={setGameState}
          inputCitiesList={inputCitiesList}
          setInputCitiesList={setInputCitiesList}
        />
      )}
    </>
  );
};

export default App;
