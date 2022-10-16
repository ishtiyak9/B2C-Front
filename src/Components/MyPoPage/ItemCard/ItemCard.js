import React from 'react';
import './ItemCard.css'

const ItemCard = () => {
    return (
        <div className="itemCard">
            <div className= "customLoginBox">

                <hr style={{border: "1px solid #E6E8EC"}}/>
                <h4 className='infoTitle'>Item No. 01</h4>


                <form className='newPoForm'>
                    <div>
                        <label htmlFor="email" className='poFormBox1'>Item Name</label> <br/>
                        <input type="text" id="gen" className="fadeIn newPoInput " name="password" placeholder="A4tech Computer Mouse"/>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <label htmlFor="email" className='poFormBox1'>Subcategory</label> <br/>
                            <select id="gen" className='poDivideBox1 newPaymentInput '>
                                <option value="summmer">Select Subcategory</option>
                                <option value="winter">winter</option>
                                <option value="working">working</option>
                                <option value="road">road</option>
                            </select>

                            <div className="select-option">
                                <div className="option "></div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className='divideBox2label'>Quantity
                            </label> <br/>
                            <input type="number" id="gen" className="fadeIn poDivideBox1 poDividedBox2 " name="password" placeholder="30"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className='poFormBox1'>Description</label> <br/>
                        <input type="textarea" id="genTextArea"  rows="4" cols="50" className="fadeIn newPoTextArea" name="password" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default ItemCard;