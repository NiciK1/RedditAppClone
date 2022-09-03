
import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchPostsData = createAsyncThunk(
    "redditPosts/fetchPostsData",
    async (input, thunkAPI) => {
        const responses = [];
  const postsPerResponses = 25;
      const response = await fetch(`https://www.reddit.com/r/${input? input : "home"}.json?limit=${postsPerResponses}`)
      const responseJSON = await response.json();
      responses.push(responseJSON)

      const allPosts = []

      responses.forEach(response => {
          allPosts.push(...response.data.children);
      })

      console.log(allPosts)
      return allPosts
        
        }
    ) 

  



export default fetchPostsData


