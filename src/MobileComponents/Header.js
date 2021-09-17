import React from 'react'
import Styles from './Header.module.css'

import InstaImage from './pictures/insta.png'
import AppStore from './pictures/appstore.png'
import GoogleStore from './pictures/googlestore.png'
import LoginImage from './pictures/login_image.jpg'
import MyImage from './pictures/insta-ily.jpg'

import FacebookIcon from '@material-ui/icons/Facebook'
import HomeIcon from '@material-ui/icons/Home'
import SendIcon from '@material-ui/icons/SendOutlined'
import HeartIcon from '@material-ui/icons/FavoriteBorder'

import SearchICon from '@material-ui/icons/Search'
import ReelIcon from '@material-ui/icons/Theaters'
import AddIcon from '@material-ui/icons/LocalHospitalOutlined'

export default function Header() {
    return (
        <div>
            <div className={Styles.header__login_Off}>
                <div className={Styles.Login__Image}>
                    <img src={LoginImage} alt="image1" />
                </div>
                <div className={Styles.header__login__page}>
                    <div className={Styles.instaImage}>
                        <img src={InstaImage} alt="image2" />
                    </div>
                    <div className={Styles.textBox}>
                        <input type={'text'} placeholder={"Phone number, username, or email"} />
                        <input type={'password'} placeholder={"Password"} />
                        <button>Log In</button>
                    </div>
                    <div className={Styles.or}>
                        <span className={Styles.lines}></span>
                        <span> OR </span>
                        <span className={Styles.lines}></span>
                    </div>
                    <div className={Styles.facebook}>
                        <span className={Styles.fb}><FacebookIcon />Log in with Facebook</span><br></br>
                        <p className={Styles.forget}>Forgot Password?</p>
                    </div>
                    <p className={Styles.signIn}>Don't have an account? <a href="/signup">Sign up</a></p>
                    <div className={Styles.stores}>
                        <span>Get the app.</span>
                        <div className={Styles.storeImages}>
                            <img src={AppStore} alt="image3" />
                            <img src={GoogleStore} alt="image4" />
                        </div>
                    </div>
                    <div className={Styles.footer}>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Help</li>
                            <li>API</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                        <ul>
                            <li>Top</li>
                            <li>Accounts</li>
                            <li>Hashtags</li>
                            <li>Locations</li>
                            <li>Live</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={Styles.header}>
                <div className={Styles.header__image}>
                    <img src={InstaImage} alt="image5" />
                </div>
                <div className={Styles.messages}>
                    <AddIcon className={Styles.header__Icons} />
                    <SendIcon className={`${Styles.header__Icons} ${Styles.rotate}`} />
                </div>
            </div>

            <div className={Styles.header__bottom}>
                <HomeIcon className={Styles.header__btm__Icons} />
                <SearchICon className={Styles.header__btm__Icons} />
                <ReelIcon className={Styles.header__btm__reel} />
                <HeartIcon className={Styles.header__btm__Icons} />
                <div className={Styles.header__btm__image}>
                    <img src={MyImage} alt="image4" />
                </div>
            </div>
        </div>
    )
}
