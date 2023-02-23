import React from "react";
import { Post } from "./Post";
import { IPost } from "./Post";

import porscheIgPost from "./assets/images/porscheIgPost.jpeg";
import porsche2IgPost from "./assets/images/porsche2IgPost.jpeg";
import porsche3IgPost from "./assets/images/porsche3IgPost.jpeg";
import lebanonPorscheIgProfilePic from "./assets/images/lebanonPorscheIgProfilePic.jpeg";
import gt3IgProfilePic from "./assets/images/gt3IgProfilePic.jpeg";
import cylinderSixIgProfilePic from "./assets/images/cylinderSixIgProfilePic.jpeg";
import { Margin } from "./Margin";

const PostsData: IPost[] = [
  {
    handleName: "cylinder_six",
    caption: "GT3rs 👌😮‍💨",
    profilePic: cylinderSixIgProfilePic,
    media: {
      isVideo: false,
      isImage: true,
      image: porscheIgPost,
      video: null,
    },
  },
  {
    handleName: "gt3rs.weissach",
    caption: "throwback turbo 💨",
    profilePic: gt3IgProfilePic,
    media: {
      isVideo: false,
      isImage: true,
      image: porsche2IgPost,
      video: null,
    },
  },
  {
    handleName: "porschelebanonfans",
    caption: "takin' her out to grab a ☕️",
    profilePic: lebanonPorscheIgProfilePic,
    media: {
      isVideo: false,
      isImage: true,
      image: porsche3IgPost,
      video: null,
    },
  },
];

export const Posts = () => {
  return (
    <>
      {PostsData.map((post, num) => (
        <Margin margin={{ margin: "1rem 0" }} key={num}>
          <Post post={post} />
        </Margin>
      ))}
    </>
  );
};
