import React from "react";

type InputProps = {
  type: "number";
  placeholder: string;
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  style,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      value={value}
      style={style}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
