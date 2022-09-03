import React from 'react'
import SubredditsOptions from "./SubredditsOptions"
import { useDispatch } from 'react-redux'
import getSubreddits from './getSubreddits'


function Subreddits(props) {
  const dispatch = useDispatch()
  if(props === undefined) {
    dispatch(getSubreddits())
  }
  console.log(props)

  return (
    <div className="Subreddits">
        <h2 className='Subreddits-main-title'>Subreddits</h2>
        
    </div>
  )
}

export default Subreddits
