import './Style.css';
import React from 'react';
import Ourservices from "./Services/Ourservices";
import Advantage from './Services/Advantage';
import Counter from './Home/Counter';
import  { useEffect } from 'react';

function Service() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Ourservices />
            <Counter />
            <Advantage />

        </>
    );
}
export default Service;