import clsx from "clsx";
import { FC } from "react";
import Title from "../components/Title";

type HeaderProps = {
  title: string;
  timer?: number;
};

const Header: FC<HeaderProps> = ({ title, timer = 0 }) => {
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
      <div className="mt-[3px] h-[3px] bg-gray-100"></div>
    </div>
  );
};

export default Header;
