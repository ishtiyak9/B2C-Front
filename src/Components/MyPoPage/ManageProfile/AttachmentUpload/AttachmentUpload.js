import React from 'react';

const AttachmentUpload = () => {
    return (
        <div className="companyInfoWrapper authorizedCard" style={{height: '524px'}}>
            <div className= "customLoginBox">

                <div >
                    <h2 className="companyInfo">Attachments Upload</h2>
                </div>


                <form className='loginForm'>
                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel comInfoPadding'>CR Number </label> <br/>
                            <input type="number" id="login" className="fadeIn compInfoD1P1 dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>CR</label> <br/>
                            <input type="date" id="login" className="fadeIn compInfoD2P2 dividedBox1 dividedBox2 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel comInfoPadding'>Authorization Doc</label> <br/>
                            <input type="number" id="login" className="fadeIn compInfoD1P1 dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>ID Copy
                            </label> <br/>
                            <input type="date" id="login" className="fadeIn compInfoD2P2 dividedBox1 dividedBox2 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='emailLabel comInfoPadding'>VAT Registration</label> <br/>
                            <input type="number" id="password" className="fadeIn compInfoD1P1 dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'> Certificate</label> <br/>
                            <input type="number" id="password" className="fadeIn compInfoD2P2 dividedBox1 dividedBox2 dividedBox1P3" name="password" placeholder="•••••••"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className='emailLabel comInfoPadding'>Stamp (optional)</label> <br/>
                        <input type="number" id="password" className="fadeIn compInfoD1P1 dividedBox1 dividedBox1P3" name="password" placeholder="•••••••"/>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AttachmentUpload;