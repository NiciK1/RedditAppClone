import { createAsyncThunk } from "@reduxjs/toolkit"



const fetchCommentsForPosts = createAsyncThunk(
    "comments/fetchCommentsForPosts",
    async (permalink, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`);
        const json = await response.json();
        return json[1].data.children
        
    }
)








export default fetchCommentsForPosts
