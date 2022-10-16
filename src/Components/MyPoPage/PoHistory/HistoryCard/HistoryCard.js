import React from 'react';
import './HistoryCard.css'

const HistoryCard = () => {

    const orders= [1,2,3,4,5]


    const statusBtnStyles = {
        color: "#2B3990"

    }

    if ("status" === "Pending") {
        statusBtnStyles.background = "#FFE3E3"
        statusBtnStyles.color = "#FF4545"
    } else if("status" === "On Going"){
        statusBtnStyles.background = "#ffe5c7"
        statusBtnStyles.color = "#FFBD3E"
    } else if ("status" === "Completed") {
        statusBtnStyles.background = "#C6FFE0"
        statusBtnStyles.color = "#009444"
    }

    return (

        <div className='row'>
            <div className="historyContainer">
                <div className='historyList' style={{overflowX:"auto"}}>
                    <table className='table' id='historyChart'>
                        <thead className='custThread'>
                        <tr className='customTr'>
                            <th scope='col' >PO No.</th>
                            <th scope='col' >Items</th>
                            <th scope='col'>Supplier</th>
                            <th scope='col'>PO Start Date </th>
                            <th scope='col'>PO End Date</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Payment Method</th>

                        </tr>
                        </thead>
                        <tbody className='customTBody'>
                        {
                            orders.length === 0
                                ?
                                <div className="spinner-border text-success text-center" style={{ width: "3rem", height: "3rem" }} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                :
                                orders.map(order =>
                                    <tr key={order._id}  className="customTr">
                                        <td>23456</td>
                                        <td>01</td>
                                        <td>Omar</td>
                                        <td>Jan 12, 2021</td>
                                        <td>Jan 12, 2021</td>
                                        <td  style={statusBtnStyles}>Completed</td>
                                        <td>Credit Card</td>

                                    </tr>)
                        }

                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
};

export default HistoryCard;