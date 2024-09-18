import React, {useState, useEffect, useContext} from 'react';
import { getLatestNews } from './getNews.js';
import {context} from './newsContext.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay, EffectCube, EffectFade, EffectCoverflow} from 'swiper/modules';
import Card from './Card.js';
import { Link } from 'react-router-dom';
import Line from './Line';
import dateFormat from './dateFormat.js';
import range from './sectionsRange.js';
import './style/layout/sport.css';
import './style/typography/sport.css';
import 'swiper/css/bundle';

export default function Sport({onTop}) {

    const {frontpageNews} = useContext(context);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [latestSportNews, setLatestSportNews] = useState('');

    useEffect(() => {
        async function f() {
            const articles = await getLatestNews(5, 'sports');
            if(articles == null) return;
            setLatestSportNews(articles);
        }
        f();
    }, [])

    return (
        <div className={`sport ${onTop? 'onTop' : ''}`}>
            <div className='sport-header' >
                {/* <div className='sport-title'>sport</div> */}
                <Link to = '/sports/sports'>
                    <img src = 'https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fsport1.png?alt=media&token=ac31ffde-2685-4271-93ad-53fca5bbccdd'></img>
                </Link> 
                
              
            </div>
            <div className='sport-big'>
            <Card  
                        key = {range.sport.start - 1}
                        path = {`/article/${frontpageNews[range.sport.start - 1]._id}`}
                        classSuffix = 'sportBig'
                        id = {frontpageNews[range.sport.start - 1]._id}
                        src = {frontpageNews[range.sport.start - 1].imgURL}
                        videoURL = {frontpageNews[range.sport.start - 1].videoURL}
                        category = {frontpageNews[range.sport.start - 1].category}
                        filter = {frontpageNews[range.sport.start - 1].imgFilter} 
                        title = {frontpageNews[range.sport.start - 1].title}
                        supertitle = {frontpageNews[range.sport.start - 1].supertitle}
                        subtitle = {frontpageNews[range.sport.start - 1].subtitle}
                        thumbShape = 'wide'
                        readMore={true}
                        datePublished = {dateFormat(frontpageNews[range.sport.start - 1].datePublished, 'month', 'dayMonth','comma', 'clock')}
                        dateUpdated = {dateFormat(frontpageNews[range.sport.start - 1].dateUpdated,'clock')}
                        hasDateArrow={true}
                    />
            </div>
            <div className='sport-carousel'>
            <Swiper
                    modules={[Navigation,Autoplay, EffectCube, EffectFade, EffectCoverflow]}
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
                    slidesPerView={'4'}
                    speed={1500}
                    /* pagination= {{clickable: true}} */
                    loop={true}
                    tag='section'
                    /* navigation */
                    grabCursor={true}
                    wrapperTag='div' 
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {frontpageNews.map((article, i) => {
    
                        if((i < (range.sport.start)) || (i > range.sport.end - 1)) return
                        return <SwiperSlide tag='li' key = {i}>
                                <Card  
                                    key = {i}
                                    path = {`/article/${article._id}`}
                                    classSuffix = 'sportCarousel'
                                    id = {article._id}
                                    src = {article.imgURL}
                                    videoURL = {article.videoURL}
                                    filter = {article.imgFilter}
                                    category = {article.category}
                                    datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                                    title = {article.title}
                                    supertitle = {article.supertitle}
                                    thumbShape = 'wide'
                                    readMore={false}
                                />
                            </SwiperSlide>
                    })}
  
                </Swiper>
            </div>
            <div className='sport-carousel-mobile'>
            <Swiper
                    modules={[Navigation, Autoplay, EffectCube, EffectFade, EffectCoverflow]}
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
                    /* pagination= {{clickable: true}} */
                    loop={true}
                    tag='section'
                    /* navigation */
                    grabCursor={true}
                    wrapperTag='div' 
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {frontpageNews.map((article, i) => {
                        if((i < 7) || (i > 14)) return
                        return <SwiperSlide tag='li' key = {i}>
                                <Card  
                                    key = {i}
                                    path = {`/article/${article._id}`}
                                    classSuffix = 'sportCarousel'
                                    id = {article._id}
                                    src = {article.imgURL}
                                    videoURL = {article.videoURL}
                                    filter = {article.imgFilter}
                                    category = {article.category}
                                    datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                                    title = {article.title}
                                    supertitle = {article.supertitle}
                                    thumbShape = 'wide'
                                    readMore={false}
                                />
                            </SwiperSlide>
                    })}
  
                </Swiper>
            </div>
            <div className='sport-block'>
                <div className='sport-block-center'>
                    {frontpageNews.map((article, i) => {
                        if((i < (range.sport.end - 4)) || (i > range.sport.end - 1)) return
                        return <Card  
                                key = {i}
                                path = {`/article/${article._id}`}
                                classSuffix = 'sportBlock'
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
                    })}
                </div>
                <div className='sport-latest'>
                <div className='sport-latest-title'>Najnovije iz Sporta</div>
                    {latestSportNews && latestSportNews.map((article, i) => {
                        
                        return <Card  
                                
                                key = {i}
                                path = {`/article/${article._id}`}
                                classSuffix={'sportLatest'}
                                title={article.title}
                                videoURL={article.videoURL}
                                datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                                
                                
                                filter = {article.imgFilter2} 
                                thumbShape = 'square'
                                line = 'top'
                                readMore = {false}
                            />
                    })}
                </div>
            </div>
            <Line type = 'sport' />
            <div className='sport-themas'>
                <div className='thema-item'><Link to = '/sportsTagged/sports/fudbal'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ffudbal.jpg?alt=media&token=017f2011-b0e7-4987-aadf-f1e875b85f5d"></img></Link></div>
                <div className='thema-item'><Link to = '/sportsTagged/sports/košarka'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fkosarka.jpg?alt=media&token=c03a8f51-e6e3-40e2-b967-5f440c9c14e6"></img></Link></div>
                <div className='thema-item'><Link to = '/sportsTagged/sports/tenis'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftenis.jpg?alt=media&token=09b7208a-2ce9-49f7-8584-2df055778784"></img></Link></div>
                <div className='thema-item'><Link to = '/sportsTagged/sports/odbojka'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fodbojka.jpg?alt=media&token=70e2984e-9716-47c6-afea-7b8c07c559a7"></img></Link></div>
                <div className='thema-item'><Link to = '/sportsTagged/sports/vaterpolo'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fvaterpolo.jpg?alt=media&token=656e6f10-fe4d-42a6-b1ad-78daba734fb5"></img></Link></div>
                <div className='thema-item'><Link to = '/sportsTagged/sports/rukomet'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Frukomet.jpg?alt=media&token=01522eab-33e6-4495-b0cd-cf4a39b7ba71"></img></Link></div>
                <div className='thema-item'><Link to = '/sportsTagged/sports/atletika'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fatletika.jpg?alt=media&token=10e7ec53-467f-4083-bf4c-849ff3aea218"></img></Link></div>
                <div className='thema-item'><Link to = '/sportsTagged/sports/ostali'><img src = "https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fostali.jpg?alt=media&token=3bb16cae-0577-47e0-8aac-84234af4cec8"></img></Link></div>
            </div>
          
        </div>
    )
}