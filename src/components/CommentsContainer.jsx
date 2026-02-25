import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'
import { MOCK_DATA } from '../utils/mockData'

const CommentsContainer = () => {
  return (
    <div className="m-5 p-5">
      <h1 className="text-2xl font-bold mb-2">Comments</h1>
      <CommentsList comments = { MOCK_DATA} />
    </div>
  )
}

export default CommentsContainer