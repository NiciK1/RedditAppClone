import React from "react"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"
import fetchPostsData from "../Fetch/fetchPostsData"


export const SearchBar = () => {
  const [input, setInput] = useState("")
 let i;
 

  // const responses = [];

  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetchPosts()
  // }

  // const fetchPosts = async () => {
  //   const response = await fetch(`https://www.reddit.com/r/${input}.json`)
  //   const responseJSON = await response.json();
  //   responses.push(responseJSON)
  //   parseResults(responses)
  // }

  // const parseResults = (responses) => {
  //   const allPosts = [];
    
  //   responses.forEach(response => {
  //     allPosts.push(...response.data.children);
  //     console.log(allPosts)
      
  //   })
    
  //   allPosts.forEach(({data: {author, downs, num_comments, title, ups }}) => {
      
  //   })

  //   let length = allPosts.length;

  // }


    return (
        <div className="App-header-search-bar-div">
          <input type="text" name="text" defaultValue="" placeholder='Search' className='App-header-search-bar' onChange={(e) => setInput(e.currentTarget.value)}/>
          <button onClick={()=>{ i = input; fetchPostsData(i); i = ""}} type="App-header-search-bar-button__submit" className="App-header-search-bar-button__submit"><BiSearch size={25}/></button>
        </div>
    )
}