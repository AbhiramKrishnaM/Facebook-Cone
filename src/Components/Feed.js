import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

import '../Css/Feed.css';
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender /> 
            <Post profilePic="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg" message ="facebook !!" timestamp="this is timeStamp" username="AbhiramKrishna" image='https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg' />
            <Post profilePic="https://analyticsindiamag.com/wp-content/uploads/2018/12/image.jpg" message ="facebook !!" timestamp="this is timeStamp" username="Anumodh" image='https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg' />
            <Post profilePic="https://i0.wp.com/www.oakridge.in/wp-content/uploads/2020/02/Sample-jpg-image-500kb.jpg" message ="facebook !!" timestamp="this is timestamp" username="adith" image='https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg' />
        </div>
    )
}

export default Feed
