import { FC } from "react";

type InputType = {
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  placeholder: string;
  value: string;
  disabled?: boolean;
};

const Input: FC<InputType> = ({ onChange, placeholder, value, disabled, onKeyDown }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      onChange={handleChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
      className="w-full p-3 bg-gray-100 rounded-md"
      type="text"
      disabled={disabled}
    />
  );
};

export default Input;
