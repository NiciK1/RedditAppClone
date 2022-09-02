

// const fetchPostsData = (input) => {
//   const responses = [];
//   const postsPerResponses = 25;


//   const fetchPosts = async (i) => {
//       const response = await fetch(`https://www.reddit.com/r/${i}.json?limit=${postsPerResponses}`)
//       const responseJSON = await response.json();
//       responses.push(responseJSON)

//       const allPosts = []

//       responses.forEach(response => {
//           allPosts.push(...response.data.children);
//       })

//       console.log(allPosts)
//       return allPosts
//     }
//     return fetchPosts(input);
// }



// export default fetchPostsData




import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchPostsData = createAsyncThunk(
    "redditPosts/fetchPostsData",
    async (input, thunkAPI) => {
        const responses = [];
  const postsPerResponses = 25;


  const fetchPosts = async (i) => {
      const response = await fetch(`https://www.reddit.com/r/${i}.json?limit=${postsPerResponses}`)
      const responseJSON = await response.json();
      responses.push(responseJSON)

      const allPosts = []

      responses.forEach(response => {
          allPosts.push(...response.data.children);
      })

      console.log(allPosts)
      return allPosts
        }
    return fetchPosts(input);
    }
    ) 

  



export default fetchPostsData




