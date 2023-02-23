import React from "react";

interface ISpacerProps {
  display?: "block" | "flex" | "inline" | "inline-flex";
  height?: string;
  width?: string;
}

export const Spacer = ({
  display = "block",
  height = "12px",
  width = "12px",
}: ISpacerProps) => {
  return (
    <div
      style={{
        display,
        height,
        maxHeight: height,
        width,
        maxWidth: width,
      }}
    />
  );
};
