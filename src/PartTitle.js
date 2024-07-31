import React from 'react';
import './style/layout/part-title.css';
import './style/typography/part-title.css';

export default function PartTitle({classSuffix, title}) {
    return (
        <div className = {`partTitle partTitle-${classSuffix}`}>
            <div className = "partTitle-text">
                {title}
            </div>
        </div>
    )
}