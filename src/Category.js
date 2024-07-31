import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {context} from './newsContext.js';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import Line from './Line.js';
import dateFormat from './dateFormat.js';
import GenericThumb from './GenericThumb.js';
import Pagination from './Pagination.js';
import Latest from './Latest.js';
import './style/layout/category.css';
import './style/typography/category.css';

export default function Category() {

    const {alphabet, setShowSiteOverlay, activeCategory, setActiveCategory } = useContext(context);
    const [articlesByCategory, setArticlesByCategory] = useState('');
    
    const { category, tag } = useParams();
    const [pageNum, setPageNum] = useState({number: 1, isLast: false, numOfPages: ''});

    const formatCategory = (category) => {
        if (category === 'politics') return 'Политика'
        if (category === 'business') return 'Економија'
        if (category === 'technology') return 'Технологија'
        if (category === 'entertainment') return 'Магазин'
        if (category === 'sports') return 'Спорт'
    }

    useEffect(() => {
        setActiveCategory(category);
        window.scrollTo(0, 0);
        return () => setActiveCategory('')
    }, [])

    return (
        <div className="category container">
            <div className='category-articles'>
                {tag? 
                <div className='articles-tag'>{tag}</div> 
                : 
                <div>
                {category == 'sports'?
                <div className='category-themas'>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/fudbal'>#fudbal</Link></div>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/košarka'>#košarka</Link></div>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/tenis'>#tenis</Link></div>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/odbojka'>#odbojka</Link></div>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/vaterpolo'>#vaterpolo</Link></div>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/rukomet'>#rukomet</Link></div>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/atletika'>#atletika</Link></div>
                    <div className='thema-item'><Link to = '/sportsTagged/sports/ostali'>#ostali</Link></div>
                </div>
                :
                ''
                }
                {category == 'entertainment'?
                <div className='category-themas'>
                    <div className='thema-item'><Link to = '/entertainmentTagged/entertainment/muzika'>#muzika</Link></div>
                    <div className='thema-item'><Link to = '/entertainmentTagged/entertainment/film'>#film</Link></div>
                    <div className='thema-item'><Link to = '/entertainmentTagged/entertainment/poznati'>#poznati</Link></div>
                    <div className='thema-item'><Link to = '/entertainmentTagged/entertainment/zdravlje'>#zdravlje</Link></div>
                    <div className='thema-item'><Link to = '/entertainmentTagged/entertainment/nauka'>#nauka</Link></div>
                    <div className='thema-item'><Link to = '/entertainmentTagged/entertainment/priroda'>#priroda</Link></div>
                    <div className='thema-item'><Link to = '/entertainmentTagged/entertainment/turizam'>#turizam</Link></div>
                </div>
                :
                ''
                }
                {category == 'politics'?
                <div className='category-themas'>
                    <div className='thema-item'><Link to = '/politicsTagged/politics/srbija'>#srbija</Link></div>
                    <div className='thema-item'><Link to = '/politicsTagged/politics/region'>#region</Link></div>
                    <div className='thema-item'><Link to = '/politicsTagged/politics/evropa'>#evropa</Link></div>
                    <div className='thema-item'><Link to = '/politicsTagged/politics/svet'>#svet</Link></div>
                </div>
                :
                ''
                }
                {category == 'business'?
                <div className='category-themas'>
                    <div className='thema-item'><Link to = '/businessTagged/business/industrija'>#industrija</Link></div>
                    <div className='thema-item'><Link to = '/businessTagged/business/poljoprivreda'>#poljoprivreda</Link></div>
                    <div className='thema-item'><Link to = '/businessTagged/business/IT'>#IT</Link></div>
                    <div className='thema-item'><Link to = '/businessTagged/business/finansije'>#finansije</Link></div>
                    <div className='thema-item'><Link to = '/businessTagged/business/energetika'>#energetika</Link></div>
                </div>
                :
                ''
                }
                {category == 'technology'?
                <div className='category-themas'>
                    <div className='thema-item'><Link to = '/technologyTagged/technology/softver'>#softver</Link></div>
                    <div className='thema-item'><Link to = '/technologyTagged/technology/hardver'>#hardver</Link></div>
                    <div className='thema-item'><Link to = '/technologyTagged/technology/AI'>#AI</Link></div>
                    <div className='thema-item'><Link to = '/technologyTagged/technology/inovacije'>#inovacije</Link></div>
                </div>
                :
                ''
                }
                </div>}
                <div className='articles-list'>
                    {articlesByCategory && articlesByCategory.map((article, i) => {
                        
                        let lineType = '';
                        if(articlesByCategory.length == (i+1)) {
                            lineType = ''
                        } else {
                            lineType = 'bottom'
                        }
                        return  <Card
                                key = {i}
                                index={i}
                                pageNum={pageNum}
                                classSuffix={'category'}
                                path = {`/article/${article._id}`}
                                position={article.position} 
                                title={article.title}
                                supertitle={article.supertitle}
                                subtitle={article.subtitle}
                                src={article.imgURL}
                                videoURL={article.videoURL}
                                filter = {article.imgFilter}
                                category = {category}
                                datePublished = {dateFormat(article.datePublished, 'month', 'dayMonth','comma', 'clock')}
                                dateUpdated = {dateFormat(article.dateUpdated,'clock')}
                                hasDateArrow={true}
                                thumbShape={'wide'}
                           
                                readMore = {false}
                            />
    
                    })}
                </div>
                <Pagination 
                    category = {category} 
                    articlesByCategory = {articlesByCategory}
                    setArticlesByCategory = {setArticlesByCategory}
                    pageNum = {pageNum}
                    setPageNum = {setPageNum}
                    tag = {tag}
                />
            </div>
            <div className='category-sidebar'>
                <Latest />

                {category === 'politics' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/towgy8enNXqe5Qme" frameborder="1"></iframe>
                </div>}
                {category === 'business' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="600" src="https://rss.app/embed/v1/list/tfvgQKyHd9tPF4EH" frameborder="1"></iframe>
            
                </div>}
                {category === 'technology' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/tN5fVbqtFiG6SpDE" frameborder="1"></iframe>
                </div>}
                {category === 'entertainment' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/tpZKWfyxQjObXAr2" frameborder="1"></iframe>
                </div>}
                {category === 'sports' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/t0mYvvqpHSs2iQsD" frameborder="1"></iframe>
                </div>}
            </div>

        </div>
    )
}