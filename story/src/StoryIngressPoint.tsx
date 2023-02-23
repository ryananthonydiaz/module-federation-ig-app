//@ts-nocheck
import React, { MouseEventHandler } from "react";
import { Story } from "./Story";
import { Margin } from "./Margin";
import {
  StoryActionType,
  useStoryDispatch,
  useStoryState,
} from "host/story-store";
import styles from "./storyIngressPoint.module.css";

export interface IMedia {
  isVideo: boolean;
  isImage: boolean;
  video: string;
  image: string;
}

export interface IStory {
  profilePic: string;
  handle: string;
  storyContent: Array<IMedia>;
}

export interface IStoryIngressPointProps {
  story: IStory;
  storyNumber: number;
}

export const StoryIngressPoint = ({
  story,
  storyNumber,
}: IStoryIngressPointProps) => {
  const { storyIsInViewMode, storyContent } = useStoryState();
  const storyDispatch = useStoryDispatch();

  let storyPicBorder: {
    background?: string;
    border?: string;
  } = {
    background: "linear-gradient(to right, yellow, purple)",
  };

  if (storyNumber > 4) {
    storyPicBorder = {
      border: "solid 1px lightgrey",
    };
  }

  const storyIngressHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    storyDispatch({
      type: StoryActionType.TOGGLE_STORY_IS_IN_VIEW_MODE,
      payload: {
        storyIsInViewMode: true,
        storyContent: story.storyContent,
      },
    });
  };

  const closeStory = () => {
    storyDispatch({
      type: StoryActionType.TOGGLE_STORY_IS_IN_VIEW_MODE,
      payload: {
        storyIsInViewMode: false,
        storyContent: [],
      },
    });
  };

  return (
    <>
      <div className={styles.storyIngressPointContainer}>
        <button
          className={styles.storyIngressPointPicBorder}
          style={storyPicBorder}
          onClick={storyIngressHandler}
        >
          <img
            alt={`${story.handle} profile`}
            className={styles.storyIngressPointPic}
            crossOrigin="anonymous"
            draggable={false}
            src={story.profilePic}
          ></img>
        </button>
        <Margin margin={{ margin: ".25rem 0" }}>
          <span className={styles.storyIngressPointHandle}>{story.handle}</span>
        </Margin>
        {storyIsInViewMode === true ? (
          <Story storyContent={storyContent} closeStory={closeStory} />
        ) : null}
      </div>
    </>
  );
};
