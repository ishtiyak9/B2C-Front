import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';
import {useStepper} from "../../Steppers/Context";
const Registration = () => {

    const {incrementCurrentStep} = useStepper();
    return (
        <div className="regWrapper">
            <div className= "customLoginBox">

                <div >
                    <h2 className="loginTitle">Registration</h2>
                </div>


                <form className='loginForm'>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Company Name </label> <br/>
                        <input type="text" id="login" className="fadeIn loginInput" name="login" placeholder="Eco focus"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Address </label> <br/>
                        <input type="text" id="login" className="fadeIn loginInput" name="login" placeholder="Riyadh,Saudi Arabia"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Email </label> <br/>
                        <input type="text" id="login" className="fadeIn loginInput" name="login" placeholder="abc@example.com"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className='emailLabel'>Landline</label> <br/>
                        <input type="number" id="login" className="fadeIn loginInput" name="login" placeholder="345634636"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Password </label> <br/>
                        <input type="password" id="login" className="fadeIn passInput" name="password" placeholder="•••••••"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Confirm Password </label> <br/>
                        <input type="password" id="login" className="fadeIn passInput" name="password" placeholder="•••••••"/>
                    </div>

                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel'>CR Number </label> <br/>
                            <input type="number" id="login" className="fadeIn dividedBox1" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>CR Expiry Date</label> <br/>
                            <input type="date" id="login" className="fadeIn dividedBox1 dividedBox2" name="password" placeholder="•••••••"/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel'>Fax (Optional)</label> <br/>
                            <input type="number" id="password" className="fadeIn dividedBox1 " name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>VAT Registration Number</label> <br/>
                            <input type="number" id="password" className="fadeIn dividedBox1 dividedBox2" name="password" placeholder="•••••••"/>
                        </div>
                    </div>



                    <div>
                    <label htmlFor="activity" className='emailLabel'>Company Activities </label> <br/>
                    <textarea type="textarea" id="activity" rows="4" cols="50" className="fadeIn textArea" name="login" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                </div>

                   <div className='justify-content-center'>
                       <input onClick={incrementCurrentStep} type="submit" className="fadeIn loginButton" value="Next"/>
                   </div>
                </form>
                <div className='regRooter'>
                    <div id="formFooter" className='d-inline-flex' >
                        <p className="forgotPass">Already have an account?</p> <Link to='/login' className='registerText'>Log in</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;