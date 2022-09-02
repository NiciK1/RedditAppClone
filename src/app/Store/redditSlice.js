import { createSlice } from "@reduxjs/toolkit";
import fetchPostsData from "../../features/Fetch/fetchPostsData";

const initialState = {
    posts: [],
    isLoading: false,
    searchTerm: "pics",
    subreddit: "",
    hasError: false
}

const redditSlice = createSlice({
    name: "redditPosts",
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        },
        startGetPosts(state) {
            state.isLoading = true
        },
        getPostsSuccessful(state) {
            state.isLoading = false
        },
        setSubreddit(state, action) {
            state.subreddit = action.payload
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        }

    },
    extraReducers: {
        [fetchPostsData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false
        },
        [fetchPostsData.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false
        },
        [fetchPostsData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true
        }
    }

})

export const {setPosts, startGetPosts, getPostsSuccessful, subreddit, setSearchTerm} = redditSlice.actions;
export default redditSlice.reducer;

export const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectPosts = (state) => state.reddit.posts;

