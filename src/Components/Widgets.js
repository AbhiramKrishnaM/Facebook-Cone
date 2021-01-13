import React from 'react'
import '../Css/Widgets.css';
function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
            title="hello"
            src="https://www.facebook.com/plugins/post.php?
            href=https%3A%2F%2Fwww.facebook.com%2FSiliconHBO%2Fposts%2F1654198538060839&width=340&
            how_text=true&height=1500&appId" 
            width="340" 
            height="100%" 
            style={{ border:"none", overflow:"hidden"}}
            scrolling="no" 
            frameborder="0"
            allowfullscreen="true" 
            allow=" encrypted-media;">
            </iframe>
        </div>
    )
}

export default Widgets
