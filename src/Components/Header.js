import React, { useState } from 'react'
import Styles from './Header.module.css'

import InstaImage from './pictures/instagramLogo.png'
import User1 from './pictures/user_1.jpg'

import HomeIcon from '@material-ui/icons/HomeOutlined'
import SendIcon from '@material-ui/icons/SendOutlined'
import HeartIcon from '@material-ui/icons/FavoriteBorder'
import ExploredIcon from '@material-ui/icons/ExploreOutlined'
import SearchICon from '@material-ui/icons/Search'
import ProfileIcon from '@material-ui/icons/AccountCircle'
import SaveIcon from '@material-ui/icons/Bookmark'
import SettingIcon from '@material-ui/icons/Settings'
import SwitchIcon from '@material-ui/icons/Restore'

import { Link } from 'react-router-dom'


export default function Header() {

    const [isDropDown, setIsDropDown] = useState(false);

    return (
        <div className={Styles.header}>
            <div className={Styles.mainHeader}>
                <div className={Styles.logo}>
                    <Link to='/'><img src={InstaImage} alt='instagram_logo' /></Link>
                </div>
                <div className={Styles.searchBar}>
                    <input type="search" placeholder="Search" />
                    <SearchICon className={Styles.SearchIcon} />
                </div>
                <div className={Styles.options}>
                    <Link to='/'><HomeIcon className={Styles.headerIcons} /></Link>
                    <SendIcon className={Styles.headerIcons} />
                    <Link to='/explore'><ExploredIcon className={Styles.headerIcons} /></Link>
                    <HeartIcon className={Styles.headerIcons} />
                    <div className={Styles.profileImage}>
                        <img src={User1} alt='userImage'
                            onClick={() => {
                                isDropDown ?
                                    setIsDropDown(false) :
                                    setIsDropDown(true)
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={Styles.bottomHeader}>
                <Link to='/'><HomeIcon className={Styles.headerIcons} /></Link>
                <SendIcon className={Styles.headerIcons} />
                <Link to='/explore'><ExploredIcon className={Styles.headerIcons} /></Link>
                <HeartIcon className={Styles.headerIcons} />
                <div className={Styles.profileImage}>
                    <Link to='/profile'><img src={User1} alt='userImage' /></Link>
                </div>
            </div>
            <div className={isDropDown ? Styles.dropDownOn : Styles.dropDownOff}
                onClick={() => {
                    isDropDown ?
                        setIsDropDown(false) :
                        setIsDropDown(true)
                }}
            >
                <div className={Styles.dropDownContent}>
                    <ul>
                        <Link style={{ textDecoration: "none" }} to='/profile'><li><ProfileIcon className={Styles.dropDownIcons} /><span>Profile</span></li></Link>
                        <li><SaveIcon className={Styles.dropDownIcons} /><span>Saved</span></li>
                        <li><SettingIcon className={Styles.dropDownIcons} /><span>Settings</span></li>
                        <li><SwitchIcon className={Styles.dropDownIcons} /><span>Switch Accounts</span></li>
                    </ul>
                    <p className={Styles.logout}>Logout</p>
                </div>
            </div>

        </div>
    )
}
