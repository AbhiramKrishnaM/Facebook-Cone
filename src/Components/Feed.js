import React, { useState, useEffect} from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from "../Firebase/Firebase";
import '../Css/Feed.css';
function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       db.collection('Posts').orderBy('timeStamp', "desc").onSnapshot(snapshot => {
           setPosts(snapshot.docs.map(doc=>({id: doc.id, data:  doc.data() })))
       })
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender /> 
            {posts.map(post => (
                <Post 
                key={post.id}
                profilePic = {post.data.ProfilePic}
                message = {post.data.Message}
                timestamp = {post.data.timeStamp}
                username = {post.data.userName}
                image = {post.data.image}
                 />
            ))}
        </div>
    )
}

export default Feed
