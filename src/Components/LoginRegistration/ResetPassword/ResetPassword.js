import React from 'react';
import './ResetPassword.css'

const ResetPassword = () => {
    return (
        <div className="resetWrapper">
            <div className= "customResetBox">

                <div >
                    <h2 className="loginTitle">Reset Password</h2>
                </div>

                <form className='loginForm'>

                    <div>
                        <label htmlFor="email" className='emailLabel'>New Password </label> <br/>
                        <input type="password" id="password" className="fadeIn passInput" name="password" placeholder="•••••••"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Confirm Password </label> <br/>
                        <input type="password" id="password" className="fadeIn passInput" name="password" placeholder="•••••••"/>
                    </div>

                    <input type="submit" className="fadeIn loginButton" value="Reset"/>
                </form>

            </div>
        </div>
    );
};

export default ResetPassword;