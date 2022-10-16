import React from 'react';
import './CongratulationBox.css'
import {Link} from "react-router-dom";

const CongratulationBox = () => {
    return (
        <div className="congratsWrapper">
            <div className= "customResetBox">

                <div >
                    <h2 className="congratsTitle">Congratulations!</h2>
                </div>

                <form className='loginForm'>

                    <div>
                     <p className='customApprovalText'>Your request for registration as a Requester has been received.
                         Kindly wait a bit for the Admin Approval.</p>
                    </div>

                    <Link className='removeLinkCss' to='/home'><input  type="submit" className="fadeIn loginButton" value="Continue"/></Link>
                </form>

            </div>
        </div>
    );
};

export default CongratulationBox;