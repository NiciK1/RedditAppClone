import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Posts } from '../../features/Posts/Posts'
import { selectPosts } from '../../app/Store/redditSlice'
import fetchPostsData from '../../features/Fetch/fetchPostsData'




const Home = () => {
    const term = useSelector(selectPosts)
    
    return (
        <Posts props={term}/> //TODO: render Posts the first time before you click the search button
    )
}

export default Home
