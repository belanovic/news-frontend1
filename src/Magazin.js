import React, {useState, useEffect, useContext} from 'react';
import { getLatestNews } from './getNews.js';
import {context} from './newsContext.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay, EffectCube, EffectFade, EffectCoverflow} from 'swiper/modules';
import Card from './Card.js';
import { Link } from 'react-router-dom';
import range from './sectionsRange.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/magazin.css';
import './style/typography/magazin.css';
import 'swiper/css/bundle';

export default function Magazin({onTop}) {

    const {frontpageNews} = useContext(context);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [latestMagazinNews, setLatestMagazinNews] = useState('');

    useEffect( () => {
        async function f() {
            const articles = await getLatestNews(6, 'entertainment');
            if(articles == null) return;
            setLatestMagazinNews(articles);
        }
        f()
    }, [])

    return (
        <div className={`magazin ${onTop? 'onTop' : ''}`}>
            <div className= 'magazin-header'>
                {/* <div className='magazin-title'>Magazin</div> */}
                <Link to = '/entertainment/entertainment'>
                    <img src = 'https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Flabel-magazin.jpg?alt=media&token=5a87ef1b-1bca-4aff-ae5c-17b09f3e69be'></img>
                </Link>
            </div>
            <div className='magazin-up'>
                    <Card  
                        key = {range.magazin.start - 1}
                        path = {`/article/${frontpageNews[range.magazin.start - 1]._id}`}
                        classSuffix = 'magazinBig'
                        id = {frontpageNews[range.magazin.start - 1]._id}
                        src = {frontpageNews[range.magazin.start - 1].imgURL}
                        videoURL = {frontpageNews[range.magazin.start - 1].videoURL}
                        category = {frontpageNews[range.magazin.start - 1].category}
                        filter = {frontpageNews[range.magazin.start - 1].imgFilter}
                        title = {frontpageNews[range.magazin.start - 1].title}
                        supertitle = {frontpageNews[range.magazin.start - 1].supertitle}
                        subtitle = {frontpageNews[range.magazin.start - 1].subtitle}
                        thumbShape = 'wide'
                        readMore={true}
                        datePublished = {dateFormat(frontpageNews[range.magazin.start - 1].datePublished, 'month', 'dayMonth','comma', 'clock')}
                        dateUpdated = {dateFormat(frontpageNews[range.magazin.start - 1].dateUpdated,'clock')}
                        hasDateArrow={true}
                    />
            </div>
            <div className='magazin-down'>
            <Swiper
                    modules={[Navigation, Autoplay,EffectCube, EffectFade, EffectCoverflow]}
                    id="main"
                    effect="coverflow"
                    materialEffect = {{
                        slideSplitRatio: 0.65,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={'5'}
                    speed={1500}
                    pagination= {{clickable: true}}
                    loop={true}
                    tag='section'
                    /* navigation */
                    grabCursor={true}
                    wrapperTag='div' 
                    thumbs={{ swiper: thumbsSwiper }}
                >
                {frontpageNews.map((article, i) => {
                    if((i < (range.magazin.start)) || (i > range.magazin.end - 1)) return
                    
                    return <SwiperSlide tag='li' key = {i}>
                        <Card  
                            key = {i}
                            path = {`/article/${article._id}`}
                            classSuffix = 'magazin'
                            id = {article._id}
                            src = {article.imgURL}
                            videoURL = {article.videoURL}
                            category = {article.category}
                            
                            filter = {article.imgFilter}
                            title = {article.title}
                            supertitle = {article.supertitle}
                            thumbShape = 'wide'
                            readMore={false}
                        />
                    </SwiperSlide> 
                })}
            </Swiper>
            </div>
            <div className='magazin-down-mobile'>
            <Swiper
                    modules={[Navigation, Autoplay,EffectCube, EffectFade, EffectCoverflow]}
                    id="main"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={'2'}
                    speed={1500}
                    pagination= {{clickable: true}}
                    loop={true}
                    tag='section'
                    /* navigation */
                    grabCursor={true}
                    wrapperTag='div' 
                    thumbs={{ swiper: thumbsSwiper }}
                >
                {frontpageNews.map((article, i) => {
                    if((i < 3) || (i > 14)) return
                    return <SwiperSlide tag='li' key = {i}>
                        <Card  
                            key = {i}
                            path = {`/article/${article._id}`}
                            classSuffix = 'magazin'
                            id = {article._id}
                            src = {article.imgURL}
                            videoURL = {article.videoURL}
                            category = {article.category}
                            
                            filter = {article.imgFilter}
                            title = {article.title}
                            supertitle = {article.supertitle}
                            thumbShape = 'wide'
                            readMore={false}
                        />
                    </SwiperSlide> 
                })}
            </Swiper>
            </div>
            <Line type = {onTop? 'magazinOnTop' : 'magazin'}/>
            <div className='magazin-latest'>
                <div className='magazin-latest-title'>Najnovije iz Magazina</div>
                <div className='magazin-latest-articles'>
                    {latestMagazinNews && latestMagazinNews.map((article, i) => {
                            
                            return <Card  
                                    
                                    key = {i}
                                    path = {`/article/${article._id}`}
                                    classSuffix={'magazinLatest'}
                                    title={article.title}
                                    videoURL={article.videoURL}
                                    datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                                    
                                    
                                    filter = {article.imgFilter2} 
                                    thumbShape = 'square'
                                    readMore = {false}
                                />
                        })}
                </div>
               
                </div>
            <Line type = 'magazin' />
            <div className='magazin-themas'>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fmuzika.jpg?alt=media&token=61f1c9b0-752e-4482-9f26-bbfe08911ae0)'}}><Link to = '/entertainmentTagged/entertainment/muzika'><span>#muzika</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ffilm.jpg?alt=media&token=be861a46-abc7-4f44-a2ee-208325e6934b)'}}><Link to = '/entertainmentTagged/entertainment/film'><span>#film</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fpoznati.jpg?alt=media&token=ab2a1bd7-4d79-431c-ab18-88d1ce25a4ed)'}}><Link to = '/entertainmentTagged/entertainment/poznati'><span>#poznati</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fzdravlje.jpg?alt=media&token=3b9c975b-b5fb-44c9-ab52-1e35c4029738)'}}><Link to = '/entertainmentTagged/entertainment/zdravlje'><span>#zdravlje</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fnauka.jpg?alt=media&token=635394b4-f143-458e-8726-344a22d3d444)'}}><Link to = '/entertainmentTagged/entertainment/nauka'><span>#nauka</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fpriroda.jpg?alt=media&token=4db9fc28-ed55-43ab-84ba-be5d60a6fe38)'}}><Link to = '/entertainmentTagged/entertainment/priroda'><span>#priroda</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fturizam.jpg?alt=media&token=fa40d444-f0e1-4045-bc7e-cb32b8541ab9)'}}><Link to = '/entertainmentTagged/entertainment/turizam'><span>#turizam</span></Link></div>
            </div>
          
        </div>
    )
}