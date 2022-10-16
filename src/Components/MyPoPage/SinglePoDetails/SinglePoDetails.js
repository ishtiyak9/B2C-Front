import React from 'react';
import ListOfItems from "./ListOfItems/ListOfItems";
import ListPoDetailsCard from "./ListPoDetailsCard/ListPoDetailsCard";

const SinglePoDetails = () => {
    return (
            <div>
                <ListPoDetailsCard></ListPoDetailsCard>
                <ListOfItems></ListOfItems>

            </div>

    );
};

export default SinglePoDetails;