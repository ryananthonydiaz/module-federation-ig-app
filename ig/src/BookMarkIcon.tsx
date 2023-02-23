import React from "react";
import { Svg } from "./Svg";

interface IBookMarkIcon {
  height?: string;
  width?: string;
}

export const BookMarkIcon = ({
  height = "48",
  width = "48",
}: IBookMarkIcon) => {
  return (
    <Svg
      height={height}
      width={width}
      viewBox="0 96 960 960"
      d="M200 936V271q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480 816 200 936Zm60-91 220-93 220 93V271H260v574Zm0-574h440-440Z"
    />
  );
};
