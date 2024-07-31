import React, { useState, useContext } from 'react';
import { context } from './newsContext.js';
import './style/layout/social.css';
import './style/typography/social.css';


export default function Social() {

    const { colorSocial, backgroundSocial} = useContext(context);

    return  <div className='social' style={{background: backgroundSocial}}>
                <div className='social-label' style={{color: colorSocial}}>Pratite nas</div>
                <a href = 'https://x.com/?lang=sr' target = '_blanc' className='social-item'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1z5k36UL1WTHvgpBueCJfjrnLYh5uh6B7ixEpwb7hR_eXA0O6W_zDeCDdBWXnCRUTVUQ&usqp=CAU'></img></a>
                <a href = 'https://sr-rs.facebook.com/' target = '_blanc' className='social-item'><img src='https://www.thesun.co.uk/wp-content/uploads/2023/04/VP-TOPIC-BANNER-FACEBOOK-750x352-1.jpg?strip=all&w=750&h=352&crop=1'></img></a>
                <a href = 'https://www.instagram.com/' target = '_blanc' className='social-item'><img src='https://m-cdn.phonearena.com/images/article/104356-wide-two_1200/Instagram-update-makes-it-easier-to-upload-photos-and-videos-to-Stories.jpg'></img></a>
                <a href = 'https://www.youtube.com/' target = '_blanc' className='social-item'><img src='https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?w=999'></img></a>
                <a href = 'https://www.tiktok.com/' target = '_blanc' className='social-item'><img src='https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/500_x_300/s3/publication/GettyImages-1438609724.jpg?VersionId=Tym9.Xlc6.2iyBEULfWZE_DhkqWl13wZ&h=a141e9ea&itok=UKfJqgZD'></img></a>
                <a href = 'https://rs.linkedin.com/' target = '_blanc' className='social-item'><img src='https://conservation-career-stg.s3.amazonaws.com/wp-content/uploads/2023/10/21004309/LinkedIn.jpg'></img></a>
            </div>
}