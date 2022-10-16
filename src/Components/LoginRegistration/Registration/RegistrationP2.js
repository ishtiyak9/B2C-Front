import React from 'react';
import './RegistrationP2.css'
import {useStepper} from "../../Steppers/Context";

const RegistrationP2 = () => {
    const {incrementCurrentStep, decrementCurrentStep} = useStepper();
    return (
        <div className="regP2Wrapper">
            <div className= "customLoginBox">

                <div >
                    <h2 className="loginTitle">Registration</h2>
                </div>


                <form className='loginForm'>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Name </label> <br/>
                        <input type="text" id="login" className="fadeIn loginInput" name="login" placeholder="Sajeeb"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Id Number </label> <br/>
                        <input type="number" id="login" className="fadeIn loginInput" name="login" placeholder="36364636"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Nationality </label> <br/>
                        <input type="text" id="login" className="fadeIn loginInput" name="login" placeholder="saudi"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className='emailLabel'>Phone</label> <br/>
                        <input type="number" id="login" className="fadeIn loginInput" name="login" placeholder="345634636"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Email </label> <br/>
                        <input type="email" id="login" className="fadeIn passInput" name="password" placeholder="•••••••"/>
                    </div>


                    <div className='backNextBtn'>
                        <div className='d-inline-flex'>
                            <input onClick={decrementCurrentStep} type="submit" className="fadeIn backButton" value="Back"/>
                            <input onClick={incrementCurrentStep} type="submit" className="fadeIn loginButton" value="Next"/>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default RegistrationP2;