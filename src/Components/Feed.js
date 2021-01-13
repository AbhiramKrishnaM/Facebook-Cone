import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import '../Css/Feed.css';
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            {/* message sender */}
            <MessageSender /> 
        </div>
    )
}

export default Feed
