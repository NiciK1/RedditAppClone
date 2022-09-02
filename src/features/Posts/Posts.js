import React from "react";

import fetchPostsData from "../Fetch/fetchPostsData";
import PostsCard from "./PostsCard";




export const Posts = (props) => {
  const initialValue = "pics"
  
  console.log(props)
  if(props === undefined || props.props.length <= 0) {
    fetchPostsData(initialValue)
  } else {
    console.log(props.props[0].data.author) //test
    
    props.props.map(({data: {author, downs, num_comments, title, ups}}) => {
      
    }) 
    };

    return (
      <div>
        {props.props.map(({data: {author, downs, num_comments, title, ups}}, index) => {
          console.log(author);
          return <PostsCard props={{
            author,
            downs,
            num_comments,
            title,
            ups
          }} key={index}/>
        })}
      </div>
    )
}

