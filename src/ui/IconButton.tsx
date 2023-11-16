import { FC } from "react";

type IconButtonType = {
  onClick: () => void;
  icon: string;
};

const IconButton: FC<IconButtonType> = ({ onClick, icon }) => {
  return (
    <button className="bg-violet-600 hover:bg-violet-700 rounded p-1.5 w-fit text-white mx-auto" onClick={onClick}>
      <img src={icon} alt="React Logo" />
    </button>
  );
};

export default IconButton;
