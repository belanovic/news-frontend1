import react, {useState, useEffect, useRef, useContext} from 'react';
import {Link} from 'react-router-dom';
import {context} from './newsContext';
import dateFormat from './dateFormat';
import Weather from './Weather';
import Ticker from 'react-ticker';
import './style/layout/news-ticker.css';
import './style/typography/news-ticker.css';

 
function NewsTicker({positioned}) {

    const {frontpageNews} = useContext(context);

    return (<div className={`container ticker-wrapper ${positioned? 'positioned' : ''}`}>
                <div
                    className='ticker-label'
                >
                    <span className='text'>Najvažnije</span>
                </div>
               {frontpageNews.length < 100 && <Ticker>
                    {({ index }) => (
                        <>
                        <div className='ticker-container'>
                            <div className='ticker-item'>
                                <div className = "tickerDate">{dateFormat(frontpageNews[0].datePublished, 'clock')}</div>
                                <Link to={`/article0/${frontpageNews[0]._id}`}><div className = "tickerTitle">{frontpageNews[0].title}</div></Link>
                            </div>

                            <div className='ticker-item'>
                                <div className = "tickerDate">{dateFormat(frontpageNews[1].datePublished, 'clock')}</div>
                                <Link to={`/article1/${frontpageNews[1]._id}`}><div className = "tickerTitle">{frontpageNews[1].title}</div></Link>
                            </div>

                            <div className='ticker-item'>
                                <div className = "tickerDate">{dateFormat(frontpageNews[2].datePublished, 'clock')}</div>
                                <Link to={`/article2/${frontpageNews[2]._id}`}><div className = "tickerTitle">{frontpageNews[2].title}</div></Link>
                            </div>

                            <div className='ticker-item'>
                                <div className = "tickerDate">{dateFormat(frontpageNews[3].datePublished, 'clock')}</div>
                                <Link to={`/article3/${frontpageNews[3]._id}`}><div className = "tickerTitle">{frontpageNews[3].title}</div></Link>
                            </div>

                            <div className='ticker-item'>
                                <div className = "tickerDate">{dateFormat(frontpageNews[4].datePublished, 'clock')}</div>
                                <Link to={`/article4/${frontpageNews[4]._id}`}><div className = "tickerTitle">{frontpageNews[4].title}</div></Link>
                            </div>
                        </div>
                        </>
                    )}
                </Ticker>}
                {/* <div className='ticker-day'>
                    <div className='ticker-date'><span>{dateFormat(new Date(), 'dayWeek', 'comma', 'month', 'dayMonth')}</span></div>
                    <Weather />
                </div> */}
            </div>
        )
}
 
export default NewsTicker