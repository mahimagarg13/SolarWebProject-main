import { Link } from 'react-router-dom';

// import Img18 from '../Img/purple.jpeg'
function Softnersystem() {
    return (
        <div className="div">
            <p className="heading m">Solar  Water Softner System</p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2020/10/PO/SI/AC/101263134/zero-b-water-softener-500x500-500x500.jpg" alt="ngma" />
                    <div className="card-body">
                        <h4 className="card-title">Zero B Manual Softner </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/FM/HT/NH/SELLER-25550021/zero-b-auto-soft-3-500x500.jpg" alt="ngmf" />
                    <div className="card-body">
                        <h4 className="card-title">Zero B Autosoft - 3 & 6 </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button
                        
                        className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.fLlrgLUDwmWFDLOvU0qT1AHaHa?w=181&h=180&c=7&r=0&o=5&pid=1.7" alt="zeroB" />
                    <div className="card-body">
                        <h4 className="card-title">NGMA Carbon Filter</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/XD/GI/MQ/SELLER-36825996/auto-sand-500x500.jpg" alt="zeroBpurple" />
                    <div className="card-body">
                        <h4 className="card-title">Zero B Auto Sand Filter </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
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
                                    <input type="text" className="d-none form-control" placeholder="Solar Water Softner System" id="recipient-name" />

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
export default Softnersystem;