import { FC, ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
  return <p className=" text-black font-normal text-base	font-size: 1rem">{children}</p>;
};

export default Title;
