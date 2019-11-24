import React from 'react'
import './Post.css'

const Post = (props) => {
  return (
    <div className='tile tile-post' onClick={props.click}>
      <h1>{props.postName}</h1>
      <h2>{props.postId} </h2>
      <p>{props.postContent}</p>
    </div>
  )
}

export default Post
