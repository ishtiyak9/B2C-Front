import React, {useState} from 'react';
import './PendingPoDetails.css'
import RatingReview from "./RatingReview/RatingReview";

const PendingPoDetails = () => {
    const items = [1,2,3,4]
    const [rating, setRating] = useState(0);
    return (
        <>
            <div className='pendingItemBoxCard'>

                <div className=" d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row">
                        <div>
                            <div className="d-flex">
                                <button>
                                    <img src="http://propeller.in/components/list/img/40x40.png" className='avatar' width="40"
                                         height="40" alt='avatarCircle' circle/>
                                </button>
                                <div>
                                    <p className="cardTitle" style={{color: ' #23262F'}}>Arlene McCoy</p>
                                    <p className="cardSubtitle" style={{color: ' #23262F'}}>Riyadh</p>
                                </div>
                            </div>

                            <div className="media-body d-flex">

                                <span className='ratingForPendingPoItem '>5.0 (40 reviews)</span>
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="buttonForStar"
                                            key={index}
                                            className={index <= rating ? "on" : "off"}
                                            onClick={() => setRating(index)}
                                        >
                                            <span className="star">&#9733;</span>
                                        </button>
                                    );
                                })}

                            </div>
                            <p className=
                                   'singleItemSubTitle' style={{marginLeft: '0px'}}>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany...</p>

                        </div>

                    </div>
                    <div className='d-flex'>
                        <p className='pendingPoItemDividedP2'>p</p>
                        <p className='pendingPoItemDividedP2'>p</p>
                    </div>

                </div>
                <hr style={{marginBottom: '30px', border: "1px solid #E6E8EC"}}/>
                <div className="singleListItemCard m-auto">
                    <div className="justify-content-between">
                        <h3 className='PoBoxTitle' style={{marginLeft: "20px"}}>Looking for some Electronic Accessories for Office</h3>
                        <p className='singleItemSubTitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo...</p>

                    </div>
                    <div className='pendingPoUl'>
                        <ul>
                            {
                                items.map(item => <li item={item}> <span className='itemTitle ' style={{fontWeight: 'bold', marginRight: '0'}} >Quantity-</span>  <span className='poItemQuant' >
                                 14</span></li>)
                            }

                        </ul>
                    </div>

                    <div className="cardBoxBody d-flex">
                        <button className="singleItemNameBox mb-3" >Mouse sdffddb </button>
                    </div>

                    <hr style={{border: "1px solid #E6E8EC"}}/>
                    <div className='pendingPoUl'>
                        <ul>
                            {
                                items.map(item => <li item={item}> <span className='itemTitle ' style={{fontWeight: 'bold', marginRight: '0'}} >Name-</span>  <span className='itemTitle' >
                                   Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span></li>)
                            }

                        </ul>
                    </div>
                </div>
                <div className="singleListItemCard pendingDetailsTotalCard m-auto">
                    <h2 className='grandTotal'>Grand Total - SAR  20,500 <span className='vatCaption'> *VAT Exclusive</span></h2>
                </div>
                <div className='totalContainer'>
                    <div>
                        <button className='completeBtn ' type="button"> Complete</button>
                    </div>
                </div>
            </div>

            <div>
                <RatingReview></RatingReview>
            </div>
        </>
    );
};

export default PendingPoDetails;