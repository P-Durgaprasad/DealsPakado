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
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="footer-logo">
                    <img src={logo} alt="www.dealspakado.com" className="logo-img" />
                    <div className='slogan'>
                        <p className="logo-text quick-search">Quick Search</p>
                        <hr className="slogan-separator" />
                        <p className="logo-text  time-saver">Time Saver</p>
                        <hr className="slogan-separator" />
                        <p className="logo-text  money-saver">Money Saver</p>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="social-links">
                    </div>
                </div>
                <div className="quick-offer-links">

                </div>
            </div>
            <div className="footer-text text-center mt-3">
                &copy; {new Date().getFullYear()} dealspakado.com. All rights reserved.
            </div>
            <div className='follow-on social-media'>
                {/* <p className='follow-on'>Follow on</p> */}
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
