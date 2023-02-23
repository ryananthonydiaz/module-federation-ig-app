import React from "react";
import { Svg } from "./Svg";

interface ArrowDownIconProps {
  height?: string;
  width?: string;
}

export const ArrowDownIcon = ({
  height = "48",
  width = "48",
}: ArrowDownIconProps) => {
  return (
    <Svg
      height={height}
      viewBox="0 96 960 960"
      width={width}
      d="M480 712 240 472l43-43 197 197 197-197 43 43-240 240Z"
    />
  );
};
