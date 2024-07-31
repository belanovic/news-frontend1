import React, {useState, useEffect, useContext}  from 'react';
import { Link } from 'react-router-dom';
import shortenSentence from './shortenSentence.js';
import {context} from './newsContext';
import GenericThumb from './GenericThumb';
import './style/layout/carousel.css';
import './style/typography/carousel.css';  

import './style/layout/card-slide.css';
import './style/typography/card-slide.css';

export default function CardCarousel({ title, supertitle, subtitle, datePublished, dateUpdated,
                                       date, src, filter, path, videoURL, category}) {

    const {alphabet, backgroundSupertitle, colorSupertitle} = useContext(context);

    const [filterStyle, setFilterStyle] = useState('none');

    useEffect(() => {
        if (filter) {
            setFilterStyle(() => {
                return `blur(${filter[0].blur}px) brightness(${filter[0].brightness}%) 
                            contrast(${filter[0].contrast}%) grayscale(${filter[0].grayscale}%) 
                            hue-rotate(${filter[0].huRotate}deg) invert(${filter[0].invert}%) 
                            opacity(${filter[0].opacity}%) saturate(${filter[0].saturate}%) 
                            sepia(${filter[0].sepia}%)`
            })
        } else {
            setFilterStyle('none')
        }
    }, [filter])

    return (
        <Link to = {path}>
            <div className={`card-slide`}>
                {videoURL !== 'none' && <div className="play"  style={{background: backgroundSupertitle}}><i className="far fa-play-circle"></i></div>}
                {supertitle && <div className={`card-slide-container-supertitle`}>
                        <div className={`card-slide-supertitle`} style={{background: backgroundSupertitle, color: colorSupertitle}}>{supertitle}</div>
                </div>}
                <div className = {`card-slide-container-img`}>
                {src === 'generic'?
                    <GenericThumb 
                        className = {`card-slide-img `}  
                        thumbShape = 'wide'
                        category = {category}
                    />
                    :
                    <img 
                        className={`card-slide-img `} 
                        src={src}
                        style = {{filter: filterStyle}}
                    >
                    </img>
                }
                </div>
                <div className={`card-slide-text`}>
                    <div className={`card-slide-info`}>
                        <div className='card-info-category'>{category} / </div>
                        <div className={`card-info-date`}>
                            <span className="date datePublished" >
                                {datePublished}
                            </span>
                            <i className="fa-solid fa-arrow-right"></i>
                            <span className="date dateUpdated">
                                {dateUpdated}
                            </span>
                        </div>
                    </div>
                    <h3 className={`card-slide-title`}>{shortenSentence(title, 500)}</h3>
                    <p className={`card-slide-subtitle`}>{shortenSentence(subtitle, 180)}</p>
                </div>
                
            </div>
        </Link>
    )
}