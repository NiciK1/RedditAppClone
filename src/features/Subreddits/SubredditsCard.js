import React from "react";


const SubredditsCard = (props) => {


  return (
    <div className="Subreddit" >
      <div className="Subreddit-img-div">
        <img src={props.props.icon_img} onError={(event) => event.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"} alt="" className="Subreddit-img"/>
      </div>
          <p className="Subreddit-title">{props.props.display_name}</p>
    </div>
    
  )
}

export default SubredditsCard;



