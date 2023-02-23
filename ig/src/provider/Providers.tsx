import React from "react";

//@ts-ignore
import { StoryProvider } from "host/story-store";

interface IProvidersProps {
  children: any;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <React.Suspense fallback={<div />}>
      <StoryProvider>{children}</StoryProvider>
    </React.Suspense>
  );
};
