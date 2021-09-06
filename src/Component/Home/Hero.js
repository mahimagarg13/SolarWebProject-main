import { Link } from 'react-router-dom';


function Hero() {
    return (
        <div className="container-fluid margin-top  d-flex flex-wrap">
            <div className="flex-left">
                <h1 className="h1 ">SMART SOLUTIONS FOR WATER AND SOLAR ENERGY</h1>
                <Link to="./Product" className="btn a mr-l btn-outline-success">Get Started</Link>
            </div>
            <div className="flex-right">
                <img src="/image/home.gif" className="img"  alt="" />
            </div>

        </div>
    );
}

export default Hero;
