import React, { useState } from 'react';
import "../App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';



function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className="Navbar">
            <div className="leftside"></div>
            <img src="/image/logo.png" alt="logo" className="navbar-logo" />

            <div className="rightside">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to="/" >Home</Link>
                    <Link to="/about" >About Us</Link>
                    <Link to="/product" >Product</Link>
                    <Link to="/service" >Services</Link>
                    <Link to="/portfolio" >Portfolio</Link>
                    <Link to="/contact" >Contact Us</Link>

                   
                </div>
                <button onClick={() => setShowLinks(!showLinks)} className="margin-right">
                    <MenuIcon />
                </button>
            </div>
          </div>
    



    );
}

export default Navbar
