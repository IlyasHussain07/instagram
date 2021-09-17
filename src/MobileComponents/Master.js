import React from 'react'
import { DisplayPosts, VideoPost } from './DisplayPosts'
import Styles from './Master.module.css'

import PrdImage from './pictures/insta-rvcj.jpg'
import Post1 from './pictures/insta-post-1.jpg'
import Post2 from './pictures/insta-post-3.jpg'
import Post3 from './pictures/insta-video-post-jhon-wick-3.jpg'
import Video1 from './pictures/jhon-wick-3.mp4'


import myFile from './info.json'

export default function Master() {

    return (
        <div className={Styles.master}>
            <VideoPost
                channelimage={PrdImage}
                channelName={myFile.post2.channelName}
                poster={Post3}
                video={Video1}
                likes={myFile.post2.likes}
                description={myFile.post2.description}
                comments={myFile.post2.commentCount}
            />
            <DisplayPosts
                channelimage={PrdImage}
                channelName={myFile.post1.channelName}
                postImage={Post1}
                likes={myFile.post1.likes}
                description={myFile.post1.description}
                comments={myFile.post1.commentCount}
            />
            <DisplayPosts
                channelimage={PrdImage}
                channelName={myFile.post2.channelName}
                postImage={Post2}
                likes={myFile.post2.likes}
                description={myFile.post2.description}
                comments={myFile.post2.commentCount}
            />
        </div>
    )
}
