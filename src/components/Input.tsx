import React, { useState, ChangeEvent } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  style?: any;
  onChange?: any;
};

export const Input: React.FC<InputProps> = ({ type, placeholder, style, onChange }) => {
  const [value, setValue] = useState<any>();
 
  const hanleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

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
