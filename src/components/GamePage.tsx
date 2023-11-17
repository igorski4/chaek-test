import { FC, useState, useEffect, Key } from "react";
import Container from "../layout/Container";
import Header from "../layout/Header";
import IconButton from "../ui/IconButton";
import { MessageIcon } from "../constants/icons";
import Input from "../ui/Input";
import PlayingField from "./PlayingField";
import { cities } from "../constants/cities";
import { delay } from "../utils/delay";
import { formatеingString } from "../utils/formatting";

type GamePageType = {
  setGameState: React.Dispatch<React.SetStateAction<number>>;
  inputCitiesList: string[];
  setInputCitiesList: React.Dispatch<React.SetStateAction<string[]>>;
};

const getLastCity = (inputCitiesList: string[]) => inputCitiesList[inputCitiesList.length - 1];

const getLastCityChar = (lastCity: string) => {
  return lastCity[lastCity.length - 1] !== "ъ" && lastCity[lastCity.length - 1] !== "ь"
    ? lastCity[lastCity.length - 1]
    : lastCity[lastCity.length - 2];
};

const getPossibleCities = (lastCityChar: string, inputCitiesList: string[]) => {
  return cities
    .filter((el) => el[0].toLocaleLowerCase() === lastCityChar)
    .filter((el) => !inputCitiesList.includes(el));
};

const GamePage: FC<GamePageType> = ({ setGameState, inputCitiesList, setInputCitiesList }) => {
  const [inputCity, setInputCity] = useState<string>("");
  const [canStep, setCanStep] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [timer, setTimer] = useState<Key>(1);

  useEffect(() => {
    if (!canStep) {
      const lastCity = getLastCity(inputCitiesList);
      const lastCityChar = getLastCityChar(lastCity);
      const listPossibleCities = getPossibleCities(lastCityChar, inputCitiesList);

      if (listPossibleCities?.length) {
        delay().then(() => {
          const randomIndex = Math.random() * (listPossibleCities.length + 1);
          setInputCitiesList([...inputCitiesList, listPossibleCities[Math.floor(randomIndex)]]);
          setCanStep(!canStep);
          setTimer(1);
        });
      }
    }
  }, [canStep]);

  useEffect(() => {
    if (inputCity) setError("");
  }, [inputCity]);

  const handleClick = () => {
    const findIndex = cities.findIndex((el) => formatеingString(el) === formatеingString(inputCity));

    if (!~findIndex) {
      setInputCity("");
      setError("Город не найден!");
      return;
    }

    if (!inputCitiesList.length) {
      setCanStep(!canStep);
      setInputCitiesList([cities[findIndex]]);
      setInputCity("");
      return;
    }

    const lastCity = getLastCity(inputCitiesList);
    const lastCityChar = getLastCityChar(lastCity);

    const checkLastChar = cities[findIndex][0].toLocaleLowerCase() === lastCityChar;

    if (!checkLastChar) {
      setInputCity("");
      setError("Данный город не начинается на последнюю букву предыдущего!");
      return;
    }

    const findInInputCities = !inputCitiesList.includes(cities[findIndex]);

    if (!findInInputCities) {
      setInputCity("");
      setError("Данный город уже называли!");
      return;
    }

    setCanStep(!canStep);
    setInputCitiesList([...inputCitiesList, cities[findIndex]]);
    setInputCity("");
    setTimer(2);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Container>
      <Header
        title={canStep ? "Сейчас ваша очередь" : "Сейчас очередь соперника"}
        timer={true}
        resetTimer={timer}
        setGameState={setGameState}
      />
      <PlayingField inputCities={inputCitiesList} />
      <div className="p-4" ref={null}>
        <div className="flex gap-x-[15px] bg-gray-100 rounded-md pr-2">
          <Input
            value={inputCity}
            onChange={setInputCity}
            onKeyDown={handleKeyDown}
            placeholder={
              canStep
                ? !inputCitiesList.length
                  ? "Напишите любой город, например: Где вы живете?"
                  : `Знаете город на букву “${getLastCityChar(getLastCity(inputCitiesList)).toLocaleUpperCase()}”?`
                : "Ожидаем ответа соперника..."
            }
            disabled={!canStep}
          />
          <IconButton onClick={handleClick} icon={MessageIcon} disabled={!canStep} />
        </div>
        {error && <p className="pl-2 mt-1 text-xs text-red-600">{error}</p>}
      </div>
    </Container>
  );
};

export default GamePage;
