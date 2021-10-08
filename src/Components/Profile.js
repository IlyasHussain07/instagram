import React from 'react'
import Styles from './Profile.module.css'

import Image1 from './pictures/user_1.jpg'
import Image2 from './pictures/mypost_1.jpg'
import Image3 from './pictures/mypost_2.jpg'
import Image4 from './pictures/mypost_3.jpg'
import Image5 from './pictures/mypost_4.jpg'
import Image6 from './pictures/mypost_5.jpg'
import Image7 from './pictures/mypost_6.jpg'

import SettingIcon from '@material-ui/icons/Settings'
import PostsIcon from '@material-ui/icons/GridOn'
import ReelsIcon from '@material-ui/icons/MovieFilterOutlined'
import IgtvIcon from '@material-ui/icons/LiveTv'
import SaveIcon from '@material-ui/icons/BookmarkBorderOutlined'
import TaggedIcon from '@material-ui/icons/AssignmentIndSharp'

export default function Profile() {

    return (
        <div>
            <div className={Styles.profileContainer}>
                <img src={Image1} alt="userImage" />
                <div>
                    <div className={Styles.profileDetails}>
                        <h2>Ilyas_z07</h2>
                        <button>Edit Profile</button>
                        <SettingIcon />
                    </div>
                    <div className={Styles.profileDetails}>
                        <p><span>6</span> Posts</p>
                        <p><span>110</span> followers</p>
                        <p><span>42</span> following</p>
                    </div>
                    <p className={Styles.description}>Ilyas</p>
                </div>
            </div>
            <div className={Styles.profilePosts}>
                <div className={Styles.profileNav}>
                    <ul>
                        <li><PostsIcon className={Styles.navIcons} /><span>POSTS</span></li>
                        <li><ReelsIcon className={Styles.navIcons} /><span>REELS</span></li>
                        <li><IgtvIcon className={Styles.navIcons} /><span>IGTV</span></li>
                        <li><SaveIcon className={Styles.navIcons} /><span>SAVED</span></li>
                        <li><TaggedIcon className={Styles.navIcons} /><span>TAGGED</span></li>
                    </ul>
                </div>
                <div className={Styles.posts}>
                    <div className={Styles.imageContainer}>
                        <img src={Image2} alt="img1" />
                    </div>
                    <div className={Styles.imageContainer}>
                        <img src={Image3} alt="img2" />
                    </div>
                    <div className={Styles.imageContainer}>
                        <img src={Image4} alt="img3" />
                    </div>
                </div>
                <div className={Styles.posts}>
                    <div className={Styles.imageContainer}>
                        <img src={Image5} alt="img4" />
                    </div>
                    <div className={Styles.imageContainer}>
                        <img src={Image6} alt="img5" />
                    </div>
                    <div className={Styles.imageContainer}>
                        <img src={Image7} alt="img6" />
                    </div>
                </div>
            </div>
        </div>
    )
}
