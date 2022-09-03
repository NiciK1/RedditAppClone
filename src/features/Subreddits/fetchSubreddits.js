import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchSubreddits = createAsyncThunk(
    "redditSubreddits/fetchSubreddits", 
    async (thunkAPI) => {
        const responses = [];
        const response = await fetch("https://www.reddit.com/subreddits.json");
        const json = await response.json()

        responses.push(json);

        const allPosts = []

        responses.forEach(response => {
            allPosts.push(...response.data.children);
        });

        console.log(allPosts)
        return allPosts;
        
    }
) 

export default fetchSubreddits;