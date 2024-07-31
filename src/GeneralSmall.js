import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import range from './sectionsRange.js';
import './style/layout/general.css';
import './style/typography/general.css';


export default function GeneralSmall() {

    const {frontpageNews} = useContext(context);

    return (
        <div className='generalSmall'>
            {frontpageNews.map((article, i) => {
                if((i < (range.maleVesti.start - 1)) || (i > (range.maleVesti.end - 1))) return
                return <Card  
                        key = {i}
                        path = {`/article/${article._id}`}
                        classSuffix = 'generalSmall'
                        id = {article._id}
                        src = {article.imgURL}
                        videoURL = {article.videoURL}
                        filter = {article.imgFilter}
                        category = {article.category}
                        datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                        title = {article.title}
                        thumbShape = 'wide'
                        readMore={false}
                        
                    />
            })}
        </div>
    )
}