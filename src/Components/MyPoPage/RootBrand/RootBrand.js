import React from 'react';
import './RootBrand.css'
import rootBrandLogo from '../../../images/myPo/rootbandLogo.png'
import { Link } from 'react-router-dom';
import listInactive from '../../../images/myPo/listInactive.png'

const RootBrand = () => {
    return (
        <div className="rootCard">

                <img className='brandLogo' src={rootBrandLogo} alt="rootBrandLogo"/>
                <h2 className='brandTitle'>Root Brand </h2>
            <p className="brandSubTitle">Requester
            </p>
            <p className='brandText'> A wholesome farm owner in Montana. Upcoming gallery solo show in Germany... </p>

            <div className='MyPoList'>
                <ul>
                    <li><img src={listInactive} alt="listInactive1" className='listImage'/> <Link to="/myPo"  className='text-link' >My Po</Link></li>
                    <hr style={{width:"80%",border:'1px solid #E6E8EC'}}/>
                <li><img src={listInactive} alt="listInactive2"className='listImage'/> <Link to="/manageOffer"  className='text-link' >Manage Offer</Link></li>
                    <hr style={{width:"80%",border:'1px solid #E6E8EC'}}/>
                    <li><img src={listInactive} alt="listInactive3" className='listImage'/><Link to="/poHistory"  className='text-link' >PO History</Link></li>
                    <hr style={{width:"80%",border:'1px solid #E6E8EC'}}/>
                    <li><img src={listInactive} alt="listInactive4" className='listImage'/> <Link to="/manageProfile"  className='text-link' >ManageProfile</Link></li>
                    <hr style={{width:"80%",border:'1px solid #E6E8EC'}}/>
                    <li><img src={listInactive} alt="listInactive5" className='listImage'/><Link to="/people"  className='text-link' >People</Link></li>
                    <hr style={{width:"80%",border:'1px solid #E6E8EC'}}/>
                    <li><img src={listInactive} alt="listInactive6" className='listImage'/><Link to="/messageCenter"   className='text-link'>Message Center</Link></li>
                    <hr style={{width:"80%",border:'1px solid #E6E8EC'}}/>
                </ul>
            </div>
           <div className='createRoot'>
               <button className='createBtn'> <Link to="/createNewPo" >Create New Po</Link></button>
           </div>

        </div>
    );
};

export default RootBrand;