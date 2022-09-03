import React from "react";

import fetchPostsData from "../Fetch/fetchPostsData";
import PostsCard from "./PostsCard";
import { useDispatch } from "react-redux";




export const Posts = (props) => {
  const initialValue = "home"
  const dispatch = useDispatch();

  if(props === undefined || props.props.length <= 0) {
    dispatch(fetchPostsData(initialValue))
  }
  
  console.log(props)

  //TODO: add comments render
  

    return (
      <div className="Posts-all-div">
        {props.props.length !== 0 && props.props.map(({data: {author, downs, num_comments, title, ups, url_overridden_by_dest}}, index) => {
          return <PostsCard props={{
            author,
            downs,
            num_comments,
            title,
            ups,
            url_overridden_by_dest
          }} key={index}/>
        })}
      </div>
    )
}


