import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="companyInfoWrapper contactWrapper">
            <div className= "customLoginBox">

                <form className='loginForm'>

                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding contactEmailMargin'>Email </label> <br/>
                        <input type="email" id="login" className="fadeIn companyInfoInput contactInput" name="login" placeholder="abc@example.com"/>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Address </label> <br/>
                        <input type="text" id="login" className="fadeIn companyInfoInput contactInput" name="login" placeholder="Your subject"/>
                    </div>

                    <div>
                        <label htmlFor="activity" className='emailLabel comInfoPadding'>Company Activities </label> <br/>
                        <textarea type="textarea  " id="activity" rows="4" cols="50" className="fadeIn textArea compInfoTextBox contactText" name="login" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </div>

                  <div className='BtnRight'>
                      <button className='completeBtn'>
                          Submit
                      </button>
                  </div>

                </form>

            </div>
        </div>
    );
};

export default ContactForm;