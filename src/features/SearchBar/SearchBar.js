import React from "react"
import { BiSearch } from "react-icons/bi"

export const SearchBar = () => {

    const handleSubmit = () => {
        
    }

    return (
        <div className="App-header-search-bar-div">
          <input type="text" name="search" value="" placeholder='Search' className='App-header-search-bar'/>
          <button onClick={handleSubmit} type="App-header-search-bar-button__submit" className="App-header-search-bar-button__submit"><BiSearch size={25}/></button>
        </div>
    )
}