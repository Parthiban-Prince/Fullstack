import React, { useState } from 'react';
import test from '../images/test.png'
import logo from '../images/logo.png'
import testim1 from '../images/testim1.webp'
import styles from '../css/Dashboard.module.css'
import style from '../css/test.module.css'
import img1 from '../images/img1.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Data from '../data/testdata';



const Dashboard = () => {
    const Datas = Data
    const [isHovered, setIsHovered] = useState(false);
    const [checkicon, ischeckiconvisible] = useState("")
    const video = "https://d15gpg7sfwrx94.cloudfront.net/videos/payal%20latest%20vlog.mp4"
    return (
        <>
            <header className={styles.header
            }>
                <ul>
                    <div>
                        <li className={styles.Logo}><img src={logo} alt='logo' width='100px' /></li>
                        <li>Home</li>
                        <li>Tv shows</li>
                        <li>Movies</li>
                        <li>New and Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </div>
                    <div>
                        <li>
                            <button className={styles.searchbutton}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            </button>
                        </li>
                        <li>
                            Children
                        </li>
                        <li>
                            <button className={styles.searchbutton}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            </button>
                        </li>
                        <li>
                            <img src={test} alt='profile' width='50px' height='20px' />
                        </li>
                    </div>
                </ul>
            </header>
            <div>
                <video className={styles.videoc}
                    webkit-playsinline="true"
                    muted autoPlay
                    src={video}
                />
            </div>
            <div>
                <h1>US TV Shows Dubbed in Hindi</h1>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ?
                        <div className={style.card1}>
                            <div className={style.imgwrap}>
                                <img src={img1}
                                    width="100%" height="100%"
                                    onMouseLeave={() => setIsHovered(false)} />
                            </div>
                            <div className={style.contentbutton}>
                                <ul type='none'>
                                    <li><FontAwesomeIcon icon={faPlay} size="4x" /></li>
                                    <li>
                                        {checkicon ? <FontAwesomeIcon icon={faCheck} size="4x" />

                                            :
                                            <FontAwesomeIcon icon={faPlus} onClick={() => { ischeckiconvisible(true) }} size="4x" />
                                        }
                                    </li>
                                    <li><FontAwesomeIcon icon={faThumbsUp} size="4x" /></li>
                                    <li><FontAwesomeIcon icon={faAngleDown} size="4x" /></li>
                                </ul>
                            </div>
                            <div className={style.contentbutton1}>
                                <ul type="none">
                                    <li>{Datas.name}</li>
                                    <li>Runtime</li>
                                    <li>HD</li>
                                </ul>
                            </div>
                            <div className={style.contentbutton}>
                                <h3>
                                    <ul>
                                        <li>GOry</li>
                                        <li>foul language</li>
                                        <li>violence</li>
                                    </ul>
                                </h3>
                            </div>
                        </div>
                        :
                        <div className={style.card1}>
                            <div className={style.imgwrap}>
                                <img src={img1} width="100%" height="100%" />
                            </div>
                        </div>

                    }
                </div>
            </div>
            <footer>
                <ul>
                    <li>
                        Audio Description
                    </li>
                    <li>
                        Help center
                    </li>
                    <li>
                        Gift cards
                    </li>
                    <li>
                        Media center
                    </li>
                </ul>
            </footer>
        </>
    )
}
export default Dashboard;