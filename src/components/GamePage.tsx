import { FC, useState } from "react";
import Container from "../layout/Container";
import Header from "../layout/Header";
import IconButton from "../ui/IconButton";
import { MessageIcon } from "../constants/icons";
import Input from "../ui/Input";

type GamePageType = {
  setGameState: React.Dispatch<React.SetStateAction<number>>;
};

const GamePage: FC<GamePageType> = () => {
  const [canStep, setCanStep] = useState<boolean>(true);
  const [inputCity, setInputCity] = useState<string>("");

  const handleClick = () => setCanStep(!canStep);

  return (
    <Container>
      <Header title={canStep ? "Сейчас ваша очередь" : "Сейчас очередь соперника"} timer />
      <Input value={inputCity} onChange={setInputCity} placeholder="Напишите любой город, например: Где вы живете?" />
      <IconButton onClick={handleClick} icon={MessageIcon} />
    </Container>
  );
};

export default GamePage;
