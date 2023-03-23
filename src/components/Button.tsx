import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: any;
  style?: any
};

export const  Button = ({ children, onClick, style }: ButtonProps) => (
  <button style={style} onClick={onClick}>{children}</button>
);
