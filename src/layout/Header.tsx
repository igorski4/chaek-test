import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import Title from "../components/Title";
import Countdown, { zeroPad } from "react-countdown";

type HeaderProps = {
  title: string;
  timer?: boolean;
  resetTimer?: boolean;
  setGameState?: React.Dispatch<React.SetStateAction<number>>;
};

const timerRenderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => {
  return (
    <p className="text-xl text-black font-medium leading-normal">
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </p>
  );
};

const timerProgressBar = ({ minutes, seconds }: { minutes: number; seconds: number }) => {
  return (
    <div className="w-full bg-gray-100 h-1.5">
      <div
        className="bg-violet-300 h-1.5"
        style={{ width: `${((120 - (minutes * 60 + seconds)) / 120) * 100}%` }}
      ></div>
    </div>
  );
};

const Header: FC<HeaderProps> = ({ title, timer = false, resetTimer, setGameState }) => {
  const [startDate, setStartDate] = useState<number>(Date.now());

  useEffect(() => {
    setStartDate(Date.now());
  }, [resetTimer]);

  const handleComplete = () => {
    if (setGameState) setGameState(2);
  };

  return (
    <div>
      <div className={clsx("px-4 py-[17px] flex", timer ? "justify-between" : "justify-center")}>
        <Title>{title}</Title>
        {timer && (
          <Countdown
            date={startDate + 1000 * 120}
            renderer={timerRenderer}
            zeroPadTime={1}
            onComplete={handleComplete}
          />
        )}
      </div>
      {!timer && <div className="mt-[3px] h-[3px] bg-gray-100"></div>}
      {timer && (
        <Countdown
          date={startDate + 1000 * 120}
          renderer={timerProgressBar}
          zeroPadTime={1}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default Header;
