import clsx from "clsx";
import { FC, useRef } from "react";
import Title from "../components/Title";

type HeaderProps = {
  title: string;
  timer?: number;
};

const Header: FC<HeaderProps> = ({ title, timer = 0 }) => {
  const initialTimer = useRef(timer);

  return (
    <div>
      <div className={clsx("px-4 py-[17px] flex", timer ? "justify-between" : "justify-center")}>
        <Title>{title}</Title>
        {Boolean(timer) && (
          <p className="text-xl text-black font-medium leading-normal">
            {Math.floor(timer / 60)}:{timer % 60}
          </p>
        )}
      </div>
      {!timer && <div className="mt-[3px] h-[3px] bg-gray-100"></div>}
      {Boolean(timer) && (
        <div className="w-full bg-gray-100 h-1.5">
          <div
            className="bg-violet-300 h-1.5"
            style={{ width: `${((initialTimer.current - timer) / initialTimer.current) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Header;
