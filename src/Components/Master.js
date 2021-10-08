import React from 'react'
import { DisplayPosts, VideoPost } from './DisplayPosts'
import Styles from './Master.module.css'
import User1 from './pictures/user_1.jpg'
import User2 from './pictures/follow_akhil.jpg'
import User3 from './pictures/follow_aksahy.jpg'
import User4 from './pictures/follow_charlee.jpg'
import { _layer1, _layer2, _layer3, _stories } from './Details'


export default function Master() {

    return (
        <div className={Styles.masterPage}>
            <div className={Styles.stories}>
                {
                    _stories.map((item) => {
                        return <div className={Styles.storyContainer} key={item._id}>
                            <img src={item.Image} alt="storyImage" />
                            <span>{item.name}</span>
                        </div>
                    })
                }
            </div>
            <div className={Styles.mainPage}>
                {
                    _layer1.map((item) => {
                        return <DisplayPosts
                            key={item._id}
                            channelimage={item.channelimage}
                            channelName={item.channelName}
                            postImage={item.postImage}
                            likes={item.likes}
                            comments={item.comments}
                            date={item.date}
                        />
                    })
                }
                {
                    _layer2.map((item) => {
                        return <VideoPost
                            key={item._id}
                            channelimage={item.channelimage}
                            channelName={item.channelName}
                            poster={item.poster}
                            video={item.video}
                            likes={item.likes}
                            comments={item.comments}
                            date={item.date}
                        />
                    })
                }
                {
                    _layer3.map((item) => {
                        return <DisplayPosts
                            key={item._id}
                            channelimage={item.channelimage}
                            channelName={item.channelName}
                            postImage={item.postImage}
                            likes={item.likes}
                            comments={item.comments}
                            date={item.date}
                        />
                    })
                }
            </div>
            <div className={Styles.followRequest}>
                <div className={Styles.myProfile}>
                    <div className={Styles.profile}>
                        <img src={User1} alt="image1" />
                        <div className={Styles.names}>
                            <p>ilyas_z07</p>
                            <span>ilyas</span>
                        </div>
                    </div>
                    <div className={Styles.switch}>
                        <p>Switch</p>
                    </div>
                </div>
                <div className={Styles.myProfile}>
                    <p>Suggestions For You</p>
                    <p>See All</p>
                </div>
                <div className={Styles.myProfile}>
                    <div className={Styles.profile}>
                        <img src={User2} alt="image1" />
                        <div className={Styles.names}>
                            <p>akhilkumar291</p>
                            <span>AKHIL</span>
                        </div>
                    </div>
                    <div className={Styles.switch}>
                        <p>follow</p>
                    </div>
                </div>
                <div className={Styles.myProfile}>
                    <div className={Styles.profile}>
                        <img src={User3} alt="image1" />
                        <div className={Styles.names}>
                            <p>akshay_kanemoni_</p>
                            <span>🇦 🇰 🇸 🇭 🇦 🇾</span>
                        </div>
                    </div>
                    <div className={Styles.switch}>
                        <p>follow</p>
                    </div>
                </div>
                <div className={Styles.myProfile}>
                    <div className={Styles.profile}>
                        <img src={User4} alt="image1" />
                        <div className={Styles.names}>
                            <p>charlee_sathu</p>
                            <span>CHARLEEE</span>
                        </div>
                    </div>
                    <div className={Styles.switch}>
                        <p>follow</p>
                    </div>
                </div>
            </div>
            <div className={Styles.footer}>
                <p>About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top Accounts . Hashtags . Language</p><br />
                <p>©2021 INSTAGRAM FROM FACEBOOK</p>
            </div>
        </div>
    )
}
