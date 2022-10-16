import React from 'react';
import './CompanyInformation.css'

const CompanyInformation = () => {
    return (
        <div className="companyInfoWrapper">
            <div className= "customLoginBox">
                    <p className="companyInfo">Company Information</p>

                <form className='loginForm'>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Company Name </label> <br/>
                        <input type="text" id="login" className="fadeIn companyInfoInput" width='787px' name="login" placeholder="Eco focus"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Address </label> <br/>
                        <input type="text" id="login" className="fadeIn companyInfoInput" name="login" placeholder="Riyadh,Saudi Arabia"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Email </label> <br/>
                        <input type="text" id="login" className="fadeIn companyInfoInput" name="login" placeholder="abc@example.com"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className='emailLabel comInfoPadding'>Landline</label> <br/>
                        <input type="number" id="login" className="fadeIn companyInfoInput" name="login" placeholder="345634636"/>
                    </div>

                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel comInfoPadding'>CR Number </label> <br/>
                            <input type="number" id="login" className="compInfoD1P1 dividedBox1" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>CR Expiry Date</label> <br/>
                            <input type="date" id="login" className="fadeIn dividedBox1 compInfoD2P2" name="password" placeholder="•••••••"/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel comInfoPadding'>Fax (Optional)</label> <br/>
                            <input type="number" id="password" className="fadeIn compInfoD1P1 dividedBox1 " name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>VAT Registration Number</label> <br/>
                            <input type="number" id="password" className="fadeIn compInfoD1P1 dividedBox1 compInfoD2P2" name="password" placeholder="•••••••"/>
                        </div>
                    </div>



                    <div>
                        <label htmlFor="activity" className='emailLabel comInfoPadding'>Company Activities </label> <br/>
                        <textarea type="textarea  " id="activity" rows="4" cols="50" className="fadeIn textArea compInfoTextBox" name="login" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default CompanyInformation;