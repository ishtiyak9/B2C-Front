import React from 'react';
import air from '../../../images/clients/air.png'
import ms from '../../../images/clients/ms.png'
import Clients from "./Clients";
const clientsData=[{

    image:ms,
},
    {

        image:air,
    },
    {

        image:ms,
    },
    {

        image:air,
    },{

        image:ms,
    },
    {

        image:air,
    },


]


console.log(clientsData)

const ClientsInfo = () => {

    return (
        <section className="container-fluid">
            <div className="row">
                {
                    clientsData.map((client,index) => <Clients client={client} key={index}/>)
                }
            </div>
        </section>
    );
};

export default ClientsInfo;