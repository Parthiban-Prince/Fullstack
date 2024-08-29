import React from 'react'
import styles from '../css/firstpage.module.css'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function Firstpage() {
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.li} type="none">
                    <li><Link to="./Dashboard" extact component={Dashboard}>Home</Link></li>
                    <li>Movies</li>
                    <li>TV series</li>
                    <li>Most Popular</li>
                    <li>Top Airing</li>
                </ul>
            </div>
            <div className={styles.contianer2}>
                <h1 className={styles.heading}>L!anime</h1>
                <form>
                    <input className={styles.search} type='search' placeholder='Search' aria-label='Search' />
                    <button className={styles.searchbutton}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    </button>
                </form>
                <button className={styles.watchbutton}>Watch anime</button>

            </div>
            <div className={styles.contianer3}>
                <h1>L!Anime.to - The best site to watch anime online for Free</h1>
                <p>Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.

                    Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so we've decided to build L!Anime.to to be one of the best free anime streaming site for all anime fans on the world.</p>
                <h1>1/ What is L!Anime.to?</h1>
                <p>Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to make sure all are clean, If you find any ads that is suspicious, please forward us the info and we will remove it.</p>
                <h1>3/ So what make L!Anime.to the best site to watch anime free online?</h1>
                <p>Before building L!Anime.to, we've checked many other free anime sites, and learnt from them. We only keep the good things and remove all the bad things from all the competitors, to put it in our L!Anime website. Let's see how we're so confident about being the best site for anime streaming:</p>
                <ul>
                    <li>Safety: We try our best to not having harmful ads on L!Anime.</li>
                    <li>Content library: Our main focus is anime. You can find here popular, classic, as well as current titles from all genres such as action, drama, kids, fantasy, horror, mystery, police, romance, school, comedy, music, game and many more. All these titles come with English subtitles or are dubbed in many languages.</li>
                    <li>Quality/Resolution: All titles are in excellent resolution, the best quality possible. L!Anime.to also has a quality setting function to make sure our users can enjoy streaming no matter how fast your Internet speed is. You can stream the anime at 360p if your Internet is being ridiculous, Or if it is good, you can go with 720p or even 1080p anime.</li>
                    <li>Streaming experience: Compared to other anime streaming sites, the loading speed at L!Anime.to is faster. Downloading is just as easy as streaming, you won't have any problem saving the videos to watch offline later.</li>
                    <li>Updates: We updates new titles as well as fulfill the requests on a daily basis so be warned, you will never run out of what to watch on L!Anime.</li>
                    <li>User interface: Our UI and UX makes it easy for anyone, no matter how old you are, how long have you been on the Internet. Literally, you can figure out how to navigate our site after a quick look. If you want to watch a specific title, search for it via the search box. If you want to look for suggestions, you can use the site's categories or simply scroll down for new releases.</li>
                    <li>Device compatibility: L!Anime works alright on both your mobile and desktop. However, we'd recommend you use your desktop for a smoother streaming experience.</li>
                    <li>Customer care: We are in active mode 24/7. You can always contact us for any help, query, or business-related inquiry. On our previous projects, we were known for our great customer service as we were quick to fix broken links or upload requested content.</li>
                </ul>
                <p>So if you're looking for a trustworthy and safe site for your Anime streaming, let's give L!Anime.to a try. And if you like us, please help us to spread the words and do not forget to bookmark our site.

                </p>
                <p>Thank you!</p>
            </div>
            <footer>
                <center>
                    <p>© L!Anime.to. All rights reserved.</p>
                </center>

            </footer>
        </>
    )
}

export default Firstpage
