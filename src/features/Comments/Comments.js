import React from 'react'
import moment from 'moment'
import { selectIsLoading } from '../../app/Store/commentsSlice'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

const Comments = (props) => {

    const isLoading = useSelector(selectIsLoading)
  return (
    <div className='Comments-main-div' key={props.props.index}>
        {!isLoading && <div className='Comment'>
            <div className='Comments-top-part'>
                <p className='Comments-general-test' id='Comments-Authors'>{props.props.author}</p>
                <p className='Comments-general-test'>{moment.unix(props.props.created_utc).fromNow()}</p>
            </div>
            <div className='Comments-body'>
                <p className='Comments-general-test'>{props.props.body}</p>
            </div>
        </div>}
        {isLoading && <Skeleton count={4} height={20} className="Comments-loading"/>}
    </div>
  )
}

export default Comments
