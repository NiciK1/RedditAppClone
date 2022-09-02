import React from "react"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts, setSearchTerm } from "../../app/Store/redditSlice"
import fetchPostsData from "../Fetch/fetchPostsData"



export const SearchBar = () => {


  const [input, setInput] = useState("pics")

  const dispatch = useDispatch()




    return (
        <div className="App-header-search-bar-div">
          <input type="text" name="text" defaultValue="" placeholder='Search' className='App-header-search-bar' onChange={(e) => setInput(e.currentTarget.value)}/>
          <button onClick={()=>{dispatch(setSearchTerm(input)); dispatch(fetchPostsData(input))}} type="App-header-search-bar-button__submit" className="App-header-search-bar-button__submit"><BiSearch size={25}/></button>
        </div>
    )
}