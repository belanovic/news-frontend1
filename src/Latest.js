import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import {getLatestNews} from './getNews';
import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/latest.css'
import './style/typography/latest.css'

export default function Latest() {

    const {frontpageNews, activeTab, setActiveTab} = useContext(context);
    const [latestNews, setLatestNews] = useState('');
    const [popularNews, setPopularNews] = useState('');
    const [trendingNews, setTrendingNews] = useState('');
    
    useEffect(() => {
        async function f() {
            const articles = await getLatestNews(4, 'all');
            if(articles == null) return;
            setLatestNews(articles);
            setPopularNews(frontpageNews.slice(1, 5));
            setTrendingNews([frontpageNews[5], articles[2], frontpageNews[4], articles[1]]);
        }
        f();
    }, [frontpageNews])

    return (
        <div className='latest'>
            <div className='latest-tabs'>
                <div 
                    className = {`recent ${activeTab == 'recent'? 'active' : ''}`}
                    onClick = {()=> setActiveTab('recent')}>Najnovije
                </div>
                <div 
                    className = {`popular ${activeTab == 'popular'? 'active' : ''}`}
                    onClick = {()=> setActiveTab('popular')}>Najčitanije
                </div>
                <div 
                    className = {`trending ${activeTab == 'trending'? 'active' : ''}`}
                    onClick = {()=> setActiveTab('trending')}>Trending
                </div>
            </div>
            {activeTab == 'recent' && <div className='latest-news'>
            {latestNews && latestNews.map((article, i) => {
                return  <Card 
                        key = {i}
                        path = {`/articleRecent${i}/${article._id}`}
                        classSuffix={'latest'}
                        title={article.title}
                        videoURL={article.videoURL}
                        datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                        src={article.imgURL2}
                        category = {article.category}
                        filter = {article.imgFilter2} 
                        thumbShape = 'square'
                        line = 'top'
                        readMore = {false}
                    />                
            })}
            </div>}
            {activeTab == 'popular' && <div className='latest-news'>
            {popularNews && popularNews.map((article, i) => {
                return  <Card 
                        key = {i}
                        path = {`/articlePopular${i}/${article._id}`}
                        classSuffix={'latest'}
                        src={article.imgURL2}
                        videoURL={article.videoURL}
                        filter = {article.imgFilter2} 
                        title={article.title}
                        category = {article.category}
                        datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                        thumbShape = 'square'
                        line = 'top'
                        readMore = {false}
                    />                
            })}
            </div>}
            {activeTab == 'trending' && <div className='latest-news'>
            {trendingNews && trendingNews.map((article, i) => {

                return  <Card 
                        key = {i}
                        path = {`/articleTrending${i}/${article._id}`}
                        classSuffix={'latest'}
                        title={article.title}
                        videoURL={article.videoURL}
                        datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                        src={article.imgURL2}
                        category = {article.category}
                        filter = {article.imgFilter2} 
                        thumbShape = 'square'
                        line = 'top'
                        readMore = {false}
                    />                
            })}
            </div>}
        </div>
    )
}