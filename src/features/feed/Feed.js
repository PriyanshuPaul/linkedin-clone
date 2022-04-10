import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./input-option/InputOption";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import SubjectIcon from "@material-ui/icons/Subject";
import PostOption from "./post-option/PostOption";
function Feed() {
    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder="Start a Post" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <InputOption Icon={InsertPhotoIcon} title="Photo" color="#66b3ff" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#00b300" />
                    <InputOption Icon={EventIcon} title="Event" color="#ffb84d" />
                    <InputOption
                        Icon={SubjectIcon}
                        title="Write article"
                        color="#ff99bb"
                    />
                </div>
            </div>
            <PostOption
                name="Priyanshu Paul"
                description="This is a test"
                message="Hello World!"
            />
            <PostOption
                name="Lorem Ipsum"
                description="Text Generator"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                 publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
        </div>
    );
}
export default Feed;
