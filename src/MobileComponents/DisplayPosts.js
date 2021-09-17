import React, { useState } from 'react'
import Styles from './DisplayPosts.module.css'

import SendIcon from '@material-ui/icons/SendOutlined'
import HeartIcon from '@material-ui/icons/FavoriteBorder'
import CommentICon from '@material-ui/icons/ChatBubbleOutline'
import SavedIcon from '@material-ui/icons/TurnedInNot'

export function DisplayPosts(props) {
    return (
        <div className={Styles.disp__Post}>
            <div className={Styles.post__header}>
                <div className={Styles.sec__1}>
                    <img src={props.channelimage} />
                    <span>{props.channelName}</span>
                </div>
                <span> @@@ </span>
            </div>
            <div className={Styles.post__body}>
                <img src={props.postImage} />
            </div>
            <div className={Styles.openion__Section}>
                <div className={Styles.options}>
                    <HeartIcon className={Styles.postIcon} />
                    <CommentICon className={Styles.postIcon} />
                    <SendIcon className={`${Styles.postIcon} ${Styles.rotate}`} />
                </div>
                <div className={Styles.Saved}>
                    <SavedIcon className={Styles.postIcon} />
                </div>
            </div>
            <div className={Styles.Comments}>
                <p>{props.likes}</p>
                <p>{props.channelName}  {props.desciption}</p>
                <p>View all {props.comments}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}


export function VideoPost(props) {



    return (
        <div className={Styles.disp__Post}>
            <div className={Styles.post__header}>
                <div className={Styles.sec__1}>
                    <img src={props.channelimage} />
                    <span>{props.channelName}</span>
                </div>
                <span> @@@ </span>
            </div>
            <div className={Styles.post__body}>
                <video poster={props.poster}
                    controls
                >
                    <source src={props.video}></source>
                </video>
            </div>
            <div className={Styles.openion__Section}>
                <div className={Styles.options}>
                    <HeartIcon className={Styles.postIcon} />
                    <CommentICon className={Styles.postIcon} />
                    <SendIcon className={`${Styles.postIcon} ${Styles.rotate}`} />
                </div>
                <div className={Styles.Saved}>
                    <SavedIcon className={Styles.postIcon} />
                </div>
            </div>
            <div className={Styles.Comments}>
                <p>{props.likes}</p>
                <p>{props.channelName}  {props.desciption}</p>
                <p>View all {props.comments}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}
