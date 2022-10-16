import React from 'react';
import './PoBoxCard.css'
import { useHistory } from 'react-router-dom';

const PoBoxCard = () => {
    const history = useHistory()
    const someEventHandler = event => {
        history.push({
            pathname: '/myPo:singlePoDetails',
            search: '?query=singlePoDetails',
            state: { detail: 'details' }
        });
    };

    return (
        <div>
            <div className="poBoxCard" onClick={someEventHandler} >
                <div className='justify-content-between d-flex'>
                    <button className='poNo'>PO NO: 00257</button>
                </div>

                <div className="justify-content-between">
                   <h3 className='PoBoxTitle'>Looking for some Electronic Accessories for Office</h3>
                    <p className='PoSubTitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo...</p>
                </div>

                <div className="cardBoxBody">
                    <button className="poCardSubBtn mb-3">Office Accessories </button>
                    <button className="poCardSubBtn mb-3">Office Accessories</button>
                </div>
               <div className='CardDetails'>
                   <div className='d-flex'>
                       <p className='spanItem'><span className='spanTittle'>Offers Received:</span> <span className='output'>15</span></p>
                       <p><span className='spanTittle'>PO Created by:</span> <span className='output'> Shan colman</span></p>

                   </div>
                   <div className='d-flex '>
                       <p className='spanViewItem'><span className='spanTittle'>PO Start Date: </span> <span className='output'> July 28, 2021</span></p>
                       <p className='spanViewItem'><span className='spanTittle'>View:</span> <span className='output'>  25</span></p>
                       <p><span className='spanTittle'>Validity: </span> <span className='output'> 04 days</span></p>

                   </div>
               </div>

            </div>
        </div>
    );
};

export default PoBoxCard;