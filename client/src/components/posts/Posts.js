import React from 'react'
import "./Posts.css"
import { PostsData } from "../../Data/PostsData.js"
import Post from "../post/Post.js"

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) =>{
        return <Post data={post} key={id} id={id}/>
    })}
    </div>
  )
}

export default Posts