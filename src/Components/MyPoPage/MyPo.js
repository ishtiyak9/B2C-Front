import React from 'react';
import './MyPo.css'
import listView from '../../images/myPo/listView.png'
import gridView from '../../images/myPo/gridView.png'
import PoBoxCard from "./PoBoxCard/PoBoxCard";

const MyPo = () => {

    const poBox = [1,2,3]
    return (
      <>
                      <div className='myPoView'>
                          {
                              window.location.href === `http://localhost:3000/myPo`? (
                                  <>
                                      <h3 className='customMyPoTitle'>My PO</h3>
                                      <div className='d-flex'>
                                          <img className='customList' src={listView} alt="listView"/>
                                          <img className='customGrid' src={gridView} alt="gridView"/>
                                      </div>
                                  </>

                              )
                                  :
                                  (
                                    <>
                                        <h3 className='customMyPoTitle1'>Manage Offer</h3>
                                        <div>
                                            <select id="gen" className='filteringButton '>
                                                <option value="pending">Filtering by Pending</option>
                                                <option value="accepted">Filtering by Accepted</option>
                                            </select>

                                            <div className="select-option">
                                                <div className="option "></div>
                                            </div>
                                        </div>
                                    </>
                                  )
                          }

                      </div>
                      <div>
                          {
                              poBox.map(eachBox => <PoBoxCard eachBox={eachBox}></PoBoxCard>)
                          }
                      </div>


              {/*<div>*/}
              {/*    <PendingPoDetails></PendingPoDetails>*/}
              {/*</div>*/}
      </>
    );
};

export default MyPo;