import { FC } from "react";

type InputType = {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
};

const Input: FC<InputType> = ({ onChange, placeholder, value }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      className="w-full p-3 bg-gray-100 rounded-md"
      type="text"
    />
  );
};

export default Input;
