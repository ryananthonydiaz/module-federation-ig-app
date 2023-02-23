import React from "react";
import { HeartIcon } from "./HeartIcon";
import { BookMarkIcon } from "./BookMarkIcon";
import { IgSharePostIcon } from "./IgSharePostIcon";
import { IgCommentIcon } from "./IgCommentIcon";
import { IgMoreOptionsIcon } from "./IgMoreOptionsIcon";
import styles from "./Post.module.css";
import { Margin } from "./Margin";

export interface IPost {
  handleName: string;
  caption: string;
  profilePic: string;
  media: {
    isVideo: boolean;
    isImage: boolean;
    image: string | null;
    video: string | null;
  };
}

interface IPostProps {
  post: IPost;
}

export const Post = ({ post }: IPostProps) => {
  return (
    <div>
      <Margin margin={{ margin: "1rem .5rem" }}>
        <div className={styles.postTop}>
          <div className={styles.postTop_author_container}>
            <Margin
              margin={{ margin: "0 .25rem 0 0" }}
              styles={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <img
                className={styles.postProfilePic}
                src={post.profilePic}
                alt="Post profile"
              />
            </Margin>

            <Margin margin={{ margin: "0 0 0 .25rem" }}>
              <span className={styles.fontWeight500}>{post.handleName}</span>
            </Margin>
          </div>
          <IgMoreOptionsIcon />
        </div>
      </Margin>

      {post.media.isImage ? (
        <img
          className={styles.maxWidth100}
          src={post.media.image ?? ""}
          alt={`Media post from ${post.handleName}`}
        />
      ) : (
        <video src={post.media.video ?? ""}></video>
      )}

      <Margin margin={{ margin: "0 .5rem" }}>
        <div className={styles.postTop}>
          <div className={styles.postActionsContainer}>
            {[
              <HeartIcon height="24" width="24" />,
              <IgCommentIcon />,
              <IgSharePostIcon />,
            ].map((icon, num) => (
              <Margin
                margin={{ margin: `0 0 0 ${num === 0 ? 0 : ".25rem"}` }}
                key={num}
              >
                {icon}
              </Margin>
            ))}
          </div>
          <BookMarkIcon height="24" width="24" />
        </div>
        <div className={styles.lowerProfilePicContainer}>
          <img
            className={styles.lowerProfilePic}
            src={post.profilePic}
            alt={`Profile of ${post.handleName}`}
          />

          <Margin margin={{ margin: "0 0 .25rem .5rem" }}>
            <span className={styles.handleCommentText}>
              Liked by <strong>bridgesj3</strong> and{" "}
              <strong>14,163 others</strong>
            </span>
          </Margin>
        </div>
        <div>
          <Margin margin={{ margin: ".25rem 0 .25rem 0" }}>
            <div className={styles.postCaptionContainer}>
              <span className={styles.fontWeight700}>{post.handleName}</span>

              <Margin margin={{ margin: "0 0 0 .25rem" }}>
                <span>{post.caption}</span>
              </Margin>
            </div>
          </Margin>

          <Margin margin={{ margin: ".25rem 0 0 0" }}>
            <span className={styles.allCommentsText}>
              View all 178 comments
            </span>
          </Margin>
        </div>
      </Margin>
    </div>
  );
};
