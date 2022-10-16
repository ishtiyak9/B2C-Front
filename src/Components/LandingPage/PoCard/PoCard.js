import React, { useState } from 'react';
import './PoCard.css'
import shareIcon from '../../../images/card/shareIcon.png'
import heart from '../../../images/card/Heart.png'


const PoCard = () => {

    const [rating, setRating] = useState(0);
    return (

        <div className='col-md-6 col-xl-3 col-sm-12 col-lg-3 col-xs-12'>
            <div className="po-card">
                <div className='justify-content-between d-flex'>
                    <button className='poNo'>PO NO: 00257</button>

                    <div>
                        <img className='shareIcon' src={shareIcon} alt="shareIcon"/>
                        <img  style={{margin: '0 0 0 25px!important'}} src={heart} alt="shareIcon"/>
                    </div>
                </div>


                <div className=" d-flex flex-row justify-content-between titleBox">
                    <div className=" d-flex flex-row">
                        <button className="pmd-avatar-list-img">
                            <img src="http://propeller.in/components/list/img/40x40.png" className='avatar' width="40"
                                 height="40" alt='po-avatar' circle/>
                        </button>
                        <div className="media-body">
                            <p className="cardTitle">Zara</p>
                            <p className="cardSubtitle">Riyadh</p>
                        </div>
                    </div>

                    <div>
                        <p className='rating d-flex justify-content-end'>5.0</p>
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= rating ? "on" : "off"}
                                    onClick={() => setRating(index)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                            );
                        })}
                    </div>

                </div>

                <div className="cardBody">
                    <button className="card-subtitle-button mb-3">Office Accessories</button>
                    <p className="card-texts">Looking for Chair for my workstation immediately....</p>
                </div>
                <hr/>

                <div className='d-flex justify-content-between viewsBox'>
                    <p><span className='spanTittle'>Views:</span> <span className='output'>122</span></p>
                    <p><span className='spanTittle'>Validity:</span> <span className='output'>124 days</span></p>

                </div>

            </div>
        </div>
    );
};

export default PoCard;