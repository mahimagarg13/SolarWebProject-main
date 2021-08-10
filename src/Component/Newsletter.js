import 'bootstrap/dist/css/bootstrap.min.css';
const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: "0.1px",
        width: "100%",
        margin: 0
      }}
    />
  );
function Newsletter() {
    return (
        <div className="nl">
            <div className="container ">
                <div className="f-L">
                    <p className="nl-text">Get Update from Newsletter</p>
                </div>
                <div className="f-R">
                    <div className="nl-box input-group mb-3">
                        <input type="text" className="form-control form" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn  btn-outline-success" type="button" id="button-addon2">Subscribe Now</button>
                    </div>

                </div>
    

            </div>
            <ColoredLine color="gray" />


        </div>
        


    );
}
export default Newsletter;