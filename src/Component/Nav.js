import React, { useState } from 'react';
import "../App.css";
import MenuIcon from '@material-ui/icons/Menu';



function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className="Navbar">
            <div className="leftside"></div>
            <img src="/image/logo.png" alt="logo" className="navbar-logo" />

            <div className="rightside">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/product">Product</a>
                    <a href="/service">Services</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)} className="margin-right">
                    <MenuIcon />
                </button>
            </div>
          </div>
    



    );
}

export default Navbar
