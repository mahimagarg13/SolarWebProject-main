import './Style.css';
import React from 'react';
import Newsletter from './Newsletter';
import Details from './Contactus/Details';
import Map from './Contactus/Map';

function Contact() {
    return (
        <>
            <Details />
            <Map />
            <Newsletter />
        </>
    );
}
export default Contact;