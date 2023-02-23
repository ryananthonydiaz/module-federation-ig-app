import React from "react";

interface IMarginProps {
  children: JSX.Element | JSX.Element[];
  margin: { [key: string]: string };
  styles?: { [key: string]: string };
}

export const Margin = ({ children, margin, styles = {} }: IMarginProps) => {
  return <div style={{ ...styles, ...margin }}>{children}</div>;
};
