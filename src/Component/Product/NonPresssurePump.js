// // import React  from "react";
import Img10 from '../Img/100lpd.jpeg';
import Img11 from '../Img/150lpd.jpeg';
import Img12 from '../Img/200lpd.jpeg';
import Img33 from '../Img/250lpd.jpeg';
import Img34 from '../Img/300lpd.jpeg';
import Img35 from '../Img/500lpd.jpeg';

function nonpressurepump() {
    return (
        <div className="div">
            <p className="heading">Farmson Solar water Heater for Non pressurize application </p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src={Img10} alt="100lpd" />
                    <div className="card-body">
                        <h5 className="card-title">  100 lpd  </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/nonpressurize.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img11} alt="150lpd" />
                    <div className="card-body">
                        <h5 className="card-title"> 150 lpd  </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/nonpressurize.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                    <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img12} alt="200lpd" />
                    <div className="card-body">
                        <h5 className="card-title">200 lpd </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/nonpressurize.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img33} alt="250lpd" />
                    <div className="card-body">
                        <h5 className="card-title">250 lpd </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/nonpressurize.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img34} alt="300lpd" />
                    <div className="card-body">
                        <h5 className="card-title">300 lpd </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/nonpressurize.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img35} alt="500lpd" />
                    <div className="card-body">
                        <h5 className="card-title">500 lpd </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/nonpressurize.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
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
export default nonpressurepump;