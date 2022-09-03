import React from "react";
import { useDispatch } from "react-redux";
import fetchSubreddits from "./fetchSubreddits";


const SubredditsCard = (props) => {


  return (
    <div className="Subreddit" >
      <div className="Subreddit-img-div">
        <img src={props.props.banner_img} alt="" className="Subreddit-img"/>
      </div>
          <p className="Subreddit-title">{props.props.display_name}</p>
    </div>
    
  )
}

export default SubredditsCard;



