import { Reducer } from "react";
import { createReducerStore } from "./createReducerStore";

export enum StoryActionType {
  TOGGLE_STORY_IS_IN_VIEW_MODE = "TOGGLE_STORY_IS_IN_VIEW_MODE",
}

interface IMedia {
  isVideo: boolean;
  isImage: boolean;
  video: string;
  image: string;
}

interface IStoryState {
  storyIsInViewMode: boolean;
  storyContent: Array<IMedia>;
  storyAuthorProfilePic: string;
  storyAuthorHandleName: string;
}

interface IStoryAction {
  type: StoryActionType;
  payload: any;
}

const initialStoryState: IStoryState = {
  storyIsInViewMode: false,
  storyContent: [],
  storyAuthorProfilePic: "",
  storyAuthorHandleName: "",
};

const storyReducer: Reducer<Partial<IStoryState>, IStoryAction> = (
  state: Partial<IStoryState>,
  action: IStoryAction
) => {
  switch (action.type) {
    case StoryActionType.TOGGLE_STORY_IS_IN_VIEW_MODE:
      return {
        ...state,
        storyIsInViewMode: action.payload.storyIsInViewMode,
        storyContent: action.payload.storyContent,
      };
    default:
      throw new Error(`Action Type of: ${action.type} is not known.`);
  }
};

const createStoryStore = () => {
  const {
    useStateContext: useStoryState,
    useDispatchContext: useStoryDispatch,
    Provider: StoryProvider,
  } = createReducerStore<
    IStoryState,
    IStoryAction,
    Reducer<Partial<IStoryState>, IStoryAction>
  >(initialStoryState, storyReducer);

  return {
    StoryProvider,
    useStoryState,
    useStoryDispatch,
  };
};

const { StoryProvider, useStoryState, useStoryDispatch } = createStoryStore();

export { StoryProvider, useStoryState, useStoryDispatch };
