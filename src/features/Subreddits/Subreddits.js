import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SubredditsCard from './SubredditsCard'
import fetchSubreddits from './fetchSubreddits'
import { useEffect } from 'react'
import {selectSubreddits, test} from '../../app/Store/subRedditsSlice'

const Subreddits = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSubreddits())
  }, [dispatch])

  const subredditsToRender = useSelector(selectSubreddits)

  return (
    <aside className='Subreddits-div'>
      <h2 className='Subreddits-main-title'>Subreddits</h2>
          <SubredditsCard props={subredditsToRender}/>
    </aside>
  )
}

export default Subreddits
