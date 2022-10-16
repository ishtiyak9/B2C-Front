import React from 'react';
import './DeleteUser.css'
import deleteBtn from '../../../../../images/people/deleteBtn.png'

const DeleteUser = () => {
    return (
        <>
            <button type="button" data-toggle="modal" data-target="#exampleModal1">
                <img src={deleteBtn} alt="deleteBtn"/>
            </button>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modalContent">
                        <div className="modalHeader">
                            <h5 className="modalTitle" id="exampleModalLabel1">Action Required</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">

                            </button>
                        </div>
                        <div className="modalBody">
                            <p className='reqPara'>Do you want to Delete this user? You can’t able to undo
                                this if you confirm.</p>
                        </div>
                        <div className="modalFooter2">
                            <button type="button" className=" cancelBtn"  data-dismiss="modal">Cancel</button>
                            <button type="button" className="confirmBtn">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteUser;