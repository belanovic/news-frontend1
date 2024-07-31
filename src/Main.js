import React, {useState, useEffect, useContext, useRef} from 'react';
import NewsTicker1 from './NewsTicker1.js';
import './style/layout/main.css';
import './style/typography/main.css';
import './style/play.css';
import Carousel from './Carousel.js';
import Latest from './Latest.js';
import General from './General.js';
import GeneralSmall from './GeneralSmall.js';
import Recommend from './Recommend.js';
import Magazin from './Magazin.js';
import Sport from './Sport.js';
import Social from './Social.js';
import Card from './Card.js';
import NavigationDesk from './NavigationDesk.js';
import PartTitle from './PartTitle.js';
import lorem from './text.js';
import {getFrontpageNews} from './getNews.js';
import dateFormat from './dateFormat.js';
import {context} from './newsContext.js';
import Covid from './Covid.js';
import Line from './Line.js';
import Space from './Space.js';
import Form from './Form.js';
import Custom from './Custom.js';

export default function Main() {

    const {frontpageNews, setActiveTab, settings } = useContext(context);
    const mainOverlay = useRef(null);

    const sectionsMain = ['sport', 'preporucujemo', 'magazin', 'velike vesti', 'central', 'space',  'male vesti', 'space', 'preporucujemo']
    const defaultSectionsMain = ['central', 'space', 'velike vesti', 'space', 'male vesti', 'space', 
                        'mreze', 'space', 'line', 'preporucujemo', 'line', 'magazin', 'line', 'sport'];

    function generateMain(section, i) {

        if((section == 'central') && settings) return <section className='central'>
            <Carousel/>
            <Latest />
        </section>
        if(section == 'velike vesti') return <General/>
        if(section == 'male vesti') return <GeneralSmall />
        if((section == 'preporučujemo') || (section == 'preporucujemo')) return <Recommend onTop = {i == 0} />
        if((section == 'mreže') || (section == 'mreze')) return <Social />
        if(section == 'magazin') return <Magazin onTop = {i == 0}/>
        if(section == 'sport') return <Sport onTop = {i == 0}/>
        if(section == 'line') return <Line type = 'main' />
        if(section == 'space') return <Space margin = '3em'/>
        if(section == 'custom0') return <Custom customX ={settings.customs[0]} />
        if(section == 'custom1') return <Custom customX ={settings.customs[1]} />
        if(section == 'custom2') return <Custom customX ={settings.customs[2]} />
        if(section == 'custom3') return <Custom customX ={settings.customs[3]} />
        if(section == 'custom4') return <Custom customX ={settings.customs[4]} />
        if(section == 'custom5') return <Custom customX ={settings.customs[5]} />
        if(section == 'custom6') return <Custom customX ={settings.customs[6]} />
        if(section == 'custom7') return <Custom customX ={settings.customs[7]} />
        if(section == 'custom8') return <Custom customX ={settings.customs[8]} />
        if(section == 'custom9') return <Custom customX ={settings.customs[9]} />

    }

    useEffect(() => {
        setActiveTab('recent');
    }, [])

    return (
        <main className="main">
            <div className="container main-container">
                {settings? 
                    settings.templates.type == 'default'? defaultSectionsMain.map(generateMain) : settings.templates.sectionsMain.map(generateMain)
                    : 
                    defaultSectionsMain.map(generateMain)
                }
            </div>
        </main>
    )
}