import React from 'react';
import SendInvitation from "./ManageUsers/SendInvitation";
import ManageUsersList from "./ManageUsers/ManageUsersList";

const People = () => {
    return (
        <div>
            <SendInvitation></SendInvitation>
            <ManageUsersList></ManageUsersList>
        </div>
    );
};

export default People;