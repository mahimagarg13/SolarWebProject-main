// import React  from "react";

import Img9 from '../Img/solarizer4.jpeg';

function hybridsystem() {
    return (
        <div className="div">
            <p className="heading m">HEAT PUMP/SOLAR HYBRID SYSTEM FOR HOT WATER</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src="https://www.uniletsolar.com/wp-content/uploads/2019/05/Heat-Pump-Modified.png" alt="hpsv" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer Spring HPSV-500-13 </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="PDF's/Solarizer_Heat-Pump-Brochure.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" target="_blank" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://shop.emmvee.com/wp-content/uploads/2021/02/Spring-Hp-3-Panel-Left-2.png" alt="hpsh" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer Spring HPSH-300-09 </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="PDF's/Solarizer_Heat-Pump-Brochure.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" target="_blank" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.QYVuC_vffRObQKKT6UwCpAHaGJ?pid=ImgDet&rs=1" alt="hpv" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer Spring HPV-500-18</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="PDF's/Solarizer_Heat-Pump-Brochure.pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img9} alt="heatPump" />
                    <div className="card-body">
                        <h5 className="card-title">Heat Pumps for domestic as well as for  hotels , hospitals , hostel ,and Resorts </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="PDF's/HPA Leaflet -300-450.pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="Name*" name="name" required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Phone*" required name="phone" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="City" id="recipient-name" />
                </div>
            </form>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
                I authorize Nyasa Energy System to contact me and share offer with me
            </label>
        </div>

        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" data-bs-dismiss="modal" className="btn btn-success">Send Now</button>
        </div>
    </div>
</div>
</div>


            </div>
            </div>
        
    );
}
export default hybridsystem;