import React from "react";
import { useDispatch } from "react-redux";
import fetchSubreddits from "./fetchSubreddits";


const SubredditsCard = (props) => {

  const dispatch = useDispatch()
  if(props.props.length === 0 || props === undefined) {
    dispatch(fetchSubreddits)
  }

  console.log(props.props)

  return (
    <div className="Subreddits">
          {props.props.length !== 0 && props.props.forEach(({data: {banner_img, display_name}}, index) => {
            return (
              <div className="Subreddit" key = {index}>
                <img src={banner_img} alt=""/>
                <h3>{display_name}</h3>
              </div>
  )
})}
    </div>
    
  )
}

export default SubredditsCard;



