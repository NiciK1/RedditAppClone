import { createAsyncThunk } from "@reduxjs/toolkit";


const getSubreddits = createAsyncThunk(
    "subreddits/getSubreddits", 
    async (arg, thunkAPI) => {
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

export default getSubreddits;