import React from "react";
import { StoryIngressPoint, IStory } from "./StoryIngressPoint";
import { Margin } from "./Margin";
import ProfilePic1 from "./assets/images/igProfilePic1.jpeg";
import ADIgPp from "./assets/images/ADIgProfilePic.jpeg";
import ArchIgPp from "./assets/images/ArchIgProfilePic.jpeg";
import BTIgPp from "./assets/images/BTIgProfilePic.jpeg";
import CCIgPp from "./assets/images/CCIgProfilePic.jpeg";
import JBIgPp from "./assets/images/JBIgProfilePic.jpeg";
import MCIgPp from "./assets/images/MCIgProfilePic.jpeg";
import TWIgPp from "./assets/images/TWIgProfilePic.jpeg";
import jeep1 from "./assets/images/jeep1.jpeg";
import jeep2 from "./assets/images/jeep2.jpeg";
import jeep3 from "./assets/images/jeep3.jpeg";

const stories: IStory[] = [
  {
    profilePic: ProfilePic1,
    handle: "Your story",
    media: [
      {
        isVideo: false,
        isImage: true,
        image: jeep1,
        video: "",
      },
      {
        isVideo: false,
        isImage: true,
        image: jeep2,
        video: "",
      },
      {
        isVideo: false,
        isImage: true,
        image: jeep3,
        video: "",
      },
    ],
  },
  { profilePic: ADIgPp, handle: "andrew.jdiaz", media: [] },
  { profilePic: ArchIgPp, handle: "architeckure", media: [] },
  { profilePic: BTIgPp, handle: "brett_aaron", media: [] },
  { profilePic: CCIgPp, handle: "crossfitcentral", media: [] },
  { profilePic: JBIgPp, handle: "bridgesj3", media: [] },
  { profilePic: MCIgPp, handle: "mcarbzz", media: [] },
  { profilePic: TWIgPp, handle: "thirstywhale_", media: [] },
].map(({ profilePic, handle, media }) => ({
  profilePic,
  handle,
  storyContent: media,
}));

const StoryCarousel = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
      }}
    >
      {stories.map((story: IStory, i: number) => (
        <React.Suspense fallback={<div />} key={story.handle}>
          <Margin margin={{ margin: "0 .15rem" }}>
            <StoryIngressPoint storyNumber={i + 1} story={story} />
          </Margin>
        </React.Suspense>
      ))}
    </div>
  );
};

export default StoryCarousel;
