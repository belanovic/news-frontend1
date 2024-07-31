import React, {useState, useContext} from 'react';
import {context} from './newsContext.js';
import {Link} from 'react-router-dom';
import './style/navigationDesk.css';
import dateFormat from './dateFormat';
import Weather from './Weather';

export default function NavigationDesk({positioned}) {

    const {activeCategory} = useContext(context)

    return (
        <div className= {`container navigationDesk-container ${positioned? 'positioned' : ''}`}>
            <nav 
                className="navigationDesk" 
            >
                <div className="navDesk-list">
                    <div className={`navDesk-item ${(activeCategory == 'politics' && 'active')}`}><Link to = '/politics/politics'><span className="navDesk-label">Politika</span></Link></div>
                    <div className={`navDesk-item ${(activeCategory == 'technology' && 'active')}`}><Link to = '/technology/technology'><span className="navDesk-label">Tehnologija</span></Link> </div>
                    <div className={`navDesk-item ${(activeCategory == 'business' && 'active')}`}><Link to = '/business/business'><span className="navDesk-label">Ekonomija</span></Link> </div>
                    <div className={`navDesk-item ${(activeCategory == 'entertainment' && 'active')}`}> <Link to = '/entertainment/entertainment'><span className="navDesk-label">Magazin</span></Link> </div>
                    <div className={`navDesk-item ${(activeCategory == 'sports' && 'active')}`}><Link to = '/sports/sports'><span className="navDesk-label">Sport</span></Link> </div>
                </div>
            </nav>
            <div className='ticker-day'>
                    <div className='ticker-date'><span>{dateFormat(new Date(), 'dayWeek', 'comma', 'month', 'dayMonth')}</span></div>
                    <Weather />
            </div>
        </div>
    )
}