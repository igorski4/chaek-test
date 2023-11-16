import clsx from "clsx";
import { FC } from "react";
import Title from "../components/Title";

type HeaderProps = {
  title: string;
  timer?: boolean;
};

const Header: FC<HeaderProps> = ({ title, timer = false }) => {
  return (
    <div className={clsx("px-4 py-[17px] flex", timer ? "justify-between" : "justify-center")}>
      <Title>{title}</Title>
    </div>
  );
};

export default Header;
