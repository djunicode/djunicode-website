import React from "react";
import { Grid } from "@material-ui/core";
import * as styles from "../styles/components/techstack.module.scss";
import { GatsbyImage } from 'gatsby-plugin-image'

/*
____________________
|   ___________    |
|   |Grid Item|    |
|   | (Image) |    |
|   |_________|    |
|   |Grid Item|    |
|   | (Title) |    |
|   |_________|    |
|__________________|

*/

function TechStack({ img, title, xs, sm, md, lg, xl }) {
	return (
		<Grid item container xs={xs || 5} sm={sm || 3} md={md || 3} lg={lg || 1} className={styles.container}>
			<Grid item xs={12}>
				<GatsbyImage image={img} alt={title + " logo"} imgClassName={styles.img} />
				<h4> {title} </h4>
			</Grid>
		</Grid>
	);
}

export default TechStack;
