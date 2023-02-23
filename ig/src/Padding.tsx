import React from "react";

interface IPaddingProps {
  children: JSX.Element | JSX.Element[];
  padding: string;
}

export const Padding = ({ children, padding }: IPaddingProps) => {
  return <div style={{ padding }}>{children}</div>;
};
