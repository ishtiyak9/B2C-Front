import React from 'react';
import './LandingPage.css'
import Banner from "./Banner/Banner";
import ClientsInfo from "./Clients/ClientsInfo";
import CounterInfo from "./CounterSection/CounterInfo";
import WorkingSection from "./WorkingSection/WorkingSection";
import PoSection from "./PoSection/PoSection";
import EmployeeSlider from "./EmployeeSlider/EmployeeSlider";

const LandingPage = () => {
    return (
        <>
            <div>
                <body className="custom-margin">
                <Banner></Banner>
            </body>
            <div className="customPartnerMargin custom-margin">
                <ClientsInfo></ClientsInfo>
            </div>
            <div className="customCounterMargin custom-margin">
                <CounterInfo></CounterInfo>
            </div>
            <div className="customWorkingMargin custom-margin">
                <WorkingSection></WorkingSection>
            </div>

                <div className=" custom-margin">
                    <EmployeeSlider></EmployeeSlider>
                </div>
                <div className="customPOMargin custom-margin">
                    <PoSection></PoSection>
                </div>
            </div>
        </>
    );
};

export default LandingPage;