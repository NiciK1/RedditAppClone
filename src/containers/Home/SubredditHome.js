import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Subreddits from "../../features/Subreddits/Subreddits";
import { selectSubreddits } from "../../app/Store/subRedditsSlice"
import fetchSubreddits from "../../features/Subreddits/fetchSubreddits";
import { useEffect } from "react";

const SubredditHome = () => {

    const dispatch = useDispatch()

    const subredditsToRender = useSelector(selectSubreddits)


    useEffect(() => {
        dispatch(fetchSubreddits()); 
    }, [dispatch])

    


    return (
        <div className="HomeSubreddits-div">
            <h2 className='Subreddits-main-title'>Subreddits</h2>
            <Subreddits props={subredditsToRender}/>
        </div>
    )
}

export default SubredditHome