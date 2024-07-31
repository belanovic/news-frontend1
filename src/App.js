import React, {useRef, useContext} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Article from './Article.js';
import Category from './Category.js';
import {Switch, Route} from 'react-router-dom';
import {context} from './newsContext';
import NewsTicker1 from './NewsTicker1.js';
import NewsTicker from './NewsTicker.js';
import NavigationDesk from './NavigationDesk.js';
import Space from './Space.js';
import Form from './Form';

export default function App() {
    const cmsOverlay = useRef(null);  
    const {showSiteOverlay, setShowSiteOverlay, settings} = useContext(context);
    return (   
        <div className = "wrapper"> 
            <div className = "siteOverlay" ref = {cmsOverlay} style = {{display: showSiteOverlay}}></div>
            <Header positioned={settings.top == 'naslov'? true : false} />
            <Space margin = '1.5em' />
            <NewsTicker positioned={settings.top == 'skrol'? true : false} />
            <Space margin = '1.5em' />
            <NavigationDesk positioned={settings.top == 'meni'? true : false}  />
            <Space margin = '2em' />
            <Switch> 

                <Route exact path = "/"><Main /></Route> 

                <Route path = {`/article/:id`}><Article key = {99}/></Route>
                
                <Route path = {`/article0/:id`}><Article key = {0}/></Route>
                <Route path = {`/article1/:id`}><Article key = {1}/></Route>
                <Route path = {`/article2/:id`}><Article key = {2}/></Route>
                <Route path = {`/article3/:id`}><Article key = {3}/></Route>
                <Route path = {`/article4/:id`}><Article key = {4}/></Route>
                <Route path = {`/article5/:id`}><Article key = {5}/></Route>

                <Route path = {`/articleRecent0/:id`}><Article key = {6}/></Route>
                <Route path = {`/articleRecent1/:id`}><Article key = {7}/></Route>
                <Route path = {`/articleRecent2/:id`}><Article key = {8}/></Route>
                <Route path = {`/articleRecent3/:id`}><Article key = {9}/></Route>
                <Route path = {`/articleRecent4/:id`}><Article key = {10}/></Route>

                <Route path = {`/articlePopular0/:id`}><Article key = {11}/></Route>
                <Route path = {`/articlePopular1/:id`}><Article key = {12}/></Route>
                <Route path = {`/articlePopular2/:id`}><Article key = {13}/></Route>
                <Route path = {`/articlePopular3/:id`}><Article key = {14}/></Route>
                <Route path = {`/articlePopular4/:id`}><Article key = {15}/></Route>

                <Route path = {`/articleTrending0/:id`}><Article key = {16}/></Route>
                <Route path = {`/articleTrending1/:id`}><Article key = {17}/></Route>
                <Route path = {`/articleTrending2/:id`}><Article key = {18}/></Route>
                <Route path = {`/articleTrending3/:id`}><Article key = {19}/></Route>
                <Route path = {`/articleTrending4/:id`}><Article key = {20}/></Route>

                <Route path = "/politics/:category"><Category key = {1} /></Route>
                <Route path = "/technology/:category"><Category key = {2}/></Route>
                <Route path = "/business/:category"><Category key = {3}/></Route>
                <Route path = "/entertainment/:category"><Category key = {4}/></Route>
                <Route path = "/sports/:category"><Category key = {5}/></Route>
                
                <Route path = "/politicsTagged/:category/:tag"><Category key = {6} /></Route>
                <Route path = "/technologyTagged/:category/:tag"><Category key = {7}/></Route>
                <Route path = "/businessTagged/:category/:tag"><Category key = {8}/></Route>
                <Route path = "/entertainmentTagged/:category/:tag"><Category key = {9}/></Route>
                <Route path = "/sportsTagged/:category/:tag"><Category key = {10}/></Route>
                
                {/* <Route path = "/form"><Form /></Route>  */}

            </Switch>

            <Footer />
            
        </div>
    )
}
                