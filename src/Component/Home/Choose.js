import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'






function Choose() {
	return (


		<div className=" m-bottom">

			<p className="heading ">Our Testimonials</p>
			<p className="p1">Feedback</p>
			<div className="splideContainer container">
				<div className="splide w-100" data-splide='{"autoplay":"true","perPage":"1"}'>
					<div className="splide__track">
						<ul className="splide__list flexWrap">
							<li className="splide__slide m-right">
								<div className="card cardContainerYellow m-b  text-center">
									<div className="card-body  m-left">
										<img className="h-w" src="/img/1p.jpeg"  alt="img"/>
										<h6 className=""> Ajay S.</h6>
										<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply text of the printing and typesetting industry text of the printing and typesetting industry." </p>

									</div></div>
							</li>
							<li className="splide__slide m-right"><div className="card cardContainerYellow text-center m-b">
								<div className="card-body">
									<img className="h-w" src="/img/2p.png" alt="img" />
									<h6 className="color">
										Akshay S.</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>

								</div></div></li>
							<li className="splide__slide m-right"><div className="card cardContainerYellow text-center m-b">
								<div className="card-body">
									<img className="h-w" src="/img/3p.jpeg" alt="img"/>
									<h6 className="color">Robert Anl</h6>
									<p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

								</div></div></li>
							<li className="splide__slide m-right">
								<div className="card cardContainerYellow  text-center m-b">
								<div className="card-body">
									<img className="h-w" src="/img/1p.jpeg" alt="img" />
									<h6 className="color">  deniel Gil</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." </p>

								</div></div></li>
							<li className="splide__slide m-right"><div className="card text-center cardContainerYellow m-b">
								<div className="card-body">
									<img className="h-w" src="/img/2p.png" alt="img"/>
									<h6 className="color">Sam R.</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." </p>

								</div></div></li>
							<li className="splide__slide m-right"><div className="card text-center cardContainerYellow m-b">
								<div className="card-body">
									<img className="h-w" src="/img/3p.jpeg" alt="img" />
									<h6 className="color">  Neel Jons</h6>
									<p className="pd">"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." </p>

								</div></div></li>
							
						</ul>
					</div>

				</div>
			</div>
		</div>





	);
}
export default Choose;