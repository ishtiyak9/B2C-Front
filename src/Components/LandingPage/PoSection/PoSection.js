import React from 'react';
import PoCard from "../PoCard/PoCard";
import './PoSection.css'

const PoSection = () => {

   const  poArray= [1,2,3,4,5]
    return (
      <div className='po-container'>
          <div className='d-flex justify-content-between'>
              <h2 className='recentPo'>Recent PO</h2>
              <p className='viewAll'>View all</p>
          </div>
          <div className='container'>
              <div className='row'>
                  {
                      poArray.map(item => <PoCard item={item}></PoCard>)
                  }

              </div>
          </div>
      </div>
    );
};

export default PoSection;