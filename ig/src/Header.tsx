import React from "react";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { IgLogoIcon } from "./IgLogoIcon";
import { HeartIcon } from "./HeartIcon";
import { MessengerIcon } from "./MessengerIcon";
import { Margin } from "./Margin";
import styles from "./Header.module.css";

//@ts-ignore

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-container_one"]}>
        <Margin margin={{ margin: ".5rem" }}>
          <IgLogoIcon />
        </Margin>
        <ArrowDownIcon height="24" width="24" />
      </div>
      <Margin margin={{ margin: ".5rem" }}>
        <div className={styles["header-container_two"]}>
          <HeartIcon height="24" width="24" />
          <MessengerIcon />
        </div>
      </Margin>
    </header>
  );
};
