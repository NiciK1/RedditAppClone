import React from 'react'
import {TiArrowUpOutline, TiArrowDownOutline, TiArrowUpThick, TiArrowDownThick} from "react-icons/ti"
import {BiChat} from "react-icons/bi"
import { useState } from 'react'
import moment from 'moment/moment'
import { useDispatch } from 'react-redux'
import fetchCommentsForPosts from '../Comments/fetchCommentsForPosts'
import {selectComments} from "../../app/Store/commentsSlice"
import { useSelector } from 'react-redux'
import Comments from '../Comments/Comments'

function PostsCard(props) {
  const [ vote, setVote ] = useState(null)
  const [toggleComments, setToggleComments ] = useState(false)

  const commentsToRender = useSelector(selectComments)

  const commentsButton = document.getElementsByClassName("Posts-footer-comments-BiChat")

  const dispatch = useDispatch()

  const postsLikeDislikeCount = document.getElementsByClassName("Posts-like-dislike-button-count")

  

    //   <TiArrowUpThick size={27} className="Posts-TiArrowUpOutline"/>
    
    //  <TiArrowUpOutline size={27} className="Posts-TiArrowUpOutline"/>

    // <TiArrowDownThick size={27} className="Posts-TiArrowDownOutline"/>
    
    //  <TiArrowDownOutline size={27} className="Posts-TiArrowDownOutline"/>

    const likeDislike = (newVote) => {
      if(newVote === vote) {
        setVote(3)
        postsLikeDislikeCount[props.props.index].removeAttribute("id")
      } else if(newVote === 1) {
        setVote(newVote)
        postsLikeDislikeCount[props.props.index].id = "LikeDislikeCountUp"
      } else {
        setVote(0)
        postsLikeDislikeCount[props.props.index].id = "LikeDislikeCountDown"
      }
    }
    
    

    const handleCommentsClick = () => {
      if(props.props.num_comments !== 0){
        if(!toggleComments){
          dispatch(fetchCommentsForPosts(props.props.permalink))
          console.log(commentsToRender)
          commentsButton[props.props.index].id = "commentsButtonClicked";
      } else {
        commentsButton[props.props.index].removeAttribute("id")
      }
      setToggleComments(!toggleComments)}
    }
    
  


  return (
    <article className="Posts" >
          <div className='Posts-img-like-dislike'>
            <div className="Posts-like-dislike-button-div">
              <button type="Posts-like-button" className="Posts-like-dislike-button" onClick={() => likeDislike(1)}>{vote === 1? <TiArrowUpThick size={27} className="Posts-TiArrowUpOutline" style={{"color": "rgb(0, 173, 0)"}}/> : <TiArrowUpOutline size={27} className="Posts-TiArrowUpOutline"/>}</button>
              <h3 className='Posts-like-dislike-button-count' >{props.props.ups - props.props.downs}</h3>
              <button type="Posts-dislike-button"  className="Posts-like-dislike-button" onClick={() => likeDislike(0)}>{vote === 0? <TiArrowDownThick size={27} className="Posts-TiArrowDownOutline" style={{"color": "red"}}/> : <TiArrowDownOutline size={27} className="Posts-TiArrowDownOutline" />}</button>
            </div>
            <div className = "Posts-main-content-div">
              <div className="Posts-main-content">
                <h3 className="Posts-main-title">{props.props.title}</h3>
                <img src={props.props.url_overridden_by_dest} alt="" className="Posts-main-img"/> 
              </div>      
          </div>   
      </div>
              <div className= "Posts-footer">
                <p className="Posts-footer-text" id="Posts-footer-text-username"><span>Posted by</span> {props.props.author}</p>
                <p className="Posts-footer-text" id="Posts-footer-text-time-posted">{moment.unix(props.props.created_utc).fromNow()}</p>
                <div className="Posts-footer-comments" onClick={() => handleCommentsClick()}>
                  <BiChat size={25} className="Posts-footer-comments-BiChat"/>
                  <p className="Posts-footer-text" id="Posts-footer-text-amount-of-comments" >{props.props.num_comments}</p>
                </div>
            </div>
            {toggleComments && commentsToRender.map(({data: {author, body, created_utc}}, index) => {
                return <Comments key={index} props={
                  {author,
                  body,
                  created_utc}
                }/>
            }
            )}
        </article>
  )
}


export default PostsCard


