import { FC, useState, useEffect } from "react";
import Container from "../layout/Container";
import Header from "../layout/Header";
import IconButton from "../ui/IconButton";
import { MessageIcon } from "../constants/icons";
import Input from "../ui/Input";
import PlayingField from "./PlayingField";
import { cities } from "../constants/cities";
import { delay } from "../utils/delay";

type GamePageType = {
  setGameState: React.Dispatch<React.SetStateAction<number>>;
};

const getLastCity = (citiesList: string[]) => citiesList[citiesList.length - 1];

const getLastCityChar = (lastCity: string) => {
  return lastCity[lastCity.length - 1] !== "ъ" && lastCity[lastCity.length - 1] !== "ь"
    ? lastCity[lastCity.length - 1]
    : lastCity[lastCity.length - 2];
};

const getPossibleCities = (lastCityChar: string, citiesList: string[]) => {
  return cities.filter((el) => el[0].toLocaleLowerCase() === lastCityChar).filter((el) => !citiesList.includes(el));
};

const formatеingString = (str: string) => str.toLocaleLowerCase().trim();

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

  useEffect(() => {
    if (!canStep) {
      const lastCity = getLastCity(citiesList);
      const lastCityChar = getLastCityChar(lastCity);
      const listPossibleCities = getPossibleCities(lastCityChar, citiesList);

      delay().then(() => {
        const randomIndex = Math.random() * (listPossibleCities.length + 1);
        setCitiesList([...citiesList, listPossibleCities[Math.floor(randomIndex)]]);
        setCanStep(!canStep);
      });
    }
  }, [canStep]);

  const handleClick = () => {
    const lastCity = getLastCity(citiesList);
    const lastCityChar = getLastCityChar(lastCity);

    const findIndex = cities.findIndex((el) => formatеingString(el) === formatеingString(inputCity));
    const findInInputCities = !citiesList.includes(cities[findIndex]);
    const checkLastChar = cities[findIndex][0].toLocaleLowerCase() === lastCityChar;

    if (~findIndex && findInInputCities && checkLastChar) {
      setCanStep(!canStep);
      setCitiesList([...citiesList, cities[findIndex]]);
    }
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
