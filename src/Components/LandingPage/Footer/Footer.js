import React from 'react';
import footerLogo from "../../../images/taamidLogo.png"
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import arrowBg from "../../../images/footer/rightArrowBG.png"

const Footer = () => {
    return (
        <>  <hr className="solid"/>
            <div className="footerContainer">
                <div className="row logoColumn">
                    <div className=" col-md-3 col-lg-3 col-sm-12 col-xs-12">
                        <img className="footerLogo" src={footerLogo} alt="footerLogo"/>
                        <p className="footerPara1">The New Creative Economy.</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                        <p className='footerHeaderPara'>Important Link</p>
                        <p className="footerSmallPara">Contact Us</p>
                        <p className="footerSmallPara">Who we are</p>
                        <p className="footerSmallPara">How it works</p>
                        <p className="footerSmallPara">Disclaimer </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                        <p className='footerHeaderPara'>Social Media</p>
                        <div>
                            <ul className="social-media list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon1" icon={faTwitter} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon2" icon={faLinkedin} /></a></li>
                            </ul>

                        </div>
                    </div>
                    <div className=" col-md-3 col-lg-3 col-sm-12 col-xs-12">
                        <p className='footerHeaderPara'>Join Newsletter</p>
                        <p className="newsCaption">Subscribe our newsletter to get more info about new PO & Deals.</p>
                        <div className=' newsLetter'>
                            <div className='d-flex'>
                                <input type="text" className='subscribeBtn' placeholder="Enter your mail..."/>
                                    <img className='rightArrow' src={arrowBg} alt="arrow"/>
                                    <span className='rightArrowSign'>&#8594;</span>
                            </div>
                        </div>

                    </div>
                </div>
                <hr/>
                <div className="copyRightCap">
                    <p >
                        Copyright © <span>{(new Date().getFullYear())}</span> PO. All rights reserved
                    </p>
                </div>

            </div>
        </>
    );
};

export default Footer;