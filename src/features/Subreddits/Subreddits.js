import React from 'react'
import { useDispatch } from 'react-redux'
import SubredditsCard from './SubredditsCard'
import fetchSubreddits from './fetchSubreddits'
import fetchPostsData from "../Fetch/fetchPostsData"
import { useState } from 'react'



const Subreddits = (props) => {

  const subredditToChange = document.getElementsByClassName("subredditSelector")

  const [lastSelectedSubreddit, setLastSelectedSubreddit ]= useState(null)

  const dispatch = useDispatch()

  
  if(props === undefined || props.props.length <= 0 ) {
    dispatch(fetchSubreddits)
  }
  console.log(props)  


  const handleStylingClick = (num) => {
    if(num !== lastSelectedSubreddit ) {
      subredditToChange[num].id = "subredditClicked"
      if(lastSelectedSubreddit !== null) {
        subredditToChange[lastSelectedSubreddit].removeAttribute("id")
      }
    }
  }

  const handleClick = (index, display_name) => {
    if(index !== lastSelectedSubreddit) {
      dispatch(fetchPostsData(display_name)); 
      handleStylingClick(index); 
      setLastSelectedSubreddit(index)
    }
  }



  return (
    <ul className='Subreddits'>
        {props.props.length !== 0 && props.props.map(({data: {icon_img, display_name}}, index) => {
          return(
            <li className='subreddit-li' key={index}><button type="subredditSelector" className='subredditSelector' key={index} onClick={() => handleClick(index, display_name)}><SubredditsCard props={{icon_img, display_name}} key={index}/></button></li>
          )
        })}
    </ul>
  )
}

export default Subreddits
