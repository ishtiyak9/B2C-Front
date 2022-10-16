import React from 'react';
import CounterSection from "./CounterSection";

const countData=[{

    amount: "10,587",
    content: "Small & Medium Enterprises",
    color : "#E5FFF1",

},
    {

        amount: "1,25,495",
        content: "Total Anticipated Business",
        color :" #FFF5D9",
    },
    {

        image:"group2",
        amount: "10,587",
        content: "Total Earned",
        color :"#EEF1FF",
    },
]


const CounterInfo = () => {

    return (
        <section className="container-fluid ">
            <div className="row">
                {
                    countData.map((count,index) => <CounterSection count={count} key={index}/>)
                }
            </div>
        </section>
    );
};

export default CounterInfo;