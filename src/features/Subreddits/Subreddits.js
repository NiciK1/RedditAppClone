import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SubredditsCard from './SubredditsCard'
import fetchSubreddits from './fetchSubreddits'


const Subreddits = (props) => {


  const dispatch = useDispatch()
  
  if(props === undefined || props.props.length <= 0 ) {
    dispatch(fetchSubreddits)
  }
  console.log(props)  

  return (
    <div className='Subreddits'>
        {props.props.length !== 0 && props.props.map(({data: {banner_img, display_name}}, index) => {
          return(
            <button type="subredditSelector" className='subredditSelector' key={index}><SubredditsCard props={{banner_img, display_name}} key={index}/></button>
          )
        })}
    </div>
  )
}

export default Subreddits
