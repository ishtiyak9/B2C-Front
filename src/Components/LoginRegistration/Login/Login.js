import React from 'react';
import './Login.css'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="wrapper">
            <div className= "customLoginBox">

                <div >
                   <h2 className="loginTitle">Login</h2>
                </div>


                <form className='loginForm'>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Email </label> <br/>
                        <input type="text" id="login" className="fadeIn loginInput" name="login" placeholder="abc@example.com"/>
                    </div>
                    <div>
                        <div className='d-flex forgetTitle'>
                            <label htmlFor="email" className='emailLabel'>Password </label> <br/>
                            <label htmlFor="forget" className='forgetOuterSpan'> <Link className='forgetSpan' to='/forgetPassword'> Forgot Password? </Link></label> <br/>
                        </div>
                        <input type="password" id="password" className="fadeIn passInput" name="password" placeholder="•••••••"/>
                    </div>
                            <input type="submit" className="fadeIn loginButton" value="Log In"/>
                </form>

                <div className='regRooter'>
                    <div id="formFooter" className='d-inline-flex' >
                        <p className="forgotPass">Don’t have an account?</p> <Link to='/signup' className='registerText'>Register</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;