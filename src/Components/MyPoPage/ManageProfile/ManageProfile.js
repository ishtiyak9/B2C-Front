import React from 'react';
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import AuthorizedInfo from "./AuthorizedInfo/AuthorizedInfo";
import AttachmentUpload from "./AttachmentUpload/AttachmentUpload";
import AdminApproval from "./AdminApproval/AdminApproval";

const ManageProfile = () => {
    return (
        <div>
            <CompanyInformation></CompanyInformation>
            <AuthorizedInfo></AuthorizedInfo>
            <AttachmentUpload></AttachmentUpload>
            <AdminApproval></AdminApproval>
        </div>
    );
};

export default ManageProfile;