import React from 'react'
import {TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti"
import {BiChat} from "react-icons/bi"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const IsLoading = () => {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div className="IsLoading-div">
      {array.map((index) => {

        return(
        <article className="IsLoading-Posts-div" key={index} >
        <div className="IsLoading-Posts-like-dislike-button-div">
          <button type="Posts-like-button" className="Posts-like-dislike-button" ><TiArrowUpOutline size={27} className="Posts-TiArrowUpOutline"/></button>
            <Skeleton width="60px" height="20px" className='IsLoading-title-div'>
            
            </Skeleton>
          <button type="Posts-dislike-button"  className="Posts-like-dislike-button" ><TiArrowDownOutline size={27} className="Posts-TiArrowDownOutline" /></button>
        </div>
        <div className = "isLoading-Posts-main-content-div">
            <Skeleton height="30px" width="600px" className="isLoading-Posts-main-title">

            </Skeleton>
            <Skeleton className='IsLoading-img-div'>
              
            </Skeleton>
            <div className= "isLoading-footer-div">
            <Skeleton height="20px" width="100px" className='isLoading-username-div'>
              
            </Skeleton>
            <Skeleton width="80px" height="20px" className='Posts-footer-text-time-posted'>

            </Skeleton>
            <div className="Posts-footer-comments" >
              <BiChat size={25} className="Posts-footer-comments-BiChat"/>
              <p className="Posts-footer-text" id="Posts-footer-text-amount-of-comments"></p>
          </div>
        </div>
        </div>
          
    </article>
        )
      })}
    </div>
  )
}

export default IsLoading
