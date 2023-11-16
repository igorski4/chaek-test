import { FC, ReactNode } from "react";

type ButtonType = {
  onClick: () => void;
  children: ReactNode;
};

const Button: FC<ButtonType> = ({ onClick, children }) => {
  return (
    <button className="bg-violet-600 hover:bg-violet-700 rounded px-4 py-2 w-fit text-white mx-auto" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
