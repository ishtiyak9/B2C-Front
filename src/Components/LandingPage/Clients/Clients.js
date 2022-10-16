import React from 'react';
import './Clients.css'
const Clients = ({client}) => {
    return (
        <div className="col-md-2 col-sm-12  col-xs-12 partnersCustom">
            <div>
                <img className="customClientLogo" src={client.image} alt="client"/>
            </div>

        </div>
    );
};

export default Clients;