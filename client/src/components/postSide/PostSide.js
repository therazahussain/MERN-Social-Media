import React from 'react'
import "./PostSide.css";
import PostShare from "../postShare/PostShare.js"
import Posts from "../posts/Posts.js"

const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare/>
      <Posts/>
    </div>
  )
}

export default PostSide