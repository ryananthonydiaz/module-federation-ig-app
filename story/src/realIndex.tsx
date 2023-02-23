import React from "react";
import ReactDOM from "react-dom/client";
import StoryCarousel from "./StoryCarousel";
//@ts-ignore
import { StoryProvider } from "host/story-store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoryProvider>
      <StoryCarousel />
    </StoryProvider>
  </React.StrictMode>
);
