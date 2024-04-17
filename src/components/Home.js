//Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,

		appendDots: dots => (
			<div>
				<ul style={{
					margin: "0px", padding: "0px"
				}}> {dots} </ul>
			</div>
		),

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			}
		]
	};

	return (
		<>
			<div className="full-width-carousel">
                <h1>Welcome to Panna</h1>
                <p>Panna, in Madhya Pradesh, India's heartland, is known for its rich cultural heritage and natural beauty. 
                    This district is well-known for its diamond mines, which are the only ones in Asia, attracting both geologists and visitors.
                    The region also includes the Panna National Park, a wildlife sanctuary where visitors can see tigers, deer, and a variety of bird species.
                    The town combines historical architecture and calm scenery, creating a one-of-a-kind attraction that captures India's multifaceted soul.
</p>
				<Slider {...settings}>
					<div className="full-width-slide">
						<img src= "../assets/jugalkishorji.jpg"
							alt="Slide 1"
							className="slide-image" />
					</div>
					<div className="full-width-slide">
						<img src="./assets/view.jpg"
							alt="Slide 2"
							className="slide-image" />
					</div>
					<div className="full-width-slide">
						<img src="./assets/padmavati.jpg"
							alt="Slide 3"
							className="slide-image" />
					</div>
                    <div className="full-width-slide">
						<img src="./assets/prannath.jpg"
							alt="Slide 4"
							className="slide-image" />
					</div>
                    <div className="full-width-slide">
						<img src="./assets/diamond.jpg"
							alt="Slide 4"
							className="slide-image" />
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Home;
