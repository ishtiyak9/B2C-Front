import React from 'react';
import Hello from './Hello';
import LastChats from "./LastChats/LastChats";
import './MessageCenter.css'



const MessageCenter = () => {

    return (
        <div className='customMessageCenter'>
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <Hello/>
                </div>
                <div className="col-md-4 col-sm-12">
                    <LastChats></LastChats>
                </div>
            </div>


        </div>
    );
};

export default MessageCenter;