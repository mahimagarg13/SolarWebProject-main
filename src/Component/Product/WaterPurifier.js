import React  from "react";
import { Link } from 'react-router-dom';

function  waterPurifier() {
    return (
        <div className="div">
            <p className="heading m">Solar Water Purifier</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top " src="https://www.ozeanro.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/w/o/wooden3.jpg" alt="purifier1" />
                    <div className="card-body">
                        <h4 className="card-title"> Water Purifier </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/HWS Booklet 2019_A5 SIZE_10-10-19 (2).pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
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
                <input type="text" className="d-none form-control" placeholder="Water Purifier" id="recipient-name" />

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
export default  waterPurifier;