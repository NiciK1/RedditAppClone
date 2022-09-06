import { configureStore } from '@reduxjs/toolkit';
import redditReducer from "./redditSlice"
import subRedditReducer from "./subRedditsSlice"
import commentsReducer from "./commentsSlice"

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subreddit: subRedditReducer,
    comments: commentsReducer
  },
});
