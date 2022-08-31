import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likesCount: 0,
    title: "",
    username: "",
    timeWhenPosted: 0 + "",
    commentsCount: 0
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  }
});









export const {} = postsSlice.actions

export default postsSlice.reducer