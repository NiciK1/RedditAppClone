import { createSlice } from "@reduxjs/toolkit";
import getSubreddits from "../../features/Subreddits/getSubreddits";

const initialState = { 
    isLoading: false,
    hasError: false,
    selectedSubreddit: "",
    subReddits: []
};


const subRedditsSlice = createSlice({
    name:"subreddits",
    initialState,
    reducers: {
        setSubReddits(state, action) {
            state.subReddits = action.payload
        },

    },
    extraReducers: {
        [getSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false
        },
        [getSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [getSubreddits.rejected] : (state, action) => {
            state.isLoading = false;
            state.hasError = true
        }
    }
})

export const {setSubReddits} = subRedditsSlice.actions;

export default subRedditsSlice.reducer;

export const selectSubReddit = (state) => state.subReddits