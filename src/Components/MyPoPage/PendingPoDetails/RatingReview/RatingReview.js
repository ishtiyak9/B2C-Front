import React, {useState} from 'react';
import './RatingReview.css'
const RatingReview = () => {
    const [rating, setRating] = useState(0);
    return (
        <div className='pendingItemBoxCard'>
            <p className="reviewTitle" style={{color: ' #23262F', marginLeft: '0!important'}}>My Review & Rating</p>
            <div className=" d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <div>
                        <div className="d-flex">
                            <button>
                                <img src="http://propeller.in/components/list/img/40x40.png" className='avatar' width="40"
                                     height="40" alt='avatarCir' circle/>
                            </button>
                          <div>
                              <div className='d-flex'>
                                  <p className="cardTitle" style={{color: ' #23262F', marginRight: '0px!important'}}>DRM Co.</p>
                                  <p className="cardSubtitle" style={{color: ' #23262F', marginRight: '0px!important'}}>(Reviewed by Alex)</p>
                              </div>
                              <div className="media-body d-flex">

                                  {/*<span className='ratingForPendingPoItem '>5.0 (40 reviews)</span>*/}
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
                          </div>

                        </div>

                        <p className=
                               'reviewPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>
                    <div className='d-flex'>
                        <span className='reviewDate'>July 22, 2021</span>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default RatingReview;