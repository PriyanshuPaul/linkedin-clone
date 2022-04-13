import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./input-option/InputOption";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import SubjectIcon from "@material-ui/icons/Subject";
import PostOption from "./post-option/PostOption";
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../userSlice';

function Feed() {
    const user=useSelector(selectUser)
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        })
    },[])
    
    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photo:user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    };
    
    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Start a Post" />
                        <button type="submit" onClick={sendPost}>Send</button>
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
            {posts.map(({id,
                data:{name,description,message,photo}
            })=>(
                <PostOption
                key={id}
                name={name}
                description={description}
                message={message}
                photo={photo}
                />
            ))}
            
        </div>
    );
}
export default Feed;
