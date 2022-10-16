import React from 'react';
import './AddressBox.css'

const AddressBox = () => {
    return (
        <div className='addressWrapper'>
            <h4 className='infoTitle paddingForDisclaimer'>Head Office</h4>
            <h6> Address</h6>
            <p className='addressText'>Level 36 <br/>Grosvenor Place 225 George Street <br/>
            Sydney, NSW 2000 Australia</p>

            <h6>Phone</h6>
            <p className='addressText'>2354636
            </p>

            <h6> Email</h6>
            <p className='addressText'>support@ewn.com</p>

        </div>
    );
};

export default AddressBox;