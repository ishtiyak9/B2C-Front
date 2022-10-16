import React from 'react';
import './RegistrationP3.css'
import {useStepper} from "../../Steppers/Context";
import {Link} from "react-router-dom";

const RegistrationP3 = () => {
    const {decrementCurrentStep} = useStepper();
    return (
        <div className="regP2Wrapper">
            <div className= "customLoginBox">

                <div >
                    <h2 className="loginTitle">Registration</h2>
                </div>


                <form className='loginForm'>
                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel'>CR Number </label> <br/>
                            <input type="text" id="crNumber" className="fadeIn dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>CR</label> <br/>
                            <input type="date" id="login" className="fadeIn dividedBox1 dividedBox2 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel'>Authorization Doc</label> <br/>
                            <input type="number" id="login" className="fadeIn dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>ID Copy
                            </label> <br/>
                            <input type="date" id="login" className="fadeIn dividedBox1 dividedBox2 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel'>VAT Registration</label> <br/>
                            <input type="number" id="password" className="fadeIn dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'> Certificate</label> <br/>
                            <input type="number" id="password" className="fadeIn dividedBox1 dividedBox2 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel'>Stamp (optional)</label> <br/>
                        <input type="number" id="password" className="fadeIn dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                    </div>

                    <div >

                        <div className="unstyled ">

                                <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox"
                                       value="value1"/>
                                    <label htmlFor="styled-checkbox-1">I’ve agreed to the terms and conditions of Purchase Order Platform
                                        for the possibility of registration </label>
                        </div>

                    </div>


                    <div className='backNextBtn'>
                        <div className='d-inline-flex'>
                            <input onClick={decrementCurrentStep} type="submit" className="fadeIn backButton" value="Back"/>
                            <Link className='removeLinkCss' to='/congratulations'><input  type="submit" className="fadeIn loginButton" value="Register"/></Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default RegistrationP3;