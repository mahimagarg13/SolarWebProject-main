import 'bootstrap/dist/css/bootstrap.min.css';

function Discover() {
    return (<div className="">
        <p className="text-center discover heading ">Discover The Advantages</p>
        <p className="p1">Donec quis magna sit amet risus vulputate maximus eget eget arcu. Praesent sed molestie tortor.</p>

        <div className="container">

            <div className="flex-left h">
                <div className="d1">

                    <div className="card card-div m-b">
                        <div className="card-body">
                            <img className="h-w2" src="/image/solaricon.png"  alt=""/>
                            <h6 className="clrd">   Solar Panel Services</h6>
                            <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        </div></div>
                    <div className="card card-div m-b">
                        <div className="card-body">
                            <img className="h-w2" src="/image/wind.png"  alt="" />
                            <h6 className="clrd">Best Wind Energy</h6>
                            <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>

                        </div></div>
                    <div className="card card-div m-b">
                        <div className="card-body">
                            <img className="h-w2" src="/image/garan.png"  alt=""/>
                            <h6 className="clrd">Extended Gaurantee</h6>
                            <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>

                        </div></div><a href="/service" className="btn  btn-lg btn-block btn-outline-success">View All</a>


                </div>
            </div>
            <div className="flex-right h">
                <img className="f-l m-l " src="/image/discover.gif"  alt="" />
            </div>

        </div>



    </div>

    );
}
export default Discover;