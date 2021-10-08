import React, { useState } from 'react'
import Styles from './DisplayPosts.module.css'

import SendIcon from '@material-ui/icons/SendOutlined'
import HeartIcon from '@material-ui/icons/Favorite'
import CommentICon from '@material-ui/icons/ChatBubbleOutline'
import SavedIcon from '@material-ui/icons/TurnedInNot'
import MoreIcon from '@material-ui/icons/MoreHoriz'

import Heart from './pictures/Heart_2.png'


export function DisplayPosts(props) {

    const [isLike, setIsLike] = useState(false);

    const [isHeart, setIsHeart] = useState(false);

    return (
        <div className={Styles.disp__Post}>
            <div className={Styles.post__header}>
                <div className={Styles.sec__1}>
                    <img src={props.channelimage} alt="image1" />
                    <span>{props.channelName}</span>
                </div>
                <span> <MoreIcon style={{ cursor: "pointer" }} /> </span>
            </div>
            <div className={Styles.post__body}>
                <img src={props.postImage} alt="image2" onDoubleClick={() => {
                    setIsLike(true)
                    setIsHeart(true)
                    setTimeout(() => {
                        setIsHeart(false)
                    }, 1000)
                }
                } />
                <div className={isHeart ? Styles.heartContainerOn : Styles.heartContainerOff}>
                    <img src={Heart} alt="heartImage" />
                </div>
            </div>
            <div className={Styles.openion__Section}>
                <div className={Styles.options}>
                    <HeartIcon className={isLike ? Styles.HeartIconOn : Styles.HeartIconOff} onClick={() => setIsLike(false)} />
                    <CommentICon className={Styles.postIcon} />
                    <SendIcon className={`${Styles.postIcon} ${Styles.rotate}`} />
                </div>
                <div className={Styles.Saved}>
                    <SavedIcon className={Styles.postIcon} />
                </div>
            </div>
            <div className={Styles.Comments}>
                <p>{isLike ? props.likes + 1 : props.likes} likes</p>
                <p>{props.channelName}  {props.desciption}</p>
                <p>View all {props.comments} Comments</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}


export function VideoPost(props) {

    const [isLike, setIsLike] = useState(false);

    const [isHeart, setIsHeart] = useState(false);

    return (
        <div className={Styles.disp__Post}>
            <div className={Styles.post__header}>
                <div className={Styles.sec__1}>
                    <img src={props.channelimage} alt="image3" />
                    <span>{props.channelName}</span>
                </div>
                <span> <MoreIcon style={{ cursor: "pointer" }} /> </span>
            </div>
            <div className={Styles.post__body}>
                <video poster={props.poster}
                    controls
                    onDoubleClick={() => {
                        setIsLike(true)
                        setIsHeart(true)
                        setTimeout(() => {
                            setIsHeart(false)
                        }, 1000)
                    }}
                >
                    <source src={props.video}></source>
                </video>
                <div className={isHeart ? Styles.heartContainerOn : Styles.heartContainerOff}>
                    <img src={Heart} alt="heartImage" />
                </div>
            </div>
            <div className={Styles.openion__Section}>
                <div className={Styles.options}>
                    <HeartIcon className={isLike ? Styles.HeartIconOn : Styles.HeartIconOff} onClick={() => setIsLike(false)} />
                    <CommentICon className={Styles.postIcon} />
                    <SendIcon className={`${Styles.postIcon} ${Styles.rotate}`} />
                </div>
                <div className={Styles.Saved}>
                    <SavedIcon className={Styles.postIcon} />
                </div>
            </div>
            <div className={Styles.Comments}>
                <p>{isLike ? props.likes + 1 : props.likes} likes</p>
                <p>{props.channelName}  {props.desciption}</p>
                <p>View all {props.comments} Comments</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}




export function ExplorePost1(props) {
    return (
        <div className={Styles.explore}>
            <div className={Styles.expEct_1}>
                <img src={props.image_1} alt="img1" />
                <img src={props.image_2} alt="img2" />
            </div>
            <div className={Styles.expEct_2}>
                <video autoPlay muted loop>
                    <source src={props.Video1}>
                    </source>
                </video>
            </div>
        </div>
    )
}
export function ExplorePost2(props) {
    return (
        <div className={Styles.explore2}>
            <div className={Styles.expEct_2}>
                <video autoPlay muted loop>
                    <source src={props.Video2}>
                    </source>
                </video>
            </div>
            <div className={Styles.expEct_1}>
                <img src={props.image_1} alt="img1" />
                <img src={props.image_2} alt="img2" />
            </div>
        </div>
    )
}