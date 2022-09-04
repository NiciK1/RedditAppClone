import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectSearchTerm} from "../../app/Store/redditSlice"
import { setSearchTerm } from '../../app/Store/redditSlice'
import { getPostsSuccessful } from '../../app/Store/redditSlice'
import fetchPostsData from '../../features/Fetch/fetchPostsData'

const HasErrorDiv = () => {
    const dispatch = useDispatch()
    const input = useSelector(selectSearchTerm)

    const handleClick = () => {
        dispatch(setSearchTerm(""))
        dispatch(getPostsSuccessful())
        dispatch(fetchPostsData("home"))
    }


  return (
    <div className='HasError-div'>
        <h2 className='HasError-title'>No posts matching "{input}"</h2>
        <button type="" className='HasError-button' onClick={() => handleClick()}><a className='HasError-button-text'>Return Home</a></button>
    </div>
  )
}

export default HasErrorDiv
