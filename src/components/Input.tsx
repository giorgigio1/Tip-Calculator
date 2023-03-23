import React, { useState, ChangeEvent } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  style?: any;
  onChange?: any;
  value?: any;
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
