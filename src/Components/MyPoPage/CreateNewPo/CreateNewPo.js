import React from 'react';
import './CreateNewPo.css'
import ItemCard from "../ItemCard/ItemCard";

const CreateNewPo = () => {
    return (
       <>
           <div className="newPoWrapper">
               <div className= "customLoginBox">

                   <div >
                       <h2 className="newPoTitle">Create New PO</h2>
                   </div>
                   <hr style={{border: "1px solid #E6E8EC"}}/>
                   <h4 className='infoTitle'>General Information</h4>


                   <form className='newPoForm'>
                       <div className='d-flex'>
                           <div>
                               <label htmlFor="date" className='poFormBox1'>PO Start Date</label> <br/>
                               <input type="date" id="date" className="fadeIn poDivideBox1 " name="password" placeholder="•••••••"/>
                           </div>
                           <div>
                               <label htmlFor="date" className='divideBox2label'>PO End Date</label> <br/>
                               <input type="date" id="date" className="fadeIn poDivideBox1 poDividedBox2 " name="password" placeholder="•••••••"/>
                           </div>
                       </div>
                       <div className='d-flex'>
                           <div>
                               <label htmlFor="email" className='poFormBox1'>Payment Method</label> <br/>
                               <select id="gen" className='poDivideBox1 newPaymentInput '>
                                   <option value="summmer">Credit Card</option>
                                   <option value="winter">winter</option>
                                   <option value="working">working</option>
                                   <option value="road">road</option>
                               </select>

                               <div className="select-option">
                                   <div className="option "></div>
                               </div>
                           </div>
                           <div>
                               <label htmlFor="email" className='divideBox2label'>Payment Grace Period
                               </label> <br/>
                               <input type="text" id="gen" className="fadeIn poDivideBox1 poDividedBox2 " name="password" placeholder="30 days"/>
                           </div>
                       </div>

                       <div>
                           <label htmlFor="email" className='poFormBox1 select-option'>Select Main Category</label> <br/>
                           <select id="gen" className='poFormBox1  newOptionInput'>
                               <option value="summmer">Main Category</option>
                               <option value="winter">winter</option>
                               <option value="working">working</option>
                               <option value="road">road</option>
                           </select>

                           <div className="select-option">
                               <div className="option "></div>
                           </div>
                       </div>

                       {/*demo*/}


                       <div>
                           <label htmlFor="email" className='poFormBox1'>Title (This will be the main title of this PO)</label> <br/>
                           <input type="text" id="gen" className="fadeIn newPoInput " name="password" placeholder="Your title here..."/>
                       </div>
                       <div>
                           <label htmlFor="email" className='poFormBox1'>Description</label> <br/>
                           <input type="textarea" id="genTextArea"  rows="4" cols="50" className="fadeIn newPoTextArea" name="password" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                       </div>
                       <div>
                           <label htmlFor="email" className='poFormBox1'>Delivery place</label> <br/>
                           <input type="text" id="gen" className="fadeIn newPoInput " name="password" placeholder="Main category"/>
                       </div>

                       <div className='d-flex'>
                           <div>
                               <label htmlFor="email" className='divideBox1label'>VAT Registration</label> <br/>
                               <input type="file" id="gen" className="fadeIn customFileInput attachDivideBox1 poDividedBox3" name="password" placeholder="Upload file"/>
                           </div>
                           <div>
                               <label htmlFor="email" className='divideBox2label'> Certificate</label> <br/>
                               <input type="file" id="gen" className="fadeIn attachDivideBox1 attachDivideBox2 poDividedBox3" name="password" placeholder="Upload file"/>
                           </div>
                           <div>
                               <label htmlFor="email" className='divideBox2label'> Certificate</label> <br/>
                               <input type="file" id="gen" className="fadeIn attachDivideBox1 attachDivideBox2 poDividedBox3" name="password" placeholder="Upload file"/>
                           </div>
                       </div>
                   </form>
                   <div>
                       <ItemCard></ItemCard>
                       <ItemCard></ItemCard>
                   </div>

                   <h4 className='addItemTitle'>+ Add new item</h4>
                   <div className='resetSubmitBtn'>
                       <button className='backButton'>Reset</button>
                       <button className='completeBtn'>Submit</button>
                   </div>

               </div>
           </div>

       </>
    );
};

export default CreateNewPo;