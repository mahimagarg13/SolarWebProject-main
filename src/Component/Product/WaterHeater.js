

function WaterHeater() {
    return (
        <div className="div">
            <p className="heading m">Solar hot water systems </p>
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src="https://th.bing.com/th/id/R.d1abe76fc07bfea902eb3b5cb7a8ce91?rik=ebse0CgKFK%2fVmg&riu=http%3a%2f%2fwww.rrtechnologies.co.in%2fimages%2fspring_200lpd.png&ehk=SpRp60hXXJIERhvgZrdCRpJe6v9Ulxr69eACZ%2fDWF5s%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> Solarizer Spring </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/spring.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/DF/II/EA/SELLER-2793594/ultra-low-p1c5v2vqjq1qit1ritjq84hm1q2o-500x500.jpg" alt="ultra" />
                    <div className="card-body">
                        <h5 className="card-title"> Solarizer ULTRA </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/ultra.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/MY/BK/MY-2351388/emmvee-solarizer-value-solar-hot-water-system-500x500.jpg" alt="value" />
                    <div className="card-body">
                        <h5 className="card-title">Solarizer VALUE </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="/PDF's/value.pdf" className="btn mb-2  btn-outline-success">VIEW DETAILS</a>
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
export default WaterHeater;