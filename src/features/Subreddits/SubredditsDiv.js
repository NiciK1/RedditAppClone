import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Subreddits from './Subreddits'
import {selectSubReddit, setSubReddits} from '../../app/Store/subRedditsSlice'
import getSubreddits from './getSubreddits'


function SubredditsDiv() {
    const subredditsRender = useSelector(selectSubReddit)
    //TODO: {subreddits !== undefined  && subreddits.map(({data: {display_name, banner_img}}) => {
    //      console.log(subreddits)
    //      return(<SubredditsOptions props={{display_name, banner_img}}/>)
    //  })}
  return (
    <aside className="Subreddits-div">
        <Subreddits props={subredditsRender}/>
    </aside>
  )
}

export default SubredditsDiv

