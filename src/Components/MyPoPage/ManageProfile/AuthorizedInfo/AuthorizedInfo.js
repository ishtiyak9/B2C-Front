import React from 'react';
import './AuthorizedInfo.css'

const AuthorizedInfo = () => {
    return (
        <div className="companyInfoWrapper">
            <div className= "customLoginBox">
                <p className="companyInfo">Authorized Person’s Information</p>

                <form className='loginForm'>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Name </label> <br/>
                        <input type="text" id="login" className="fadeIn companyInfoInput" width='787px' name="login" placeholder="Eco focus"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>ID number </label> <br/>
                        <input type="number" id="login" className="fadeIn companyInfoInput" name="login" placeholder="2324523535"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Nationality </label> <br/>
                        <input type="text" id="login" className="fadeIn companyInfoInput" name="login" placeholder="Saudi"/>
                    </div>

                    <div>
                        <label htmlFor="phone" className='emailLabel comInfoPadding'>Phone</label> <br/>
                        <input type="number" id="login" className="fadeIn companyInfoInput" name="login" placeholder="345634636"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Email </label> <br/>
                        <input type="text" id="login" className="fadeIn companyInfoInput" name="login" placeholder="abc@example.com"/>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AuthorizedInfo;