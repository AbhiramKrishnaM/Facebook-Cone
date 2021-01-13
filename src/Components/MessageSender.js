import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import '../Css/MessageSender.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('');
    
    const handleSubmit = e => {
        // to stop refreshing when user clicks  
        e.preventDefault();

        // database functionality

        setInput('');
        setImageUrl('');
    }
    return (
        <div className ="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} className="messageSender__input" placeholder={`what's on your mind ?`}></input>
                    <input value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} placeholder="image URL (Optional)"></input>
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                   <VideoCallIcon  style={{ color:'red'}}/>
                   <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
