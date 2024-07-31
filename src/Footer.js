import React from 'react';
import {Link} from 'react-router-dom';
import './style/layout/footer.css';
import './style/typography/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className='site-map'>
                    <div className='map-category'>
                        <div className='map-category-title'><Link to = '/politics/politics'>Politika</Link></div>
                        <div className='map-category-item'><Link to = '/politicsTagged/politics/srbija'>Srbija</Link></div>
                        <div className='map-category-item'><Link to = '/politicsTagged/politics/region'>Region</Link></div>
                        <div className='map-category-item'><Link to = '/politicsTagged/politics/evropa'>Evropa</Link></div>
                        <div className='map-category-item'><Link to = '/politicsTagged/politics/svet'>Svet</Link></div>
                    </div>
                    
                    <div className='map-category'>
                        <div className='map-category-title'><Link to = '/technology/technology'>Tehnologija</Link></div>
                        <div className='map-category-item'><Link to = '/technologyTagged/technology/softver'>Softver</Link></div>
                        <div className='map-category-item'><Link to = '/technologyTagged/technology/hardver'>Hardver</Link></div>
                        <div className='map-category-item'><Link to = '/technologyTagged/technology/AI'>AI</Link></div>
                        <div className='map-category-item'><Link to = '/technologyTagged/technology/inovacije'>Inovacije</Link></div>
                    </div>
                    
                    <div className='map-category'>
                    <div className='map-category-title'><Link to = '/business/business'>Ekonomija</Link></div>
                    <div className='map-category-item'><Link to = '/businessTagged/business/industrija'>Industrija</Link></div>
                    <div className='map-category-item'><Link to = '/businessTagged/business/poljoprivreda'>Poljoprivreda</Link></div>
                    <div className='map-category-item'><Link to = '/businessTagged/business/IT'>IT</Link></div>
                    <div className='map-category-item'><Link to = '/businessTagged/business/finansije'>Finansije</Link></div>
                    <div className='map-category-item'><Link to = '/businessTagged/business/energetika'>Energetika</Link></div>
                    </div>
                    
                    <div className='map-category'>
                        <div className='map-category-title'><Link to = '/entertainment/entertainment'>Magazin</Link></div>
                        <div className='map-category-item'><Link to = '/entertainmentTagged/entertainment/muzika'>Muzika</Link></div>
                        <div className='map-category-item'><Link to = '/entertainmentTagged/entertainment/film'>Film</Link></div>
                        <div className='map-category-item'><Link to = '/entertainmentTagged/entertainment/poznati'>Poznati</Link></div>
                        <div className='map-category-item'><Link to = '/entertainmentTagged/entertainment/zdravlje'>Zdravlje</Link></div>
                        <div className='map-category-item'><Link to = '/entertainmentTagged/entertainment/nauka'>Nauka</Link></div>
                        <div className='map-category-item'><Link to = '/entertainmentTagged/entertainment/priroda'>Priroda</Link></div>
                        <div className='map-category-item'><Link to = '/entertainmentTagged/entertainment/turizam'>Turizam</Link></div>
                    </div>
                    
                    <div className='map-category'>
                        <div className='map-category-title'><Link to = '/sports/sports'>Sport</Link> </div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/fudbal'>Fudbal</Link></div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/košarka'>Košarka</Link></div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/tenis'>Tenis</Link></div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/odbojka'>Odbojka</Link></div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/vaterpolo'>Vaterpolo</Link></div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/rukomet'>Rukomet</Link></div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/atletika'>Atletika</Link></div>
                        <div className='map-category-item'><Link to = '/sportsTagged/sports/ostali'>Ostali</Link></div>
                    </div>
                </div>
                <div className="footer-social">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube-square"></i>
                </div>
                <div className="footer-links">
                    <div className="footer-item"><a href="#">Impressum</a></div>
                    <div className="footer-item"><a href="#">O nama</a></div>
                    <div className="footer-item"><a href="#">Marketing</a></div>
                    <div className="footer-item"><a href="#">Zaštita privatnosti</a></div>
                    <div className="footer-item"><a href="#">Kontakt</a></div>
                </div>
                <div className="footer-copyright">
                    <span className="copyright-label">Copyright</span>
                    <i className="fas fa-copyright"></i>
                    <span className="copyright-name">Goran Belanovic</span>
                </div>

            </div>
        </footer>
    )
}