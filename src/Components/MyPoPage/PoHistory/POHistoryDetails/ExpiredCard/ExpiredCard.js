import React from 'react';

const ExpiredCard = () => {
    return (
        <div className='declineExpiredCard' >
            <p className='crossSign'>*</p>
            <p className='declineText'>This PO has been Expired!</p>

        </div>
    );
};

export default ExpiredCard;