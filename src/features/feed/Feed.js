import React from "react"
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./input-option/InputOption";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import SubjectIcon from '@material-ui/icons/Subject';
function Feed() {
  return (
    <div className="feed">
        <div className="feed-input-container">
            <div className="feed-input">
                <CreateIcon/>
                <form>
                    <input type="text" placeholder="Start a Post" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed-input-options">
                <InputOption Icon={InsertPhotoIcon} title="Photo" color="#66b3ff"/>
                <InputOption Icon={YouTubeIcon} title="Video" color="#00b300"/>
                <InputOption Icon={EventIcon} title="Event" color="#ffb84d"/>
                <InputOption Icon={SubjectIcon} title="Write article" color="#ff99bb"/>
            </div>  
        </div>     
    </div>
  )
}
export default Feed