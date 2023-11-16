import { FC, useState, useEffect } from "react";
import Container from "../layout/Container";
import Header from "../layout/Header";
import IconButton from "../ui/IconButton";
import { MessageIcon } from "../constants/icons";
import Input from "../ui/Input";
import PlayingField from "./PlayingField";

type GamePageType = {
  setGameState: React.Dispatch<React.SetStateAction<number>>;
};

const GamePage: FC<GamePageType> = ({ setGameState }) => {
  const [canStep, setCanStep] = useState<boolean>(true);
  const [inputCity, setInputCity] = useState<string>("");
  const [citiesList, setCitiesList] = useState<string[]>([]);

  const [seconds, setSeconds] = useState<number>(10000);

  useEffect(() => {
    if (seconds) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setGameState(2);
    }
  }, [seconds]);

  const handleClick = () => {
    setCanStep(!canStep);
    setCitiesList([...citiesList, inputCity]);
    setInputCity("");
  };

  return (
    <Container>
      <Header title={canStep ? "Сейчас ваша очередь" : "Сейчас очередь соперника"} timer={seconds} />
      <PlayingField inputCities={citiesList} />
      <div className="p-4">
        <div className="flex gap-x-[15px] bg-gray-100 rounded-md pr-2">
          <Input
            value={inputCity}
            onChange={setInputCity}
            placeholder="Напишите любой город, например: Где вы живете?"
          />
          <IconButton onClick={handleClick} icon={MessageIcon} />
        </div>
      </div>
    </Container>
  );
};

export default GamePage;
