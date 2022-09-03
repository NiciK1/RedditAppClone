import React from 'react'
import { useSelector } from 'react-redux'
import { Posts } from '../../features/Posts/Posts'
import { selectPosts } from '../../app/Store/redditSlice'




const HomePost = () => {
    const term = useSelector(selectPosts)
    
    return (
        <div className='HomePost-div'>
            <div className='Posts-div'>
                <Posts props={term}/> 
            </div>
        </div>
        
    )
}

export default HomePost
