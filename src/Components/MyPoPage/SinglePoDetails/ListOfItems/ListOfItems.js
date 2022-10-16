import React from 'react';
import ListItemCard from "./ListItemCard";

const ListOfItems = () => {
    return (
        <div className='listContainer'>
            <h4 className='infoTitle' style={{marginTop: '30px', marginBottom: '30px'}}>List of Items</h4>
            <ListItemCard></ListItemCard>
            <ListItemCard></ListItemCard>
        </div>
    );
};

export default ListOfItems;