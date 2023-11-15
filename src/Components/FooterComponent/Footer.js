import React from 'react';
import './Footer.css';
import logo from '../HeaderComponent/Logo_1.png';
import JoinWhatsApp from '../HeaderComponent/JoinWhatsApp';
import JoinTelegram from '../HeaderComponent/JoinTelegram';
import JoinTwitter from '../HeaderComponent/JoinTwitter';
import JoinFacebook from '../HeaderComponent/JoinFacebook';
import JoinInsta from '../HeaderComponent/JoinInsta';
import JoinYouTube from '../HeaderComponent/JoinYoutube';

const Footer = () => {
    return (
        <footer className="custom-footer bg-dark text-light py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="footer-logo">
                    <img src={logo} alt="Company Logo" className="logo-img" />
                    <p className="logo-text mt-2"></p>
                </div>
                <div className="footer-links">

                    <div className="social-links">
                       
                            {/* <div className='media-links'>
                                <JoinYouTube />
                            </div>
                            <div className='media-links'>
                                <JoinTwitter />
                            </div>
                            <div className='media-links'>
                                <JoinTelegram />
                            </div>
                            <div className='media-links'>
                                <JoinFacebook />
                            </div>
                            <div className='media-links'>
                                <JoinInsta />
                            </div>
                            <div className='media-links'>
                                <JoinWhatsApp />
                            </div> */}
                    </div>
                </div>
                <div className="quick-offer-links">
                    {/* <a href="/top-mobile-offers" className="top-offers-link">
                        Top Mobile Offers
                    </a>
                    <a href="/top-mobile-offers" className="top-offers-link">
                        Top Mobile Offers
                    </a> */}
                </div>
            </div>
            <div className="footer-text text-center mt-3">
                &copy; {new Date().getFullYear()} dealspakado.com. All rights reserved.
            </div>
            <div className='social-media'>
                <p className='follow-on'>Follow on</p>
                <JoinFacebook />
                <JoinWhatsApp />
                <JoinInsta />
                <JoinTelegram />
                <JoinYouTube />
                <JoinTwitter />
            </div>
        </footer>
    );
};

export default Footer;
