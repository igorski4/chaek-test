import { FC, useState } from "react";
import Container from "../layout/Container";
import Header from "../layout/Header";
import Button from "../ui/Button";

type GamePageType = {
  setGameState: React.Dispatch<React.SetStateAction<number>>;
};

const GamePage: FC<GamePageType> = () => {
  const [canStep, setCanStep] = useState<boolean>(true);

  const handleClick = () => setCanStep(!canStep);

  return (
    <Container>
      <Header title={canStep ? "Сейчас ваша очередь" : "Сейчас очередь соперника"} timer />
      <Button onClick={handleClick}>1</Button>
    </Container>
  );
};

export default GamePage;
