import React, {useState, useContext} from 'react';
import {context} from './newsContext.js';
import {Link} from 'react-router-dom';
import './style/navigationMob.css';

export default function NavigationMob({navVisible, setNavVisible}) {

    return (
        <nav 
            className="navigationMob" 
            style = {{left: navVisible? '0' : '-150%'}}
        >
            <div className="navMob-list">
                <div className="navMob-item" onClick = {() => setNavVisible(false)}>
                    <Link to = '/politics/politics'>
                        <span className="navMob-label">Politika</span>
                    </Link>
                </div>
                <div className="navMob-item" onClick = {() => setNavVisible(false)}>
                    <Link to = '/business/business'>
                        <span className="navMob-label">Ekonomija</span>
                    </Link>
                </div>
                <div className="navMob-item" onClick = {() => setNavVisible(false)}>
                    <Link to = '/technology/technology'>
                        <span className="navMob-label">Tehnologija</span>
                    </Link>
                </div>
                <div className="navMob-item" onClick = {() => setNavVisible(false)}>
                    <Link to = '/entertainment/entertainment'>
                        <span className="navMob-label">Magazin</span>
                    </Link>
                </div>
                <div className="navMob-item" onClick = {() => setNavVisible(false)}>
                    <Link to = '/sports/sports'>
                        <span className="navMob-label">Sport</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}