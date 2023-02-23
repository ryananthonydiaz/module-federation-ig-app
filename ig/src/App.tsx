import React from "react";
import { Header } from "./Header";
import { Spacer } from "./Spacer";
import { Posts } from "./Posts";
import { Providers } from "./provider/Providers";

//@ts-ignore
const StoryCarousel = React.lazy(() => import("story/StoryCarousel"));

function App() {
  return (
    <Providers>
      <div className="pageContainer">
        <Header />
        <Spacer height="3rem" />
        <section>
          <React.Suspense fallback={<div>Loading</div>}>
            <StoryCarousel />
          </React.Suspense>
        </section>
        <section>
          <Posts />
        </section>
      </div>
    </Providers>
  );
}

export default App;
