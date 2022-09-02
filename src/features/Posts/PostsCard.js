import React from 'react'
import {TiArrowUpOutline, TiArrowDownOutline} from "react-icons/ti"
import {BiChat} from "react-icons/bi"

function PostsCard(props) {

  return (
    <article className="Posts" >
            <div className="Posts-like-dislike-button-div">
              <button type="Posts-like-button" className="Posts-like-dislike-button"><TiArrowUpOutline size={27} className="Posts-TiArrowUpOutline"/></button>
              <h3 className='Posts-like-dislike-button-count' >{props.props.ups - props.props.downs}</h3>
              <button type="Posts-dislike-button"  className="Posts-like-dislike-button" ><TiArrowDownOutline size={27} className="Posts-TiArrowDownOutline"/></button>
            </div>
            <div className = "Posts-main-content-div">
              <div className="Posts-main-content">
                <h3 className="Posts-main-title">{props.props.title}</h3>
                <img src="https://picsum.photos/200/300" alt="" className="Posts-main-img"/> //TODO: Get picture with url_overridden_by_dest but find out a way to see if it exists first so that the error of url_overridden_by_dest not found does not occur
              </div>
              <div className= "Posts-footer">
                <p className="Posts-footer-text" id="Posts-footer-text-username">{props.props.author}</p>
                <p className="Posts-footer-text" id="Posts-footer-text-time-posted"></p>
                <div className="Posts-footer-comments" >
                  <BiChat size={25} className="Posts-footer-comments-BiChat"/>
                  <p className="Posts-footer-text" id="Posts-footer-text-amount-of-comments">{props.props.num_comments}</p>
                </div>
              </div>
            </div>
        </article>
  )
}

export default PostsCard
