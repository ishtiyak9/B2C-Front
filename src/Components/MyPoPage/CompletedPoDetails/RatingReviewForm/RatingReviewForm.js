import React, {useState} from 'react';
import './RatingReviewForm.css'

const RatingReviewForm = () => {
    const [rating, setRating] = useState(0);
    return (
        <div className='declineExpiredCard' >
            <p className='declineText'>Your Review & Rating</p>
            <div className="media-body d-flex justify-content-center">

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
            <input type="textarea" className='customReviewBox' placeholder='Write your review here....' />

            <div className='submitReview'>
                <button className='completeBtn'> Submit</button>
            </div>

        </div>
    );
};

export default RatingReviewForm;