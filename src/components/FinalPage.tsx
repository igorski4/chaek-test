import { FC } from "react";
import Button from "../ui/Button";
import Container from "../layout/Container";
import clsx from "clsx";

type FinalPageProps = {
  setGameState: React.Dispatch<React.SetStateAction<number>>;
  inputCitiesList: string[];
  setInputCitiesList: React.Dispatch<React.SetStateAction<string[]>>;
};

const FinalPage: FC<FinalPageProps> = ({ setGameState, inputCitiesList, setInputCitiesList }) => {
  const handleClick = () => {
    setGameState(0);
    setInputCitiesList([]);
  };
  const userWin = Boolean(inputCitiesList.length % 2);

  return (
    <Container>
      <div className="p-10 flex flex-col gap-y-8 text-center">
        <div className="text-xl text-black leading-normal">
          <p>{!userWin ? "К сожалению твое время вышло!" : "Поздравляем тебя с победой!"} </p>
          <p>{!userWin ? "Твой противник победил!" : "Твой противник не вспомнил нужный город!"}</p>
        </div>
        <p className={clsx(!userWin ? "text-red-600" : "text-green-600", "leading-normal text-3xl")}>00:00</p>
        <div className="text-xl text-black leading-normal">
          <p>Всего было перечислено городов: {inputCitiesList.length}</p>
          <p>Очень не плохой результат!</p>
        </div>
        {inputCitiesList.length > 0 && (
          <div>
            <p className="text-xl text-black mb-1.5 leading-normal">Последний город названный победителем</p>
            <p className="text-2xl text-black font-medium leading-normal">
              {inputCitiesList[inputCitiesList.length - 1]}
            </p>
          </div>
        )}
        <Button onClick={handleClick}>Начать новую игру</Button>
      </div>
    </Container>
  );
};

export default FinalPage;
