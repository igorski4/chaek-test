import { FC } from "react";

type IconButtonType = {
  onClick: () => void;
  icon: string;
  disabled?: boolean;
};

const IconButton: FC<IconButtonType> = ({ onClick, icon, disabled }) => {
  return (
    <button
      className="bg-violet-600 hover:bg-violet-700 disabled:bg-gray-400 rounded p-1.5 text-white m-auto"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={icon} alt="React Logo" />
    </button>
  );
};

export default IconButton;
