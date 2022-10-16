import React from 'react';
import './SendInvitation.css'

const SendInvitation = () => {
    return (
        <div className="companyInfoWrapper sendInviteCard" style={{height: '524px'}}>
            <div className= "customLoginBox">

                <div >
                    <h2 className="peopleTitle">Attachments Upload</h2>
                </div>


                <form className='loginForm'>
                    <div className='d-flex userDiv'>
                        <div>
                            <label htmlFor="email" className='sendInviteBox2 ml-4' >User’s Email
                            </label> <br/>
                            <input type="email" id="gen" className="fadeIn poDivideBox1 " name="password" placeholder="abc@example.com"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='sendInviteBox2'>User’s Role</label> <br/>
                            <select id="gen" className='poDivideBox1 newPaymentInput inviteCustomMargin'>
                                <option value="summmer">User’s Role</option>
                                <option value="winter">winter</option>
                                <option value="working">working</option>
                                <option value="road">road</option>
                            </select>

                            <div className="select-option">
                                <div className="option "></div>
                            </div>
                        </div>

                    </div>
                    <div className='totalContainer'>
                        <button className='completeBtn  mr-4'> Send</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default SendInvitation;