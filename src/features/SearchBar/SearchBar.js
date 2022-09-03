import React from "react"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchTerm } from "../../app/Store/redditSlice"
import fetchPostsData from "../Fetch/fetchPostsData"



export const SearchBar = () => {


  const [input, setInput] = useState("home")

  const dispatch = useDispatch()



    return (
        <div className="App-header-search-bar-div">
          <input type="text" name="text" defaultValue="" placeholder='Search' className='App-header-search-bar' onChange={(e) => setInput(e.currentTarget.value)}/>
          <button onClick={()=>{dispatch(setSearchTerm(input)); dispatch(fetchPostsData(input))}} type="App-header-search-bar-button__submit" className="App-header-search-bar-button__submit"><BiSearch size={25}/></button>
        </div>
    )
}