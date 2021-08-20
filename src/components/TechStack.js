import React from "react";
import { Grid } from "@material-ui/core";
import * as styles from "../styles/components/techstack.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";

function TechStack({ img, title, staticImage, techStack, xs, sm, md, lg, xl }) {
	return (
		<Grid
			item
			container
			xs={xs || 5}
			sm={sm || 3}
			md={md || 3}
			lg={lg || 1}
			className={styles.container}
		>
			<Grid item xs={12} data-aos="fade-up" data-aos-duration="1000">
				{staticImage ? (
					<img
						src={img}
						alt={title + " logo"}
						className={techStack ? styles.img2 : styles.img}
					/>
				) : (
					<GatsbyImage
						image={img}
						alt={title + " logo"}
						imgClassName={techStack ? styles.img2 : styles.img}
					/>
				)}
				<h4> {title} </h4>
			</Grid>
		</Grid>
	);
}

export default TechStack;
