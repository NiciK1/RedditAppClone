import { createSlice } from "@reduxjs/toolkit";
import fetchCommentsForPosts from "../../features/Comments/fetchCommentsForPosts";

const initialState = {
    isLoading: false,
    hasError: false,
    selectedPostsComment: "",
    comments: []
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments(state, action) {
            state.comments = action.payload
        }
    },
    extraReducers: {
        [fetchCommentsForPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false
        },
        [fetchCommentsForPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload
        },
        [fetchCommentsForPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const {setComments} = commentsSlice.actions;
export default commentsSlice.reducer;


export const selectIsLoading = (state) => state.comments.isLoading;
export const selectHasError = (state) => state.comments.hasError;
export const selectComments = (state) => state.comments.comments;