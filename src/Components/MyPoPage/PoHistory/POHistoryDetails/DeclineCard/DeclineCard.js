import React from 'react';
import './DeclineCard.css'

const DeclineCard = () => {
    return (
        <div className='declineExpiredCard' >
            <p className='crossSign'>*</p>
            <p className='declineText'>This offer has been declined!</p>

        </div>
    );
};

export default DeclineCard;