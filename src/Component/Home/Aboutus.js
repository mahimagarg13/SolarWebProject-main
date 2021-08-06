import React from "react";
// import Dialog from '@material-ui/core/Dialog';
function Aboutus() {
    return (
        <div className="mt-5">

            <div className="container">
                <div className="flex-left">
                    <img className="f-l" src="/image/about.jpeg"   alt=""/>

                </div>
                <div className="flex-right">
                    <img className="head" src="/image/about.gif"  alt=""/>
                    <p className="p">Nyasa Energy System is  amongest the pioneer company in providing Quality Solar products, Solar EPC Services, Project Development, Rooftop Solutions, Solar Water Pumps, Solar Water Heater, Water Purifier, Water Softner + Conditioning System, Water Cooler, Inverterand Batteries. Products from Nyasa Energy System combine the best of technology and expertise to provide a wide range of products that give utmost purity and supreme quality
                  <br />
                  <br />
                    <a href="/about" className="btn a btn-outline-success">Read More</a></p>
                </div>
            </div>



        </div >


    );
}
export default Aboutus;