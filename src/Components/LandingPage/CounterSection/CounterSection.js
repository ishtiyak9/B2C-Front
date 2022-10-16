import React from 'react';
import  group1 from '../../../images/counter/group.png'
import './CounterSection.css'

const CounterSection = ({count}) => {
    return (
            <div className="col-md-4 col-lg-4 col-sm-12 align-items-center">
                <div className="counterCard event"  style={{background: `${count.color}`}}>

                    <img id='sweetlandia' style={{
                        maxHeight: '100px',
                        maxWidth: '100px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        padding: '5px'
                    }} src={group1} alt="card-img"/>
                    <div className="card-body">
                        <h5 className="card-title">{count.amount}</h5>
                        <p className="card-text">{count.content}
                        </p>
                    </div>
                </div>

            </div>

    );
};

export default CounterSection;