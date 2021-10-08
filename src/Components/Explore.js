import React from 'react'
import Styles from './Explore.module.css'

import { ExplorePost1, ExplorePost2 } from './DisplayPosts'

import Image1 from './pictures/exp_post_1.jpg'
import Image2 from './pictures/exp_post_2.jpg'
import Image3 from './pictures/exp_post_3.jpg'
import Image4 from './pictures/exp_post_5.jpg'

import Video1 from './pictures/exp_video_1.mp4'
import Video2 from './pictures/exp_video_2.mp4'

export default function Explore() {
    return (
        <div className={Styles.exploreMaster}>
            <ExplorePost1
                image_1={Image1}
                image_2={Image2}
                Video1={Video1}
            />
            <ExplorePost2
                image_1={Image3}
                image_2={Image4}
                Video2={Video2}
            />
        </div>
    )
}
