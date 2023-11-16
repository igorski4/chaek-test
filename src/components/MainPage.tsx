import { FC } from "react";
import Header from "../layout/Header";
import Button from "../ui/Button";
import Container from "../layout/Container";

type MainPageType = {
  setGameState: React.Dispatch<React.SetStateAction<number>>;
};

const MainPage: FC<MainPageType> = ({ setGameState }) => {
  const handleClick = () => setGameState(1);

  return (
    <Container>
      <Header title="Игра в города на время" />
      <div className="p-6 flex flex-col gap-y-6">
        <p className="text-sm leading-normal text-zinc-700">Цель: Назвать как можно больше реальных городов.</p>
        <div>
          <ul className="text-sm leading-normal text-zinc-700 list-disc ps-[24px]">
            <li>Запрещается повторение городов.</li>
            <li>
              Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок должен
              назвать город на букву стоящую перед ъ или ь знаком.
            </li>
            <li>
              Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается
              проигравшим
            </li>
          </ul>
        </div>

        <Button onClick={handleClick}>Начать игру</Button>
      </div>
    </Container>
  );
};

export default MainPage;
