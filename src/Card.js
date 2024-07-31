import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from './newsContext.js';
import isInViewport from './isInViewport';
import debounce from './debounce.js';
import shortenSentence from './shortenSentence.js';
import GenericThumb from './GenericThumb';
import Line from './Line.js';
import './style/layout/card.css';
import './style/typography/card.css';  
import './style/layout/card-general.css';
import './style/typography/card-general.css';  
import './style/layout/card-generalSmall.css';
import './style/typography/card-generalSmall.css';
import './style/layout/card-magazin.css';
import './style/typography/card-magazin.css';  
import './style/layout/card-sport.css';
import './style/typography/card-sport.css';  
import './style/layout/card-category.css';
import './style/typography/card-category.css'; 
import './style/layout/card-latest.css';
import './style/typography/card-latest.css'; 
import './style/layout/card-recommend.css';
import './style/typography/card-recommend.css'; 

export default function Card({index, position, pageNum, classSuffix, title, supertitle, subtitle, videoURL, line, path, readMore,
    datePublished, dateUpdated, src, filter, id, category, frontpageNews, thumbShape, hasDateArrow }) {

    const { alphabet, backgroundSupertitle, colorSupertitle, colorReadmore, backgroundReadmore } = useContext(context);
    const cardElement = useRef(null);
    const [inViewport, setInViewport] = useState(false);
    const [filterStyle, setFilterStyle] = useState('none');

    const formatCathegory = (category) => {
        if (category === 'politics') return 'Politika'
        if (category === 'business') return 'Ekonomija'
        if (category === 'technology') return 'Tehnologija'
        if (category === 'entertainment') return 'Magazin'
        if (category === 'sports') return 'Sport'
    }

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
        <>
        {line == 'top'? <Line type={classSuffix} /> : ''}
        <div className={`card card-${classSuffix} ${(index == 0) && (pageNum.number == 1)? 'first' : ''}`}>
            {supertitle && <div className={`card-${classSuffix}-container-supertitle`}>
                        <div className={`card-${classSuffix}-supertitle`} style={{background: backgroundSupertitle, color: colorSupertitle}}>{supertitle}</div>
            </div>}
            {src && <div className={`card-${classSuffix}-container-img`}>
                <Link to={path}>
                    {videoURL && (videoURL !== 'none') && <div className="play" style={{background: backgroundSupertitle}}><i className="far fa-play-circle"></i></div>}
                    {(src == 'generic')?
                        <GenericThumb 
                            className={`card-img card-${classSuffix}-img`}
                            thumbShape = {thumbShape} 
                            category={category} 
                        />
                        :
                        <img className={`card-img card-${classSuffix}-img`}
                            ref={cardElement}
                            src={src}
                            style={{ filter: filterStyle }}
                        >
                        </img>}
                </Link>
            </div>}
            {(title || subtitle) && <div className={`card-${classSuffix}-text`}>
                {title && <div className={`card-${classSuffix}-container-title`}>
                    <Link to={path}>
                        <div className={`card-${classSuffix}-title`}>
                            {shortenSentence(title, 170)}
                        </div>
                    </Link>
                </div>}
                {(category || datePublished || dateUpdated) && <div className={`card-${classSuffix}-info`}>
                    {category && <div className='card-info-category'>{formatCathegory(category)} / </div>}
                    {(datePublished || dateUpdated) && <div className={`card-info-date`}>
                        {datePublished && <span className="date datePublished" >
                            {datePublished ? datePublished: ''}
                        </span>}
                        <span>{hasDateArrow? ' > ' : ''}</span>
                        {dateUpdated && <span className="date dateUpdated">
                            {dateUpdated ? dateUpdated : ''}
                        </span>}
                    </div>}
                </div>}
               {subtitle && <div className={`card-${classSuffix}-container-subtitle`}>
                    <Link to={path}>
                        <p
                            className={`card-${classSuffix}-subtitle`}
                        >
                            {shortenSentence(subtitle, 170)}
                        </p>
                    </Link>
                </div>}
                {readMore && <div className='read-more'> <Link to={path} style = {{background: backgroundReadmore, color: colorReadmore}}>Pročitaj</Link></div>}
            </div>}
        </div>
        {line == 'bottom'? <Line type={classSuffix} /> : ''}
        </>
    )
}