
import Img13 from '../Img/ongrid.jpeg';
import Img14 from '../Img/offgrid.jpeg';

function rooftop() {
    return (
        <div className="div">
            <p className="heading">Solar Rooftop</p>
            <div className="d-flex flex-wrap  justify-content-center">
                <div className="card text-center card-w" >
                    <img className="card-img-top" src={Img13} alt="ongrid" />
                    <div className="card-body">
                        <h5 className="card-title">ONGRID POWER PACK </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card text-center card-w">
                    <img className="card-img-top" src={Img14} alt="offgrid" />
                    <div className="card-body">
                        <h5 className="card-title">OFFGRID POWER PACK </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn mb-2 btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

              

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <input type="text" className="form-control" placeholder="Name*" name="name" required/>
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
export default rooftop;