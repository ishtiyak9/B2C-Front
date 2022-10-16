import React from 'react';
import DeclineCard from "./POHistoryDetails/DeclineCard/DeclineCard";
import HistoryCard from "./HistoryCard/HistoryCard";
import ExpiredCard from "./POHistoryDetails/ExpiredCard/ExpiredCard";

const PoHistory = () => {
    return (
        <div>
            <ExpiredCard></ExpiredCard>
            <DeclineCard></DeclineCard>
            <HistoryCard></HistoryCard>
        </div>
    );
};

export default PoHistory;