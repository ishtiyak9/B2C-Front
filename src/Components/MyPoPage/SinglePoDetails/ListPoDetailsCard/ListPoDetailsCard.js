import React from 'react';
import './ListPoDetailsCard.css'
import shareIcon from '../../../../images/singlePoDetails/shareBtn.png'
import fileIcon from '../../../../images/singlePoDetails/fileAttachmentIcon.png'

const ListPoDetailsCard = () => {
    return (
        <div>
            <div className="poDetailsBoxCard">
                <div className="row">
                    <div className='justify-content-between d-flex'>
                        <h3 className='poDetailsTitle'>PO Details</h3>
                        <div className='d-flex justify-content-around'>
                            <button className='poNo customRadius'>PO NO: 00257</button>
                            <img className='customRoundIcon' src={shareIcon} alt="shareIcon1"/>
                            <img className='customRoundIcon' src={shareIcon} alt="shareIcon2"/>
                        </div>
                    </div>
                    <hr style={{border: "1px solid #E6E8EC"}}/>

                    <div className="col-md-8 col-sm-12">

                        <div className="justify-content-between">
                            <h3 className='PoBoxTitle'>Looking for some Electronic Accessories for Office</h3>
                            <p className='poSubTitle2'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
<br/>
                                <br/>

                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
<br/>
                                <br/>
                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable.</p>

                        </div>
                        <div className='d-flex img-upload'>
                                <label htmlFor="file">
                                    <img src={fileIcon} alt='fileIcon-img'/>
                                </label>
                                <input type="file" id="img" name="img" accept="image/*"/>
                                <input type="file" id="img" name="img" accept="image/*"/>
                        </div>

                            <div className="cardDetailsBox d-flex">
                                <button className="singleItemBoxName2 mb-3" >Mouse </button>
                                <button className="singleItemBoxName2 mb-3" >Electronic Accessories </button>
                            </div>
                        {/*<hr style={{transform:"rotate(90deg)", width: '100px'}}/>*/}

                    </div>


                    <div className="col-md-4 col-sm-12 poCardPart2">



                        <p className='poDetailsItem'> <span><img className='custDividerMargin' src={fileIcon} alt="fileIcon1"/></span><span className='spanTittle'>Offers Received:</span> <span className='output'>15</span></p>
                            <p><span><img className='custDividerMargin' src={fileIcon} alt="fileIcon8"/></span><span className='spanTittle'>PO Created by:</span> <span className='output'> Shan colman</span></p>

                            <p className='poDetailsItem'><span><img className='custDividerMargin' src={fileIcon} alt="fileIcon2"/></span><span className='spanTittle'>PO Start Date: </span> <span className='output'> July 28, 2021</span></p>
                            <p className='poDetailsItem'><span><img className='custDividerMargin' src={fileIcon} alt="fileIcon3"/></span><span className='spanTittle'>View:</span> <span className='output'>  25</span></p>
                            <p><span className='spanTittle'>Validity: </span> <span className='output'> 04 days</span></p>
                        <p className='poDetailsItem'><span><img className='custDividerMargin' src={fileIcon} alt="fileIcon4"/></span><span className='spanTittle'>View:</span> <span className='output'>  25</span></p>
                        <p className='poDetailsItem'><span><img className='custDividerMargin' src={fileIcon} alt="fileIcon5"/></span><span className='spanTittle'>View:</span> <span className='output'>  25</span></p>
                        <p className='poDetailsItem'><span><img className='custDividerMargin' src={fileIcon} alt="fileIcon6"/></span><span className='spanTittle'>View:</span> <span className='output'>  25</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListPoDetailsCard;