import { Avatar } from "@material-ui/core"
import React from "react"
import './PostOption.css'
function PostOption({name,description,message,photo}) {
  return (
    <div className="post">
        <div className="post-header">
            <Avatar/>
            <div className="post-info">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
        <div className="post-body">
            <p>{message}</p>
        </div>
    </div>
  )
}
export default PostOption