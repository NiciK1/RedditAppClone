import { configureStore } from '@reduxjs/toolkit';
import redditReducer from "./redditSlice"
import subRedditReducer from "./subRedditsSlice"

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subreddit: subRedditReducer
  },
});
