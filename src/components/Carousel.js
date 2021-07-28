import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "../styles/components/carousel.scss";

function Carousel(props) {
	return props.children ? (
		<Splide
			options={{
				rewind: true,
				type: props.children?.length > 1 ? "loop" : "slide",
				cover: true,
				fixedHeight: props.height || "25rem",
				arrows: !props.hideArrows && props.children?.length > 1,
				perPage: 1,
				gap: "1.5rem",
				padding: {
					right: "5rem",
					left: "5rem",
				},
				autoplay: true,

				breakpoints: {
					525: {
						fixedHeight: "12rem",
						padding: {
							right: "3rem",
							left: "3rem",
						},
					},
				},
			}}
		>
			{props.children.length ? (
				props.children.map((element, index) => {
					return <SplideSlide key={index}>{element}</SplideSlide>;
				})
			) : (
				<SplideSlide>{props.children}</SplideSlide>
			)}
		</Splide>
	) : null;
}

export default Carousel;
