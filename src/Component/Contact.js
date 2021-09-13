import './Style.css';
import React from 'react';
import Newsletter from './Newsletter';
import Details from './Contactus/Details';
import Map from './Contactus/Map';
import  { useEffect } from 'react';


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Details />
            <Map />
            <Newsletter />
        </>
    );
}
export default Contact;