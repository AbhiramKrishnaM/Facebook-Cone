import React from 'react';
import Story from './Story';
import '../Css/StoryReel.css';
function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" profileSrc="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" title="Abhiram"/>
            <Story image="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" profileSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" title="Sheeja"/>
            <Story image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" profileSrc="https://www.w3schools.com/w3css/img_lights.jpg" title="Manohar"/>
            <Story image="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" profileSrc="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78" title="Beejan"/>
            <Story image="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" profileSrc="https://theinpaint.com/images/example-1-2.jpg" title="Nivedin"/>
        </div>
    )
}

export default StoryReel
