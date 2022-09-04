import { createSlice } from "@reduxjs/toolkit";
import fetchSubreddits from "../../features/Subreddits/fetchSubreddits";

const initialState = { 
    isLoading: false,
    hasError: false,
    selectedSubreddit: "Home ",
    subreddits: []
};


const subRedditsSlice = createSlice({
    name:"redditSubreddits",
    initialState,
    reducers: {
        setSubReddits(state, action) {
            state.subreddits = action.payload
        },
        selectSubReddits(state, action) {
            state.selectedSubreddit = action.payload
        }

    },
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchSubreddits.rejected] : (state, action) => {
            state.isLoading = false;
            state.hasError = true
        }
    }
})

export const {setSubReddits, selectSubReddits} = subRedditsSlice.actions;

export default subRedditsSlice.reducer;

export const selectSubreddits = (state) => state.subreddit.subreddits;
export const SubRedditsSelected = (state) => state.subreddit.selectSubReddits;