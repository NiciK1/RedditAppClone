import React from 'react'

const SubredditsOptions = (props) => {
  return (
    <div className='Subreddits-options-div'>
            <div className='SubReddits-data-div'>
                <img src={props.banner_img} alt=""/>
                <h3>{props.display_name}</h3>
            </div> 
    </div>
  )
}

export default SubredditsOptions
