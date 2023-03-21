import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const  Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
