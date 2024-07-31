import react, {useState, useEffect, useRef, useContext} from 'react';
import {Link} from 'react-router-dom';
import {context} from './newsContext';
import dateFormat from './dateFormat';
import Weather from './Weather';
import Ticker from 'react-ticker';

import './style/layout/news-ticker1.css';
import './style/typography/news-ticker1.css';


export default function NewsTicker1({positioned}) {

    const {frontpageNews} = useContext(context);

    const [duration, setDuration] = useState(0);
    useEffect(() => {
        setDuration((prev) => {
            if(frontpageNews[5].title) {
                const length = frontpageNews[5].title.length +
                frontpageNews[0].title.length + 
                frontpageNews[1].title.length + 
                frontpageNews[2].title.length + 
                frontpageNews[3].title.length + 
                frontpageNews[4].title.length + 
                frontpageNews[5].title.length +
                frontpageNews[0].title.length
  
                return length/5
            } else {
                return 0
            }
            
        }) 
    }, [frontpageNews])
    return (
        <div className={`container ticker-wrapper ${positioned? 'positioned' : ''}`}>
            <div
                className='ticker-label'
            >
                <span className='text'>Najvažnije</span>
            </div>
               
                <div className = "newsTicker1">
                    
                    <div 
                        className = "newsTicker1Container"
                        style = {{
                            animationDuration: `${duration}s`
                        }}
                    >
                    
                        <div className = "tickerDate">{dateFormat(frontpageNews[0].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[0]._id}`}><div className = "tickerTitle">{frontpageNews[0].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[1].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[1]._id}`}><div className = "tickerTitle">{frontpageNews[1].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[2].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[2]._id}`}><div className = "tickerTitle">{frontpageNews[2].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[3].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[3]._id}`}><div className = "tickerTitle">{frontpageNews[3].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[4].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[4]._id}`}><div className = "tickerTitle">{frontpageNews[4].title}</div></Link>

                        <div className = "tickerDate">{dateFormat(frontpageNews[0].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[0]._id}`}><div className = "tickerTitle">{frontpageNews[0].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[1].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[1]._id}`}><div className = "tickerTitle">{frontpageNews[1].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[2].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[2]._id}`}><div className = "tickerTitle">{frontpageNews[2].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[3].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[3]._id}`}><div className = "tickerTitle">{frontpageNews[3].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[4].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[4]._id}`}><div className = "tickerTitle">{frontpageNews[4].title}</div></Link>
                            

                        <div className = "tickerDate">{dateFormat(frontpageNews[0].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[0]._id}`}><div className = "tickerTitle">{frontpageNews[0].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[1].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[1]._id}`}><div className = "tickerTitle">{frontpageNews[1].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[2].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[2]._id}`}><div className = "tickerTitle">{frontpageNews[2].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[3].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[3]._id}`}><div className = "tickerTitle">{frontpageNews[3].title}</div></Link>
                        <div className = "tickerDate">{dateFormat(frontpageNews[4].datePublished, 'clock')}</div>
                        <Link to={`/article/${frontpageNews[4]._id}`}><div className = "tickerTitle">{frontpageNews[4].title}</div></Link>
                    </div>
                </div>
            <div className='ticker-day'>
                <div className='ticker-date'><span>{dateFormat(new Date(), 'dayWeek', 'comma', 'month', 'dayMonth')}</span></div>
                <Weather />
            </div>
        </div>
    )
}