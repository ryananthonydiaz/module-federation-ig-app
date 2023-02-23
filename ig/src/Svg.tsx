import React from "react";
import styles from "./App.module.css";

type SvgProps = {
  height: string;
  viewBox: string;
  width: string;
  d: string;
};

export const Svg = ({ height, viewBox, width, d }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      className={styles.pointer}
      viewBox={viewBox}
      width={width}
    >
      <path d={d} />
    </svg>
  );
};
