import React from "react";
// import Img24 from '../Img/watercooler.jpeg';
import Img25 from '../Img/watercooler1.jpeg';
import Img26 from '../Img/watercooler2.jpeg';
import { Link } from 'react-router-dom';

function  Watercooler() {
    return(
<div className="watercooler div">
<p className="heading m">
    Water Cooler
</p>
<div className="d-flex flex-wrap text-center justify-content-center">
               

                <div className="card card-w">
                    <img className="card-img-top" src={Img25} alt="watercooler" />
                    <div className="card-body">
                        <h4 className="card-title"> Water cooler 1</h4>
                        <Link to="/PDF's/watercooler" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src={Img26} alt="watercooler" />
                    <div className="card-body">
                        <h4 className="card-title"> Water cooler 2</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/watercooler"  target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
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
                <input type="text" className="d-none form-control" placeholder="Water Cooler" id="recipient-name" />

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
            <Link to="/Product" className="btn-lg m-2 btn btn-dark">Back</Link>

        </div>

    );
    
}
export default Watercooler;