import React from "react";
import {TiArrowUpOutline, TiArrowDownOutline} from "react-icons/ti"
import {BiChat} from "react-icons/bi"

export const Posts = () => {

      


    return (
        <article className="Posts">
            <div className="Posts-like-dislike-button-div">
              <button type="Posts-like-button" className="Posts-like-dislike-button"><TiArrowUpOutline size={27} className="Posts-TiArrowUpOutline"/></button>
              <h3 className='Posts-like-dislike-button-count' >0000</h3>
              <button type="Posts-dislike-button"  className="Posts-like-dislike-button" ><TiArrowDownOutline size={27} className="Posts-TiArrowDownOutline"/></button>
            </div>
            <div className = "Posts-main-content-div">
              <div className="Posts-main-content">
                <h3 className="Posts-main-title">Test Test Test Test Test Test Test Test </h3>
                <img src="https://picsum.photos/200/300" alt="" className="Posts-main-img"/>
              </div>
              <div className= "Posts-footer">
                <p className="Posts-footer-text" id="Posts-footer-text-username">Test Test</p>
                <p className="Posts-footer-text" id="Posts-footer-text-time-posted">0 hours ago</p>
                <div className="Posts-footer-comments" >
                  <BiChat size={25} className="Posts-footer-comments-BiChat"/>
                  <p className="Posts-footer-text" id="Posts-footer-text-amount-of-comments">Num</p>
                </div>
              </div>
            </div>
        </article>
    )
}