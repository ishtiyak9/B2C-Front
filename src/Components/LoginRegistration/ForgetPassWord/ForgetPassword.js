import React from 'react';
import './ForgetPassWord.css'
const ForgetPassword = () => {
    return (
        <div className="forgetWrapper">
            <div className= "customForgetBox">

                <div >
                    <h2 className="loginTitle">Forgot Password</h2>
                </div>

                <form className='loginForm'>

                   <div>
                       <label htmlFor="email" className='emailLabel'>Email </label> <br/>
                       <input type="text" id="login" className="fadeIn loginInput" name="login" placeholder="abc@example.com"/>
                   </div>

                    <input type="submit" className="fadeIn loginButton" value="Send"/>
                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;