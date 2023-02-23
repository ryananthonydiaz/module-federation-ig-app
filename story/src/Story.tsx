import React from "react";
import { IMedia } from "./StoryIngressPoint";
import styles from "./story.module.css";

export const Story = ({
  storyContent,
  closeStory,
}: {
  storyContent: IMedia[] | undefined;
  closeStory: () => void;
}) => {
  const image = storyContent?.[0]?.image;
  return (
    <div className={styles.storyContainer} onClick={closeStory}>
      <img
        className={styles.storyMedia}
        src={image ?? ""}
        alt={`Story content from user`}
      />
    </div>
  );
};
