import React, { useState, useEffect, useContext } from 'react';
import { getFrontpageNews, getSettings } from './getNews.js';

const context = React.createContext();

let defaultFrontpageNews = [];
for(let i = 0; i < 100; i++) {defaultFrontpageNews.push(i)}

function Provider(props) {
    const [settings, setSettings] = useState('');
    const [frontpageNews, setFrontpageNews] = useState(defaultFrontpageNews);
    const [showSiteOverlay, setShowSiteOverlay] = useState('none');
    const [alphabet, setAlphabet] = useState('cirilica');
    const [navVisible, setNavVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('recent');
    const [activeCategory, setActiveCategory] = useState('');

    const [backgroundHeader, setBackgroundHeader] = useState('linear-gradient(180deg, #970000, #000000)');
    const [colorHeader, setColorHeader] = useState('#ffffff');
    const [backgroundSupertitle, setBackgroundSupertitle] = useState('linear-gradient(180deg, #970000, #000000)');    
    const [colorSupertitle, setColorSupertitle] = useState('#ffffff');
    const [backgroundReadmore, setBackgroundReadmore] = useState('linear-gradient(180deg, #970000, #000000)');
    const [colorReadmore, setColorReadmore] = useState('#ffffff');
    const [backgroundSocial, setBackgroundSocial] = useState('linear-gradient(180deg, #970000, #000000)');
    const [colorSocial, setColorSocial] = useState('#ffffff');
    
    async function getAndSetFrontpageNews() {
        try {
            setShowSiteOverlay('flex');
            const n = await getFrontpageNews();
            setShowSiteOverlay('none');
            n.sort((a, b) => a.position - b.position);
            setFrontpageNews(n);
        } catch (error) {
            
        }
    }


    useEffect(() => {
        if(settings) {
            setBackgroundHeader(`linear-gradient(${settings.colors.headerColor[0]}deg, ${settings.colors.headerColor[1]}, ${settings.colors.headerColor[2]})`)
            setColorHeader(settings.colors.headerColor[3]);
            setBackgroundSupertitle(`linear-gradient(${settings.colors.supertitleColor[0]}deg, ${settings.colors.supertitleColor[1]}, ${settings.colors.supertitleColor[2]})`)
            setColorSupertitle(settings.colors.supertitleColor[3]);
            setBackgroundReadmore(`linear-gradient(${settings.colors.readmoreColor[0]}deg, ${settings.colors.readmoreColor[1]}, ${settings.colors.readmoreColor[2]})`);
            setColorReadmore(settings.colors.readmoreColor[3]);
            setBackgroundSocial(`linear-gradient(${settings.colors.socialColor[0]}deg, ${settings.colors.socialColor[1]}, ${settings.colors.socialColor[2]})`);
            setColorSocial(settings.colors.socialColor[3]);
        }
    }, [settings])

    useEffect(async () => {
        try {
            await getAndSetFrontpageNews();
        
            setShowSiteOverlay('flex');
            const settingsMsg = await getSettings();
            setShowSiteOverlay('none');
      
            if(settingsMsg == null) {
                setSettings('');
            }
            if(settingsMsg.isSuccess) {
                setSettings(settingsMsg.settings);
            }
        } catch (error) {
            
        }

    }, [])

    /* useEffect(() => {console.log(settings)}, [settings]) */

    return (
        <context.Provider value={
            {   settings,
                frontpageNews,
                setFrontpageNews,
                getAndSetFrontpageNews,
                showSiteOverlay,
                setShowSiteOverlay,
                alphabet,
                setAlphabet,
                navVisible, 
                setNavVisible,
                formVisible, 
                setFormVisible,
                activeTab, 
                setActiveTab,
                activeCategory, 
                setActiveCategory,
                backgroundHeader,
                colorHeader,
                backgroundSupertitle,
                colorSupertitle,
                backgroundReadmore,
                colorReadmore,
                backgroundSocial,
                colorSocial

            }
        }>{props.children}</context.Provider>
    )
}

export { Provider, context };