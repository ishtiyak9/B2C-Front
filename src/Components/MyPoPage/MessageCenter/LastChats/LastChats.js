import React from 'react';
import rootBrandLogo from "../../../../images/myPo/rootbandLogo.png";
import './LastChats.css'

const LastChats = () => {
    return (
        <div className="lastChatWrapper">
            <h2 className='lastChatTitle'>Last Chats</h2>

           <div className='lastChatBox'>
               <img className='profileIcon' src={rootBrandLogo} alt="rootBrandLogo"/>
               <div className='chatMain'>
                   <h2 className='profileName'>Sajeeb</h2>
                   <p className='chatText'>Lorem ipsum dolor ..</p>
               </div>
           </div>

        </div>
    );
};

export default LastChats;