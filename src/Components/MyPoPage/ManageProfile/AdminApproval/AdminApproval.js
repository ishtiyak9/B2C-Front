import React from 'react';
import './AdminApproval.css'

const AdminApproval = () => {
    return (
        <>
            <div className='updateBtnForAttachment'>
                <button type="button" className="completeBtn" data-toggle="modal" data-target="#exampleModal">
                    Update
                </button>
            </div>

            <div className="modal fade " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content modalContent modalCard">
                        <div className="modalHeader ">
                            <h5 className="modalTitle" id="exampleModalLabel">Request Submitted</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">

                            </button>
                        </div>
                        <div className="modalBody">
                            <p className='reqPara'>Your profile updates are submitted for review. Please wait for the approval. </p>
                        </div>
                        <div className="modalFooter">
                            <button type="button" className=" closeBtn"  data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AdminApproval;