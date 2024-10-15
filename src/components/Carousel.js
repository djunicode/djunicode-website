import React, { useState } from "react";
import "../styles/components/carousel.scss";

function Carousel({ children, height = "25rem", hideArrows }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === children.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? children.length - 1 : prevIndex - 1
		);
	};

	return children ? (
		<div className="carousel" style={{ height }}>
			<div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{React.Children.map(children, (child, index) => (
					<div className="carousel-item" key={index}>
						{child}
					</div>
				))}
			</div>

			{!hideArrows && children.length > 1 && (
				<>
					<button className="carousel-control prev" onClick={prevSlide}>
						❮
					</button>
					<button className="carousel-control next" onClick={nextSlide}>
						❯
					</button>
				</>
			)}
		</div>
	) : null;
}

export default Carousel;
