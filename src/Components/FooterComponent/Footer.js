import React from 'react';
import './Footer.css';
import logo from '../HeaderComponent/Logo_1.png';
import youtube from './Images/YouTube_Logo.png';
import twitter from './Images/X_logo.png';
import instagram from './Images/Instagram_logo.png';
import telegram from './Images/Telegram_Logo.png';
import gmail from './Images/Gmail_icon.png';
import facebook from './Images/Facebook_logo_.png';
import JoinWhatsApp from '../HeaderComponent/JoinWhatsApp';

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
                        <div className='media-links'>
                            <a className='social-link' href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src={youtube} alt="YouTube" className="social-icon" />
                            </a>
                        </div>
                        <div className='media-links'>
                            <a className='social-link' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" className="social-icon" />
                            </a>
                        </div>
                        <div className='media-links'>
                            <a className='social-link' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={telegram} alt="Twitter" className="social-icon" />
                            </a>
                        </div>
                        <div className='media-links'>
                            <a className='social-link' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Twitter" className="social-icon" />
                            </a>
                        </div>
                        <div className='media-links'>
                            <a className='social-link' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Twitter" className="social-icon" />
                            </a>
                        </div>
                        <div className='media-links'>
                            <a className='social-link' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={gmail} alt="Twitter" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="quick-offer-links">
                    <a href="/top-mobile-offers" className="top-offers-link">
                        Top Mobile Offers
                    </a>
                    <a href="/top-mobile-offers" className="top-offers-link">
                        Top Mobile Offers
                    </a>
                </div>
            </div>
            <div className="footer-text text-center mt-3">
                &copy; {new Date().getFullYear()} dealspakado.com. All rights reserved.
            </div>
            <div className='whatsapp'>
                <JoinWhatsApp />
            </div>
        </footer>
    );
};

export default Footer;
