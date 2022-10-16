import React from 'react';
import banner from '../../../images/banner/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-7 col-sm-12  bannerMargin">
                    <p className='timeText'>Save your time with po</p>
                    <h1 className='headerText'>Find the Perfect Service </h1>
                        <p className='headerPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <div>
                            <button className='readBtn'>Read More</button>
                            <button className="discoverBtn">Discover</button>
                        </div>
                </div>
                <div className="col-md-5  col-sm-12 bannerImgMargin">
                    <img className="bannerImg img-fluid" src={banner} alt="banner"/>
                </div>
            </div>

        </div>
    );
};

export default Banner;