import './Style.css';
import React from 'react';
import Ourservices from "./Services/Ourservices";
import Offer from "./Home/Offer";
import Advantage from './Services/Advantage';
import Counter from './Home/Counter';

function Service() {
    return (
        <>
            <Ourservices />
            <Offer />
            <Counter />
            <Advantage />

        </>
    );
}
export default Service;