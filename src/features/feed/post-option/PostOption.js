import { Avatar } from "@material-ui/core"
import React from "react"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

import './PostOption.css'
import InputOption from "../input-option/InputOption";
function PostOption({name,description,message,photo}) {
  return (
    <div className="post">
        <div className="post-header">
            <Avatar src="photo">{name[0]}</Avatar>
            <div className="post-info">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
        <div className="post-body">
            <p>{message}</p>
        </div>
        <div className="post-button">
          <InputOption Icon={ThumbUpAltIcon} title="Like" color="#66b3ff"/>
          <InputOption Icon={MessageIcon} title="Comment" color="#00b300"/>
          <InputOption Icon={ShareIcon} title="Share" color="#ffb84d"/>
          <InputOption Icon={SendIcon} title="Send" color="#ff99bb"/>

        </div>
    </div>
  )
}
export default PostOption